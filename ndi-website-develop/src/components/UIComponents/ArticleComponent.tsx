'use client'

import { Amplify, DataStore, Hub } from 'aws-amplify'
import { ReactElement, useEffect, useState } from 'react'
import { fetchPostData, fetchRecommendations } from '@/services/article.service'

import ArticleCard from '@/components/Cards/articles'
import BackButton from '../Buttons/BackButton'
import DataError from '@/components/Errors/DataError'
import DateFormat from '@/utils/dateFormat'
import ImageComponent from '@/components/ImageComponent'
import Link from 'next/link'
import Markdown from '@/components/Markdown'
import PageLoader from '../Loader/PageLoader'
import { PostType } from '@/models'
import Routes from '@/config/routes'
import config from '../../aws-exports'
import { getId } from '@/utils/formatSlug'

Amplify.configure({ ...config })

interface IPosts {
  createdAt: string
  description: string
  id: string
  image: string
  postType: PostType
  title: string
  shortDescription: string
  author: string
  publishDate: string
  customizedURL: string
}

interface IPostCard {
  image: string
  title: string
  id: string
  postType: string
  createdAt: string
  description: string
  shortDescription: string
  author: string
  publishDate: string
}

interface IProps {
  slug: string
}

const ArticleComponent = ({ slug }: IProps): ReactElement => {
  const [postData, setPostData] = useState<IPosts>()
  const [recommended, setRecommended] = useState<IPostCard[]>([])
  const [recommendedPostsData, setRecommendedPostsData] = useState<
    false | IPostCard[]
  >()
  const [loader, setLoader] = useState<boolean>(true)
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const postId = getId(slug)

  const fetchPostDetails = async (id: string) => {
    try {
      const postDetails = await fetchPostData(id)
      if (postDetails && Object.keys(postDetails).length > 0) {
        const recommendedDetails = (await fetchRecommendations(
          postDetails?.postType
        )) as IPostCard[]
        setPostData(postDetails)
        setRecommended(recommendedDetails)
        setLoader(false)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error::', err)
      setLoader(false)
    }
  }

  const handleRedirection = (type: string): string => {
    switch (true) {
      case type === PostType.BLOG:
        return Routes.resources.blogs
      case type === PostType.EVENT:
        return Routes.resources.events
      case type === PostType.NEWS_UPDATE:
        return Routes.resources.newsUpdate
      case type === PostType.VACANCY_ANNOUNCEMENT:
        return Routes.company.career
      case type === PostType.WEBINAR:
        return Routes.resources.webinars
      case type === PostType.PUBLICATIONS:
        return Routes.resources.publications
      default:
        return Routes.home
    }
  }

  useEffect(() => {
    setLoader(true)
    fetchPostDetails(postId)
    const removeListener = Hub.listen('datastore', async (capsule) => {
      setInitLoader(true)
      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchPostDetails(postId)
        setInitLoader(false)
      }
    })
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])

  useEffect(() => {
    const modifiedRecommendedPosts =
      recommended &&
      Array.isArray(recommended) &&
      recommended.length > 0 &&
      recommended.filter((item) => item.id !== postId).slice(0, 3)
    setRecommendedPostsData(modifiedRecommendedPosts)
  }, [recommended])

  return (
    <div className="bg-white px-section">
      {loader || initLoader ? (
        <PageLoader fullHeight />
      ) : (
        <div className="max-w-container mx-auto">
          <div className="post-id-container">
            {postData && Object.keys(postData).length > 0 ? (
              <div className="text-black py-[50px]">
                <div className="mb-[50px]">
                  <BackButton />
                </div>
                <div className="text-[40px] leading-[normal] font-bold mb-[50px]">
                  {postData?.title}
                </div>
                <div className="relative mb-[50px]">
                  <ImageComponent
                    src={postData?.image || ''}
                    alt={postData?.title}
                    className="w-full h-fit sm:h-[600px] object-contain sm:object-cover object-center"
                    height={600}
                    width={355}
                  />
                </div>
                <div className="text-[20px] text-[#494C4F] font-normal leading-[normal] mb-2.5">
                  {postData?.shortDescription}
                </div>
                <div className="flex justify-between text-ndi-light-gray text-sm font-normal">
                  <div className="flex flex-wrap">
                    {postData?.author && (
                      <>
                        <span>By {postData.author}</span>
                        <span className="mx-2">|</span>
                      </>
                    )}
                    {DateFormat(
                      postData.publishDate
                        ? postData.publishDate
                        : postData.createdAt
                    )}
                  </div>
                </div>
                <div className="mt-16">
                  {postData?.description && (
                    <Markdown content={postData?.description} />
                  )}
                </div>
              </div>
            ) : (
              <DataError message="No post found" />
            )}
          </div>
          <div className="border-t-2 pt-8 pb-24">
            <h3 className="text-3xl	font-medium text-[#494C4F] mb-6">
              Recommended Post
              {recommendedPostsData &&
                Array.isArray(recommendedPostsData) &&
                recommendedPostsData?.length > 1 &&
                's'}
            </h3>
            {recommendedPostsData &&
            Array.isArray(recommendedPostsData) &&
            recommendedPostsData.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {recommendedPostsData &&
                    recommendedPostsData.map((item: IPostCard) => (
                      <div key={item.id}>
                        <ArticleCard data={item} />
                      </div>
                    ))}
                </div>
                <div className="flex justify-center mt-16">
                  <Link
                    className="text-xl font-medium text-white bg-ndi-emrald hover:text-white rounded-full px-[50px] py-[10px] mt-[1.25rem] w-fit hover:opacity-70"
                    href={handleRedirection(
                      postData?.postType ? postData?.postType : PostType.BLOG
                    )}
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            ) : (
              <DataError message="No data found" showImage={false} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticleComponent
