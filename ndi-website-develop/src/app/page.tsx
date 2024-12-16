import React, { ReactElement } from 'react'

import { Amplify } from 'aws-amplify'
import HomeComponent from '@/components/UIComponents/HomeComponent'
import { Metadata } from 'next'
import { PageNames } from '@/models'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import config from '../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.HOME)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = (): ReactElement => (
  <>
    <ScrollUp />
    <HomeComponent />
  </>
)

export default Page
