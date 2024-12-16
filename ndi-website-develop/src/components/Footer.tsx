import { API } from 'aws-amplify'
import FooterComponent from './UIComponents/FooterComponent'
import { GraphQLQuery } from '@aws-amplify/api'
import { ListFootersQuery } from '@/API'
import { ReactElement } from 'react'
import { listFooters } from '@/graphql/queries'

type IMediaType = ListFootersQuery['listFooters'] extends {
  items: infer T
}
  ? T
  : never

interface IFooterMenu {
  id: string
  name: string
  route: string
  order: number
}

interface IFooterSection {
  id: string
  footerMenu: {
    items: IFooterMenu[]
  }
  title: string
  order: number
}

interface IFooterData {
  footerNote: string
  footerSections: {
    items: IFooterSection[]
  }
}

const fetchCommonData = async () => {
  try {
    const response = await API.graphql<GraphQLQuery<ListFootersQuery>>({
      query: listFooters
    })

    return (
      response &&
      response?.data &&
      response?.data?.listFooters &&
      (response?.data?.listFooters?.items[0] as IMediaType)
    )
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error-header:::', err)
    return null
  }
}

const FooterPage = async (): Promise<ReactElement> => {
  const data = (await fetchCommonData()) as unknown as IFooterData
  return <FooterComponent footerData={data} />
}

const Footer = FooterPage as unknown as () => ReactElement
export default Footer
