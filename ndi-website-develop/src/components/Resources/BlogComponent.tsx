'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { Content, ListPostsQuery, PageNames } from '@/API'
import { Post, PostType } from '@/models'
import { ReactElement, useEffect, useState } from 'react'

import BlogCard from '@/components/Cards/blogs'
import DataError from '@/components/Errors/DataError'
import Hero from '@/components/Hero'
import PageLoader from '@/components/Loader/PageLoader'
import PaginationComponent from '@/components/PaginationComponent'
import SearchBar from '@/components/SearchBar'
import SortFilter from '@/components/SortFilter'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })

interface IBlogCard {
  image: string
  title: string
  id: string
  postType: string
  description: string
  createdAt: string
  author: string
  publishDate: string
  shortDescription: string
}

type IMediaType = ListPostsQuery['listPosts'] extends {
  items: infer T
}
  ? T
  : never

const BlogComponent = (): ReactElement => {
  const [blogs, setBlogs] = useState<boolean | null | undefined | IBlogCard[]>()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')
  const [loader, setLoader] = useState<boolean>(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [heroSection, setHeroSection] = useState<Content[]>()
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const pageDataLimit = 6

  const fetchData = async (searchValue?: string, sortValue?: string) => {
    setLoader(true)
    try {
      const response = await DataStore.query(
        Post,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [
            c.title.contains(searchValue || ''),
            c.postType.eq(PostType.BLOG)
          ]),
        {
          sort: (s) =>
            s.createdAt(
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
          c.postType.eq(PostType.BLOG)
        ])
      )
      setLoader(false)
      const list = response && response?.length > 0 && (response as IMediaType)
      const calculatedTotalPages: number = fetchDataForLength?.length
      setTotalPages(Math.ceil(calculatedTotalPages / pageDataLimit))
      setBlogs(list)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, blogs)
    }
  }

  const onPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const fetchPageData = async () => {
    const sectionsData = await fetchPageByName(PageNames.BLOGS)
    const sectionData =
      sectionsData &&
      sectionsData?.sections &&
      sectionsData.sections?.items &&
      sectionsData.sections?.items.length > 0 &&
      sectionsData.sections?.items[0]?.subSections &&
      sectionsData.sections?.items[0]?.subSections?.items &&
      sectionsData.sections?.items[0]?.subSections?.items.length > 0 &&
      sectionsData.sections?.items[0]?.subSections?.items[0]?.contents &&
      sectionsData.sections?.items[0]?.subSections?.items[0]?.contents?.items
        ?.length > 0 &&
      (sectionsData?.sections?.items[0]?.subSections.items[0].contents.items?.sort(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any, b: any) => a.order - b.order
      ) as Content[])
    if (sectionData) {
      setHeroSection(sectionData)
    }
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
    fetchPageData()

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])

  const isHeroSection = Boolean(
    heroSection &&
      heroSection.length > 0 &&
      Boolean(heroSection[0]?.contentData)
  )

  return (
    <>
      {heroSection && Array.isArray(heroSection) && (
        <div className="bg-ndi-gray">
          <Hero
            type="MERGED_CONTENT"
            text={
              isHeroSection && typeof heroSection[0]?.contentData === 'string'
                ? heroSection[0]?.contentData
                : ''
            }
            image={
              isHeroSection && typeof heroSection[1]?.contentData === 'string'
                ? heroSection[1]?.contentData
                : ''
            }
            title=""
            subTitle=""
            contentPosition="LEFT"
            textStyle="pt-12"
            mergeAmount="max-h-hero-section xl:ml-[-20rem] lg:ml-0 md:ml-0 sm:ml-0"
            fullHeight
          />
        </div>
      )}
      <div className="bg-white px-section">
        <div className="max-w-container mx-auto py-12">
          <div className="flex justify-between mb-8">
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
          <div>
            {blogs && Array.isArray(blogs) && blogs.length > 0 ? (
              <div>
                {blogs.map((item) => (
                  <div key={item.id}>
                    <BlogCard data={item} />
                  </div>
                ))}
              </div>
            ) : (!(blogs && Array.isArray(blogs) && blogs.length) && loader) ||
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
      </div>
    </>
  )
}

export default BlogComponent
