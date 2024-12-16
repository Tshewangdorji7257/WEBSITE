import ArticleComponent from '@/components/UIComponents/ArticleComponent'
import { Metadata } from 'next'
import { ReactElement } from 'react'
import SEOData from '@/utils/seo'
import ScrollUp from '@/components/ScrollUp'
import { fetchPostData } from '@/services/article.service'
import { getId } from '@/utils/formatSlug'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const postId = getId(params?.slug)
  const page = await fetchPostData(postId)
  return SEOData(page)
}

const Page = async ({
  params
}: {
  params: { slug: string }
}): Promise<ReactElement> => (
  <>
    <ScrollUp />
    <ArticleComponent slug={params?.slug} />
  </>
)

export default Page
