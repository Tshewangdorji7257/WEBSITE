'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { Post, PostType } from '@/models'
import { ReactElement, useEffect, useState } from 'react'

import ArticleCard from '@/components/Cards/articles'
import DataError from '../Errors/DataError'
import PageLoader from '../Loader/PageLoader'
import PaginationComponent from '../PaginationComponent'
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
}

const Page = (): ReactElement => {
  const [articles, setArticles] = useState<
    boolean | null | undefined | IArticle[]
  >()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [loader, setLoader] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const pageDataLimit = 6
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const fetchData = async (searchValue?: string, sortValue?: string) => {
    setLoader(true)
    try {
      const response = await DataStore.query(
        Post,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [
            c.title.contains(searchValue || ''),
            c.postType.eq(PostType.NEWS_UPDATE)
          ]),
        {
          sort: (s) =>
            s.publishDate(
              sortValue === 'ASC'
                ? SortDirection.ASCENDING
                : SortDirection.DESCENDING
            ),
          page: currentPage - 1,
          limit: pageDataLimit
        }
      )
      const fetchDataForLength = await DataStore.query(Post, (c) =>
        // eslint-disable-next-line no-shadow
        c.and((c) => [
          c.title.contains(searchValue || ''),
          c.postType.eq(PostType.NEWS_UPDATE)
        ])
      )
      setLoader(false)
      const list = response && response?.length > 0 && (response as IArticle[])
      const calculatedTotalPages: number = fetchDataForLength?.length
      setTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
      setArticles(list)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, articles)
    }
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }
  useEffect(() => {
    fetchData(search, sort)
  }, [currentPage, search, sort])

  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
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

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])

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

        {articles && Array.isArray(articles) && articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {articles.map((item) => (
              <div key={item.id}>
                <ArticleCard data={item} />
              </div>
            ))}
          </div>
        ) : (!(articles && Array.isArray(articles) && articles.length > 0) &&
            loader) ||
          initLoader ? (
          <PageLoader />
        ) : (
          <DataError message="No data found" />
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

export default Page
