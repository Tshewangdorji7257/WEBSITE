'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { ListPostsQuery, PageNames } from '@/API'
import { Post, PostType } from '@/models'
import { ReactElement, useEffect, useState } from 'react'

import ArticleCard from '../Cards/articles'
import DataError from '../Errors/DataError'
import Hero from '../Hero'
import PageLoader from '../Loader/PageLoader'
import PaginationComponent from '../PaginationComponent'
import SearchBar from '../SearchBar'
import SortFilter from '../SortFilter'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })

type IMediaType = ListPostsQuery['listPosts'] extends {
  items: infer T
}
  ? T
  : never

interface IOrder {
  order: number
}

const MediaCoverage = (): ReactElement => {
  const [data, setData] = useState<boolean | null | undefined>()
  const [search, setSearch] = useState('')
  const [heroSection, setHeroSection] = useState('')
  const [loader, setLoader] = useState<boolean>(true)
  const [sort, setSort] = useState('')
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
            c.postType.eq(PostType.MEDIA_COVERAGE)
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
          c.postType.eq(PostType.MEDIA_COVERAGE)
        ])
      )
      setLoader(false)
      const calculatedTotalPages: number = fetchDataForLength?.length
      setTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
      const list = response && response?.length > 0 && (response as IMediaType)
      setData(list)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, data)
    }
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const fetchHeroSection = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page: any = await fetchPageByName(PageNames.MEDIA_COVERAGE)
    const hero = page?.sections?.items
      ?.sort((a: IOrder, b: IOrder) => a.order - b.order)[0]
      ?.subSections.items[0].contents.items?.sort(
        (a: IOrder, b: IOrder) => a.order - b.order
      )
    setHeroSection(hero)
  }

  useEffect(() => {
    fetchData(search, sort)
  }, [currentPage, search, sort])

  useEffect(() => {
    fetchHeroSection()
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
    <div className="pt-12">
      <div>
        {heroSection && Array.isArray(heroSection) && (
          <div className="w-full pl-8 mb-12 company-hero-section">
            <Hero
              type="MERGED_CONTENT"
              text={heroSection[0]?.contentData}
              image={heroSection[1]?.contentData}
              title=""
              subTitle=""
              contentPosition="LEFT"
              pxRequired={false}
              textStyle="sm:max-w-lg"
              containerType="company-markdown-container media-coverage"
              mergeAmount="max-h-hero-section xl:mt-16 xl:ml-[-5rem] lg:ml-0 md:ml-0 sm:ml-0"
              fullHeight
            />
          </div>
        )}
        <div className="bg-white">
          <div className="py-12">
            <div className="flex justify-between">
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
          </div>
        </div>
        <div className="bg-white">
          {data && Array.isArray(data) && data.length > 0 ? (
            <div className="max-w-container mx-auto py-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {data &&
                Array.isArray(data) &&
                data.length > 0 &&
                data.map((item) => (
                  <div key={item.id}>
                    <ArticleCard
                      data={item}
                      postType={PostType.MEDIA_COVERAGE}
                    />
                  </div>
                ))}
            </div>
          ) : (!(data && Array.isArray(data) && data.length > 0) && loader) ||
            initLoader ? (
            <PageLoader />
          ) : (
            <DataError message="No data found" />
          )}
        </div>
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={onPageChange}
      />
    </div>
  )
}

export default MediaCoverage
