import { ReactElement, useEffect, useState } from 'react'

/* eslint-disable prettier/prettier */
import Image from 'next/image'
import Markdown from '../Markdown'
import Routes from '@/config/routes'
import { useRouter } from 'next/navigation'

interface IProps {
  data: {
    title: string
    image: string
    URL?: string
  }
  section: string
}

const CollabsCard = ({ data, section }: IProps): ReactElement => {
  const router = useRouter()
  const [hashUrl, setHashUrl] = useState<string>('')
  useEffect(() => {
    if (data.URL) {
      const generateURL = `${Routes.organization.organization}/${
        section === 'Solutions'
          ? 'solutions'
          : section === 'Services'
          ? 'services'
          : null
      }#${data.URL}`
      setHashUrl(generateURL)
    }
  }, [])
  return (
    <div className="flex flex-col items-center">
      <Image
        src={data.image || ''}
        alt={data.title}
        className={`${
          section.toLocaleLowerCase() === 'benefits' || section === 'Solutions'
            ? 'h-[325px]'
            : 'h-[175px]'
        } w-[364px] object-contain ${data.URL && 'cursor-pointer'}`}
        height={325}
        width={364}
        onClick={() => data.URL && router.push(hashUrl)}
      />
      {data?.title && (
        <h5
          className={`collabs-title text-center ${
            section === 'Solutions' ? 'text-white' : 'text-ndi-light-gray'
          } leading-[normal] mt-4 font-medium text-xl ${
            data.URL && 'cursor-pointer'
          }`}
          role="presentation"
          onClick={() => data.URL && router.push(hashUrl)}
        >
          <Markdown content={data?.title} />
        </h5>
      )}
    </div>
  )
}

export default CollabsCard
