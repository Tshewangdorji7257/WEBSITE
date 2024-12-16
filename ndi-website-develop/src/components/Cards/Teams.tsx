import Image from 'next/image'
import ImageComponent from '../ImageComponent'
import { ReactElement } from 'react'

interface ITeamCard {
  Image: string
  name: string
  id: string
  linkedInURL: string
  role: string
}

interface IProps {
  data: ITeamCard
  height: number
}

const TeamCard = ({ data, height = 400 }: IProps): ReactElement => {
  const defaultUserImage =
    'https://ndi-website-17-07-2023-storage-4b404e2160703-staging.s3.ap-southeast-1.amazonaws.com/public/logos/default-image.jpg'

  return (
    <div>
      <div>
        <ImageComponent
          src={data?.Image || ''}
          alt={data?.name}
          className={`w-full ${
            height === 400 ? `h-[400px]` : `h-[400px] md:h-[340px]`
          } object-cover object-top`}
          height={height}
          width={266}
          fallbackSrc={defaultUserImage}
          quality={75}
          loading="lazy"
          unoptimized
        />
      </div>
      <div className="flex items-center text-[22px] text-ndi-gray font-bold mt-4">
        {data?.name}{' '}
        {data?.linkedInURL && (
          <a href={data?.linkedInURL} target="_blank" rel="noreferrer">
            <Image
              className="ml-2"
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        )}
      </div>
      <div className="text-xl font-normal text-ndi-gray">{data?.role}</div>
    </div>
  )
}

export default TeamCard
