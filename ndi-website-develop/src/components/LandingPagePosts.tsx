'use client'

import 'react-alice-carousel/lib/alice-carousel.css'

import { Amplify, DataStore, Hub, Predicates, SortDirection } from 'aws-amplify'
import { ReactElement, useEffect, useState } from 'react'

import AliceCarousel from 'react-alice-carousel'
import DataError from './Errors/DataError'
import { ListPostsQuery } from '@/API'
import PageLoader from './Loader/PageLoader'
import { Post } from '@/models'
import PostCard from './Cards/Posts'
import config from '../aws-exports'

Amplify.configure({ ...config })

interface IPostCard {
  image: string
  title: string
  id: string
  postType: string
  createdAt: string
  description: string
  publishDate: string
  shortDescription: string
  customizedURL: string
}

type IMediaType = ListPostsQuery['listPosts'] extends {
  items: infer T
}
  ? T
  : never

const LandingPagePosts = (): ReactElement => {
  const [blogs, setBlogs] = useState<boolean | null | undefined | IPostCard[]>(
    []
  )
  const [items, setItems] = useState<ReactElement[]>()
  const [loader, setLoader] = useState<boolean>(true)
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const fetchData = async () => {
    setLoader(true)
    try {
      const response = await DataStore.query(Post, Predicates.ALL, {
        sort: (s) => s.publishDate(SortDirection.DESCENDING),
        limit: 6
      })
      const list = response && response?.length > 0 && (response as IMediaType)
      setBlogs(list)
      setLoader(false)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, blogs)
    }
  }

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

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 }
  }

  useEffect(() => {
    if (blogs && Array.isArray(blogs) && blogs?.length > 0) {
      const list: ReactElement[] = blogs?.map((resource) => (
        <div key={resource.id} className="posts-cards relative">
          <PostCard data={resource} />
        </div>
      ))
      setItems(list)
    }
  }, [blogs])

  return (
    <div className="carousel max-w-container relative mx-auto pt-12 pb-20 px-4">
      {items && Array.isArray(items) && items?.length > 0 ? (
        <div className="multi-carousel-container bg-cover flex h-full justify-center items-center">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="responsive"
          />
        </div>
      ) : (!(items && Array.isArray(items) && items?.length > 0) && loader) ||
        initLoader ? (
        <PageLoader />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}

export default LandingPagePosts
