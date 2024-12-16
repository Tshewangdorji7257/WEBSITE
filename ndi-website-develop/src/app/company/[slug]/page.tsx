import { Amplify } from 'aws-amplify'
import CompanyData from '@/components/Company/CompanyTabsData'
import CompanyTabs from '@/components/Company/CompanyTabs'
import { ITabsComponent } from '@/components/Resources/ResourceTabData'
import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import config from '../../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params
  const pageName = CompanyData.find(
    (item) => item?.route && item?.route.includes(slug)
  )?.id as PageNames
  if (pageName) {
    const sections = await fetchPageByName(pageName)
    if (sections) {
      return SEOData(sections)
    }
    return SEO
  }
  return SEO
}

const Page = ({ params }: { params: { slug: string } }): ReactElement => {
  const { slug } = params
  const tabs: ITabsComponent[] = CompanyData.map((tab: ITabsComponent) => {
    if (tab?.route && tab?.route.includes(slug)) {
      return {
        ...tab,
        status: true
      }
    }
    return tab
  })

  return (
    <>
      <ScrollUp />
      <CompanyTabs tabs={tabs} slug={slug} />
    </>
  )
}

export default Page
