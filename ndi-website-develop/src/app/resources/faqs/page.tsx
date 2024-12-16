import { ITabsComponent } from '@/components/Resources/ResourceTabData'
import { Metadata } from 'next'
import OrganizationFaqs from '@/components/OrganizationFaqs'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import TabsComponent from '@/components/Tabs'
import UserFaqs from '@/components/UserFaqs'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.FAQS)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = (): ReactElement => {
  const tabs: ITabsComponent[] = [
    {
      index: 1,
      id: 'user',
      title: 'For User',
      component: UserFaqs,
      status: false,
      show: true
    },
    {
      index: 2,
      id: 'organization',
      title: 'For Organization',
      component: OrganizationFaqs,
      status: false,
      show: true
    }
  ]
  return (
    <>
      <ScrollUp />
      <div className="pb-12 pt-4 px-section bg-white">
        <div className="max-w-container mx-auto tabs-sticky">
          <TabsComponent tabs={tabs} pageName="FAQ" route={false} />
        </div>
      </div>
    </>
  )
}

export default Page
