import DateFormat from '@/utils/dateFormat'
import Image from 'next/image'
import { ReactElement } from 'react'
import Routes from '@/config/routes'
import { formatSlug } from '@/utils/formatSlug'
import { useRouter } from 'next/navigation'

interface IBlogCard {
  image: string
  title: string
  id: string
  author: string
  postType: string
  description: string
  createdAt: string
  publishDate: string
  shortDescription: string
  customizedURL?: string
}

interface IProps {
  data: IBlogCard
}

const BlogCard = ({ data }: IProps): ReactElement => {
  const router = useRouter()

  const handleCardClick = () => {
    // Navigate to the detailed page
    router.push(
      Routes.item + formatSlug(data.customizedURL ? data.customizedURL : data.title, data.id)
    )
  }

  return (
    <div
      className="group relative rounded-3xl overflow-hidden w-full max-w-[380px] transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={handleCardClick} // Make the whole card clickable
    >
      {/* Image with hover effect */}
      <div className="relative">
        <Image
          src={data.image || ''}
          alt={data.title}
          className="w-full h-[235px] object-cover group-hover:brightness-50 transition-all duration-300"
          height={235}
          width={375}
        />
        {/* Optional overlay effect */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Content (Appears only on hover with slide-up effect) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 ease-in-out group-hover:bg-grey/60 rounded-3xl">
        {/* Title */}
        <div className="text-white text-[18px] font-medium text-center">
          {data.title}
        </div>

        {/* Description */}
        <div className="text-white text-[14px] font-normal text-center pt-2.5 multiline-ellipsis">
          {data?.shortDescription ? data?.shortDescription : data?.description}
        </div>

        {/* Author and Date */}
        <div className="flex justify-between text-ndi-light-gray text-sm font-normal pt-5">
          <div className="flex flex-wrap">
            {data?.author && (
              <>
                <span>By {data.author}</span>
                <span className="mx-2">|</span>
              </>
            )}
            {DateFormat(data.publishDate ? data.publishDate : data.createdAt)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
