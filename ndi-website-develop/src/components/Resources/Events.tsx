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

const Event = (): ReactElement => {
  const [articles, setArticles] = useState<
    boolean | null | undefined | IArticle[]
  >()
  const [pastArticles, setPastArticles] = useState<
    boolean | null | undefined | IArticle[]
  >()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [loader, setLoader] = useState<boolean>(true)
  const [loaderUpcomingPost, setLoaderUpcomingPost] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [upComingCurrentPage, setUpComingCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [upComingTotalPages, setUpcomingTotalPages] = useState(0)
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const pageDataLimit = 6
  const currentDate = new Date().toISOString()

  const fetchUpcomingPosts = async (
    searchValue?: string,
    sortValue?: string
  ): Promise<void> => {
    setLoaderUpcomingPost(true)
    try {
      const responseUpcoming = await DataStore.query(
        Post,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [
            c.title.contains(searchValue || ''),
            c.postType.eq(PostType.EVENT),
            c.dateOfEvent.gt(currentDate)
          ]),
        {
          sort: (s) =>
            s.publishDate(
              sortValue === 'ASC'
                ? SortDirection.ASCENDING
                : SortDirection.DESCENDING
            ),
          page: upComingCurrentPage - 1,
          limit: pageDataLimit
        }
      )
      const fetchDataForLength = await DataStore.query(Post, (c) =>
        // eslint-disable-next-line no-shadow
        c.and((c) => [
          c.title.contains(searchValue || ''),
          c.postType.eq(PostType.EVENT),
          c.dateOfEvent.gt(currentDate)
        ])
      )
      const calculatedTotalPages: number = fetchDataForLength?.length
      setUpcomingTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
      setLoaderUpcomingPost(false)
      const upcomingList =
        responseUpcoming &&
        responseUpcoming?.length > 0 &&
        (responseUpcoming as IArticle[])
      setArticles(upcomingList)
    } catch (err) {
      setLoaderUpcomingPost(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, articles)
    }
  }

  const fetchData = async (searchValue?: string, sortValue?: string) => {
    setLoader(true)
    try {
      const responsePast = await DataStore.query(
        Post,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [
            c.title.contains(searchValue || ''),
            c.postType.eq(PostType.EVENT),
            c.dateOfEvent.lt(currentDate)
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
          c.postType.eq(PostType.EVENT),
          c.dateOfEvent.lt(currentDate)
        ])
      )
      setLoader(false)
      const pastList =
        responsePast && responsePast?.length > 0 && (responsePast as IArticle[])
      const calculatedTotalPages: number = fetchDataForLength?.length
      setTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
      setPastArticles(pastList)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, articles)
    }
  }
  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const onUpComingPageChange = (page: number) => {
    setUpComingCurrentPage(page)
  }

  useEffect(() => {
    fetchData(search, sort)
    fetchUpcomingPosts(search, sort)
  }, [currentPage, upComingCurrentPage, search, sort])

  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen('datastore', async (capsule) => {
      setInitLoader(true)

      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchData()
        fetchUpcomingPosts()
        setInitLoader(false)
      }
    })

    fetchData()
    fetchUpcomingPosts()

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
                fetchUpcomingPosts()
                setSearch(value)
              }}
            />
          </div>
          <SortFilter
            onSortOptionSelect={(value) => {
              fetchData(search, value)
              fetchUpcomingPosts()
              setSort(value)
            }}
          />
        </div>
        {articles && Array.isArray(articles) ? (
          <div>
            <h1 className="head-text !mb-12">Upcoming Events</h1>
            {articles.length > 0 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {articles.map((item) => (
                  <div key={item.id}>
                    <ArticleCard data={item} postType={PostType.EVENT} />
                  </div>
                ))}
              </div>
            )}
            <PaginationComponent
              currentPage={upComingCurrentPage}
              totalPages={upComingTotalPages}
              setCurrentPage={onUpComingPageChange}
            />
          </div>
        ) : !(articles && Array.isArray(articles)) && loaderUpcomingPost ? (
          <PageLoader />
        ) : (
          <DataError message="No upcoming events" showImage={false} />
        )}
        {pastArticles && Array.isArray(pastArticles) ? (
          <div>
            <h1 className="head-text !mb-12 mt-28">Past Events</h1>
            {pastArticles.length > 0 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {pastArticles.map((item) => (
                  <div key={item.id}>
                    <ArticleCard data={item} postType={PostType.EVENT} />
                  </div>
                ))}
              </div>
            )}
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={onPageChange}
            />
          </div>
        ) : (!(pastArticles && Array.isArray(pastArticles)) && loader) ||
          initLoader ? (
          !loaderUpcomingPost && <PageLoader />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Event
