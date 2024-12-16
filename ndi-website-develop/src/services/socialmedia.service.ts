import { DataStore, SortDirection } from 'aws-amplify'

import { SocialMedia } from '@/models'

const fetchSocialMediaList = () =>
  DataStore.query(
    SocialMedia,
    (c) =>
      // eslint-disable-next-line no-shadow
      c.and((c) => [c.isActive.eq(true)]),
    {
      sort: (s) => s.order(SortDirection.ASCENDING)
    }
  )

export default fetchSocialMediaList
