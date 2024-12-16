import { Metadata } from 'next'
import { Pages } from '@/API'
import { PostType } from '@/models'
import SEO from '@/config/defaultSEO'

interface IPosts {
  createdAt: string
  description: string
  id: string
  image: string
  postType: PostType
  title: string
  shortDescription: string
  author: string
  publishDate: string
  customizedURL: string
  keywords: string
  viewPort: string
  publisher: string
  canonical: string
}
const SEOData = (data: Pages | IPosts): Metadata => ({
  ...SEO,
  title: data?.title || SEO.title,
  description: data?.description || SEO.description,
  keywords: data?.keywords || SEO.keywords,
  viewport: data?.viewPort || SEO.viewport,
  authors: data?.author
    ? {
        name: data?.author
      }
    : SEO.authors,
  alternates: data?.canonical
    ? {
        canonical: data?.canonical
      }
    : SEO.alternates,
  publisher: data?.publisher || SEO.publisher
})

export default SEOData
