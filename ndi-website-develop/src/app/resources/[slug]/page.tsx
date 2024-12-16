import { Content, PageNames } from '@/API'

import { Metadata } from 'next'
import { ReactElement } from 'react'
import ResourceComponent from '@/components/Resources/ResourceComponent'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const sections = await fetchPageByName(PageNames.RESOURCE)
  if (sections) {
    return SEOData(sections)
  }
  return SEO
}

const Page = async (): Promise<ReactElement> => {
  const response = await fetchPageByName(PageNames.RESOURCE)
  const ssrSection =
    response &&
    response?.sections &&
    response?.sections?.items &&
    response?.sections?.items.length > 0 &&
    response?.sections?.items[0]?.subSections &&
    response?.sections?.items[0]?.subSections?.items &&
    response?.sections?.items[0]?.subSections?.items.length > 0 &&
    response?.sections?.items[0]?.subSections?.items[0]?.contents &&
    response?.sections?.items[0]?.subSections?.items[0]?.contents?.items
      ?.length > 0 &&
    (response?.sections?.items[0]?.subSections.items[0].contents.items?.sort(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (a: any, b: any) => a.order - b.order
    ) as Content[])
  return ssrSection ? <ResourceComponent ssrSection={ssrSection} /> : <div />
}

export default Page
