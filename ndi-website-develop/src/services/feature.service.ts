import { ListFeaturesQuery, Pages } from '@/API'

import { API } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { listFeatures } from '@/graphql/queries'

interface IListSections {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: ListFeaturesQuery | any
}
interface IOrder {
  order: number
}
const fetchFeatureDetails = async () => {
  const response = (await API.graphql<GraphQLQuery<Pages>>({
    query: listFeatures
  })) as IListSections

  return response?.data?.listFeatures?.items?.sort(
    (a: IOrder, b: IOrder) => a.order - b.order
  )
}

export default fetchFeatureDetails
