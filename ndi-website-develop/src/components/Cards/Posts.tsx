import { ReactElement, useState } from 'react'

import DateFormat from '@/utils/dateFormat'
import ImageComponent from '../ImageComponent'
import Link from 'next/link'
import { PostType } from '@/models'
import Routes from '@/config/routes'
import VideoPopup from '../Popups/VideoPopup'
import { formatSlug } from '@/utils/formatSlug'
import { useRouter } from 'next/navigation'

interface IPostCard {
  image: string
  title: string
  id: string
  postType: string
  createdAt: string
  description: string
  url?: string
  dateOfEvent?: string
  publishDate: string
  shortDescription: string
  customizedURL: string
}

interface IProps {
  data: IPostCard
}

const handleRedirection = (type: string): string => {
  switch (true) {
    case type === PostType.BLOG:
      return Routes.resources.blogs
    case type === PostType.EVENT:
      return Routes.resources.events
    case type === PostType.NEWS_UPDATE:
      return Routes.resources.newsUpdate
    case type === PostType.VACANCY_ANNOUNCEMENT:
      return Routes.company.career
    case type === PostType.WEBINAR:
      return Routes.resources.webinars
    case type === PostType.MEDIA_COVERAGE:
      return Routes.company.mediaCoverage
    default:
      return '/'
  }
}

const PostCard = ({ data }: IProps): ReactElement => {
  const [isOpenVideoPopup, setIsOpenPopUp] = useState<boolean>(false)
  const content = {
    id: data.id,
    contentData: data.url ? data.url : ''
  }
  const router = useRouter()
  const onOpenCloseVideoOnPopup = () => {
    setIsOpenPopUp(!isOpenVideoPopup)
  }
  return (
    <div>
      <div>
        <ImageComponent
          src={data.image || ''}
          alt={data.title}
          className="w-full h-[165px] object-cover rounded-[10px]"
          height={165}
          width={355}
        />
      </div>
      <div className="flex justify-between text-ndi-light-gray text-xs font-normal py-4">
        <div>
          <Link href={handleRedirection(data.postType)}>
            {data.postType && data.postType === PostType.NEWS_UPDATE
              ? 'news & update'
              : data.postType
              ? data.postType.toLowerCase()?.split('_').join(' ')
              : ''}
          </Link>
        </div>
        <div>
          {DateFormat(data?.publishDate ? data?.publishDate : data.createdAt)}
        </div>
      </div>
      <Link
        className="text-base text-ndi-gray font-medium leading-[normal]"
        href={
          Routes.item +
          formatSlug(
            data.customizedURL ? data.customizedURL : data.title,
            data.id
          )
        }
      >
        {data.title}
      </Link>
      <h6 className="text-xs font-normal mt-2.5 text-ndi-gray multiline-ellipsis">
        {data?.shortDescription ? data?.shortDescription : data?.description}
      </h6>
      <div className="absolute h-[75px] left-0 -bottom-[1px] w-full bg-gradient-to-t from-white to-transparent" />
      {data.postType !== PostType.WEBINAR ? (
        <button
          type="button"
          className="absolute flex items-center text-white rounded-full bottom-[27px] right-[27px] text-sm font-medium bg-ndi-emrald p-1"
          onClick={() => {
            if (data.postType === PostType.MEDIA_COVERAGE && data.url) {
              window.open(data.url, '_blank')
            } else {
              router.push(
                Routes.item +
                  formatSlug(
                    data.customizedURL ? data.customizedURL : data.title,
                    data.id
                  )
              )
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="absolute flex items-center text-white rounded-full bottom-[27px] right-[27px] text-sm font-medium bg-ndi-emrald p-1"
          onClick={onOpenCloseVideoOnPopup}
          title="Play video"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </button>
      )}
      {isOpenVideoPopup && (
        <VideoPopup
          show={isOpenVideoPopup}
          data={content}
          onClose={(value) => setIsOpenPopUp(value)}
        />
      )}
    </div>
  )
}

export default PostCard
