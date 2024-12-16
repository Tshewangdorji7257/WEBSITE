import ContactUs from '@/components/Company/ContactUs'
import { Metadata } from 'next'
import { PageNames } from '@/API'
import { ReactElement } from 'react'
import SEO from '@/config/defaultSEO'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import fetchPageByName from '@/services/page.service'

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageByName(PageNames.CONTACT_US)
  if (page) {
    return SEOData(page)
  }
  return SEO
}

const ContactUsPage = async (): Promise<ReactElement> => (
  <>
    <ScrollUp />
    <ContactUs />
  </>
)

export default ContactUsPage
