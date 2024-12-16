'use client'

import { ReactElement, useState } from 'react'

import DateFormat from '@/utils/dateFormat'
import DisplayFrame from '../DisplayFrame'
import { PostType } from '@/models'
import VideoPopup from '../Popups/VideoPopup'

interface IArticleCard {
  image: string
  title: string
  url: string
  id: string
  postType: string
  description: string
  createdAt: string
  dateOfEvent?: string
  publishDate: string
  shortDescription: string
}

interface IProps {
  data: IArticleCard
}

const Webinar = ({ data }: IProps): ReactElement => {
  const [isOpenVideoPopup, setIsOpenPopUp] = useState<boolean>(false)
  const content = {
    id: data.id,
    contentData: data.url,
  }
  const onOpenCloseVideoOnPopup = () => {
    setIsOpenPopUp(!isOpenVideoPopup)
  }

  return (
    <>
      <div className="relative flex flex-col overflow-hidden rounded-xl shadow-lg bg-white max-w-sm">
        {/* Image Section */}
        {data.image && (
          <div className="relative h-[200px] w-full overflow-hidden">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="p-4 bg-gray-50">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
            {data.title}
          </h3>
          <div className="text-xs font-medium text-gray-500 mt-2">
            {DateFormat(
              data.postType === PostType.WEBINAR && data?.publishDate
                ? data?.publishDate
                : data.createdAt
            )}{' '}
            |{' '}
            {data.postType && data.postType.toLowerCase()?.split('_').join(' ')}
          </div>
        </div>

        {/* Play Button */}
        <button
          type="button"
          className="absolute flex items-center justify-center text-white rounded-full bg-ndi-emrald w-12 h-12 bottom-4 right-4 shadow-md hover:bg-ndi-emrald-dark transition-colors"
          onClick={onOpenCloseVideoOnPopup}
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
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {/* Video Popup */}
      {isOpenVideoPopup && (
        <VideoPopup
          show={isOpenVideoPopup}
          data={content}
          onClose={(value) => setIsOpenPopUp(value)}
        />
      )}
    </>
  )
}

export default Webinar
