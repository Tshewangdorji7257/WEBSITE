import { API, DataStore, SortDirection } from 'aws-amplify'
import { Post, PostType } from '@/models'

import { GetPostQuery } from '@/API'
import { GraphQLQuery } from '@aws-amplify/api'
import { getPost } from '@/graphql/queries'

interface IListSections {
  data: GetPostQuery
}
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
  keywords: string
  viewPort: string
  publisher: string
  canonical: string
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

const fetchPostData = async (id: string): Promise<IPosts> => {
  try {
    const response = (await API.graphql<GraphQLQuery<Post>>({
      query: getPost,
      variables: { id }
    })) as IListSections
    return response?.data?.getPost as IPosts
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error::', err)
    throw err
  }
}

const fetchRecommendations = async (
  type: PostType
): Promise<IPostCard[] | null> => {
  try {
    const response = await DataStore.query(
      Post,
      (c) =>
        // eslint-disable-next-line no-shadow
        c.and((c) => [c.postType.eq(type)]),
      {
        sort: (s) => s.createdAt(SortDirection.DESCENDING),
        limit: 4
      }
    )

    if (response && Array.isArray(response) && response?.length > 0) {
      return response as IPostCard[]
    }

    return null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error::', err)
    return null
  }
}
export { fetchPostData, fetchRecommendations }
