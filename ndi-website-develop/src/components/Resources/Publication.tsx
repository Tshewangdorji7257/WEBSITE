'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { Post, PostType } from '@/models'
import { ReactElement, useCallback, useEffect, useState } from 'react'

import DataError from '../Errors/DataError'
import PageLoader from '../Loader/PageLoader'
import PaginationComponent from '../PaginationComponent'
import Publications from '@/components/Cards/publications'
import SearchBar from '../SearchBar'
import SortFilter from '../SortFilter'
import config from '../../aws-exports'

Amplify.configure({ ...config })
interface IArticle {
  image: string
  title: string
  id: string
  postType: string
  description: string
  createdAt: string
  shortDescription?: string
  publishDate: string
  customizedURL: string
  pdfURL?: string
}

const Publication = (): ReactElement => {
  const [articles, setArticles] = useState<IArticle[]>([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [loader, setLoader] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const pageDataLimit = 6
  const [initLoader, setInitLoader] = useState<boolean>(false)
  const [visibleCount, setVisibleCount] = useState(2)

  const fetchData = useCallback(
    async (searchValue?: string, sortValue?: string) => {
      setLoader(true)
      try {
        const response = await DataStore.query(
          Post,
          (post) =>
            post.and((p) => [
              p.title.contains(searchValue || ''),
              p.postType.eq(PostType.PUBLICATIONS)
            ]),
          {
            sort: (sortOption) =>
              sortOption.publishDate(
                sortValue === 'ASC'
                  ? SortDirection.ASCENDING
                  : SortDirection.DESCENDING
              ),
            page: currentPage - 1,
            limit: pageDataLimit
          }
        )
        const fetchDataForLength = await DataStore.query(Post, (post) =>
          post.and((p) => [
            p.title.contains(searchValue || ''),
            p.postType.eq(PostType.PUBLICATIONS)
          ])
        )
        setLoader(false)
        const list =
          response && response.length > 0 ? (response as IArticle[]) : []
        const calculatedTotalPages: number = fetchDataForLength.length
        setTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
        setArticles(list)
      } catch (err) {
        setLoader(false)
        // eslint-disable-next-line no-console
        console.error('Error:', err)
      }
    },
    [currentPage, pageDataLimit]
  )

  const loadMoreArticles = () => {
    setVisibleCount((prevCount) => prevCount + 2)
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchData(search, sort)
  }, [currentPage, search, sort, fetchData])

  useEffect(() => {
    const removeListener = Hub.listen('datastore', async (capsule) => {
      setInitLoader(true)

      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchData()
        setInitLoader(false)
      }
    })

    fetchData()

    DataStore.start()
    return () => {
      removeListener()
    }
  }, [fetchData])

  return (
    <div className="bg-white">
      <div className="max-w-container mx-auto py-12">
        <div className="flex justify-between mb-16">
          <div className="w-[75%] mr-4">
            <SearchBar
              onSearchSubmit={(value) => {
                fetchData(value, sort)
                setSearch(value)
              }}
            />
          </div>
          <SortFilter
            onSortOptionSelect={(value) => {
              fetchData(search, value)
              setSort(value)
            }}
          />
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1">
            {articles.slice(0, visibleCount).map((item) => (
              <div key={item.id}>
                <Publications data={item} />
              </div>
            ))}
          </div>
        ) : loader || initLoader ? (
          <PageLoader />
        ) : (
          <DataError message="No data found" />
        )}
        {visibleCount < articles.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreArticles}
              className="px-4 py-2 rounded"
              style={{
                borderColor: '#5AC994',
                color: '#5AC994',
                borderWidth: '1px'
              }}
              type="button"
            >
              Load More
            </button>
          </div>
        )}
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={onPageChange}
        />
      </div>
    </div>
  )
}

export default Publication
