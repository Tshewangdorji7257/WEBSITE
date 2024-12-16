import { DataStore, SortDirection } from 'aws-amplify'
import { Services, ServicesType, Solutions } from '@/models'

const fetchOrganizationServices = () =>
  DataStore.query(
    Services,
    (c) =>
      // eslint-disable-next-line no-shadow
      c.and((c) => [
        c.serviceType.eq(ServicesType.ORG_SERVICES),
        c.isActive.eq(true)
      ]),
    {
      sort: (s) => s.order(SortDirection.ASCENDING)
    }
  )

const fetchOrganizationSolutions = () =>
  DataStore.query(Solutions, (c) => c.isActive.eq(true), {
    sort: (s) => s.order(SortDirection.ASCENDING)
  })

export { fetchOrganizationServices, fetchOrganizationSolutions }
