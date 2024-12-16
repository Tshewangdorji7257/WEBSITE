import CarouselSection from './Carousel'
import { ContentType } from '@/models'
import DataError from './Errors/DataError'
import DisplayFrame from './DisplayFrame'
import ImageComponent from './ImageComponent'
import LandingPagePosts from './LandingPagePosts'
import ListComponent from './List'
import Markdown from './Markdown'
import MultiItemCarouselSection from './MultiItemCarousel'
import { ReactElement } from 'react'

interface IPostsData {
  image: string
  title: string
  id: string
  postType: string
  createdAt: string
  description: string
}
interface IContentList {
  id: string
  contentType: ContentType
  contentData: string
  posts?: IPostsData[]
  customComponent: string
  noOfItemPerRow?: number
}

// interface IContent {
//   contentData: {
//     contents: {
//       items: IContentList[]
//     }
//   }
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const Content = ({ contentData }: any): ReactElement => {
  const handleContent = (content: {
    id: string
    contentType: string
    customComponent: string
    contentData: string
    noOfItemPerRow?: number
  }): ReactElement => {
    switch (true) {
      case content.contentType === ContentType.CAROUSEL:
        return <CarouselSection data={content} />
      case content.contentType === ContentType.MULTI_IMAGE_CAROUSEL:
        return <MultiItemCarouselSection data={content} />
      case content.contentType === ContentType.MARKDOWN:
        return (
          <div className="markdown-container">
            <Markdown content={content?.contentData} />
          </div>
        )
      case content.contentType === ContentType.TEXT:
        return <div className="">{content?.contentData}</div>
      case content.contentType === ContentType.IMAGE:
        return (
          <div className="relative overflow-hidden">
            <ImageComponent
              src={content?.contentData}
              alt="info"
              className="!relative !h-auto"
              fill
            />
          </div>
        )
      case content.contentType === ContentType.SIMPLE_LIST:
        return <ListComponent data={content} />
      case content.contentType === ContentType.INFOGRAPHIC_IMAGE:
        return (
          <div className="overflow-auto mt-[35px]">
            <div className="relative w-[9000px]">
              <ImageComponent
                src={content.contentData || ''}
                alt="info"
                className="!h-auto !relative"
                fill
              />
            </div>
          </div>
        )
      case content.contentType === ContentType.VIDEO:
        return <DisplayFrame data={content} height="350" width="100%" />
      case content.contentType === ContentType.CUSTOM:
        if (content?.customComponent === 'landing_page_posts') {
          return <LandingPagePosts />
        }
        return <DataError message="No Data Found" />
      default:
        return <DataError message="No Data Found" />
    }
  }
  return (
    <div className="">
      {contentData &&
        contentData?.contents.items &&
        contentData?.contents.items.length > 0 &&
        contentData?.contents.items.map(
          (content: IContentList): ReactElement => (
            <div key={content.id} className="content-container break-word">
              {handleContent(content)}
            </div>
          )
        )}
    </div>
  )
}
export default Content
