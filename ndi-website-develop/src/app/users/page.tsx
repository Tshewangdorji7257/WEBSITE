import React, { ReactElement } from 'react'

import { Metadata } from 'next'
import { PageNames } from '@/models'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import UsersComponent from '@/components/UIComponents/UsersComponent'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.FOR_USER)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = (): ReactElement => (
  <>
    <ScrollUp />
    <UsersComponent />
  </>
)

export default Page
