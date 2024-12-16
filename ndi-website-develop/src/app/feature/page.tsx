import FeatureComponent from '@/components/UIComponents/FeatureComponent'
import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.FEATURE_VIEWMORE)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}
const Page = (): ReactElement => <FeatureComponent />

export default Page
