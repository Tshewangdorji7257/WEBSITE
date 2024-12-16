import Governance from '@/components/Governance'
import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.GOVERNANCE)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = async (): Promise<ReactElement> => (
  <>
    <ScrollUp />
    <Governance />
  </>
)

export default Page
