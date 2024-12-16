import { Amplify, DataStore, Hub } from 'aws-amplify'
import { ReactElement, useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { SocialMedia } from '@/models'
import config from '../aws-exports'
import fetchSocialMediaList from '@/services/socialmedia.service'

interface IProps {
  size: number
  spacing: string
}
Amplify.configure({ ...config })

const SocialMediaList = ({ size, spacing }: IProps): ReactElement => {
  const [media, setMedia] = useState<SocialMedia[]>([])

  const fetchData = async () => {
    try {
      const response = await fetchSocialMediaList()
      if (response && response.length > 0) {
        setMedia(response)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('ERROR-fetchSocialMedia:::', err)
    }
  }
  useEffect(() => {
    const removeListener = Hub.listen('datastore', async (capsule) => {
      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchData()
      }
    })
    fetchData()
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])
  return (
    <div>
      <div className="flex justify-center">
        {media &&
          media.length > 0 &&
          Array.isArray(media) &&
          media.map((link: SocialMedia) => (
            <Link
              key={link?.id}
              href={link?.url || ''}
              target="_blank"
              className={`last:mr-0 ${spacing}`}
            >
              <Image
                src={link.image || ''}
                alt={link.title || ''}
                width={size || 40}
                height={size || 40}
              />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default SocialMediaList
