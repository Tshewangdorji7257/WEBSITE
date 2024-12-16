import ImageComponent from '../ImageComponent'
import { ReactElement } from 'react'

interface IArticleCard {
  image: string
  title: string
  id: string
  postType: string
  description: string
  shortDescription?: string
  createdAt: string
  url?: string
  dateOfEvent?: string
  publishDate: string
  customizedURL?: string
  pdfURL?: string
}

interface IProps {
  data: IArticleCard
}

const truncateShortDescription = (description: string) => {
  const indexOfBracket = description.indexOf('[')
  return indexOfBracket !== -1
    ? description.slice(0, indexOfBracket)
    : description
}

const Publications = ({ data }: IProps): ReactElement => {
  const truncatedDescription = data.description
    ? truncateShortDescription(data.description)
    : ''

  return (
    <div className="group relative rounded-3xl overflow-hidden w-full max-w-[380px] transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Image with hover effect */}
      <div>
        <ImageComponent
          src={data.image || ''}
          alt={data.title}
          className="w-full h-[220px] object-cover group-hover:brightness-50 transition-all duration-300"
          height={220}
          width={359}
        />
      </div>
      
      {/* Card Content (Appears only on hover with slide-up effect) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 ease-in-out group-hover:bg-grey/60 rounded-3xl">
        <div className="text-white text-[18px] font-medium text-center">
          {data.title}
        </div>
        <div className="text-white text-[14px] font-normal text-center pt-2.5 multiline-ellipsis">
          {data?.shortDescription ? data?.shortDescription : truncatedDescription}
        </div>
        
        {/* PDF Download Button (only shows if PDF URL is present) */}
        {data.pdfURL && (
          <a
            href={data.pdfURL}
            className="text-white bg-ndi-emrald mt-4 font-bold leading-[normal] text-[12px] hover:underline underline-offset-4 cursor-pointer py-2 px-4 rounded-full transition-all duration-300"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        )}
      </div>
    </div>
  )
}

export default Publications
