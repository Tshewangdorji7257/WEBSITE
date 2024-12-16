import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import TermsOfServicesComponent from '@/components/UIComponents/TermsOfServicesComponent'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.TERMS_OF_SERVICE)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = async (): Promise<ReactElement> => (
  <>
    <ScrollUp />
    <TermsOfServicesComponent />
  </>
)

export default Page
