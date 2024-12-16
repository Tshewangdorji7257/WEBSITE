import { API, Amplify } from 'aws-amplify'
import { ListPagesQuery, PageNames, Pages } from '@/API'

import config from '../aws-exports'
import { listPages } from '@/graphql/queries'

interface IPage {
  data: ListPagesQuery
}

Amplify.configure({ ...config })

const fetchPageByName = async (pageName: PageNames): Promise<Pages | null> => {
  try {
    const sectionData = (await API.graphql({
      query: listPages,
      variables: {
        filter: {
          pageName: {
            eq: pageName
          }
        }
      }
    })) as IPage
    const data =
      sectionData &&
      sectionData?.data &&
      sectionData?.data?.listPages &&
      sectionData?.data?.listPages.items &&
      sectionData?.data?.listPages.items.length > 0 &&
      sectionData?.data?.listPages.items[0]
    if (data) {
      return data
    }

    return null
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('Error-Page::', err)
    return null
  }
}

export default fetchPageByName
