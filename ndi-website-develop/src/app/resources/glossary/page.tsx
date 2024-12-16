import { Amplify } from 'aws-amplify'
import GlossaryComponent from '@/components/Resources/GlossaryComponent'
import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import config from '../../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.GLOSSARY)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = (): ReactElement => (
  <>
    <ScrollUp />
    <GlossaryComponent />
  </>
)

export default Page
