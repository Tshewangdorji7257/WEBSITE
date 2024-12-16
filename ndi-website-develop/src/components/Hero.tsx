import Image from 'next/image'
import ImageComponent from './ImageComponent'
/* eslint-disable react/require-default-props */
import Link from 'next/link'
import Markdown from './Markdown'
import { ReactElement } from 'react'

interface IProps {
  text: string | ReactElement
  image: string
  title: string
  subTitle: string
  type: 'MERGED_CONTENT' | 'NORMAL_CONTENT'
  contentPosition?: 'LEFT' | 'RIGHT' | 'CENTER'
  contentTypeIncludes?: 'MARKDOWN' | 'HTML'
  pxRequired?: boolean
  textStyle?: string
  containerType?: string
  mergeAmount?: string
  fullHeight?: boolean
  customComponent?: string
}

const Hero = ({
  text,
  image,
  title,
  subTitle,
  type = 'NORMAL_CONTENT',
  contentPosition = 'LEFT',
  contentTypeIncludes = 'MARKDOWN',
  pxRequired = true,
  textStyle = '',
  containerType,
  mergeAmount = 'md:ml-[-25rem]',
  fullHeight = false,
  customComponent
}: IProps): ReactElement => {
  const textContent = (): ReactElement => {
    if (contentTypeIncludes === 'MARKDOWN' && typeof text === 'string') {
      return (
        <div className={containerType || 'markdown-container'}>
          <Markdown content={text} />
        </div>
      )
    }
    return <div>{text}</div>
  }
  return (
    <div
      className={`${pxRequired && 'px-section'} ${
        fullHeight ? 'hero-full-height pb-16' : 'pb-12'
      } hero-section-container`}
    >
      <div className="w-full max-w-container mx-auto">
        {title && <div className="head-text">{title}</div>}
        {subTitle && <div className="sub-head-text">{subTitle}</div>}
        {type === 'NORMAL_CONTENT' && (
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {text && (
              <div className="grid grid-cols-1 gap-1">
                <div className="flex items-center">{textContent()}</div>
                {customComponent === 'application-icon' ? (
                  <>
                    <span className="flex items-center pt-5 text-white font-semibold">
                      Download Now!
                    </span>
                    <div className="flex flex-initial">
                      <Link
                        key="play-store"
                        className="h-fit"
                        href={process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE || ''}
                        target="_blank"
                      >
                        <Image
                          src="/play-store.svg"
                          alt="Play store"
                          width={158}
                          height={24}
                        />
                      </Link>
                      <Link
                        key="app-store"
                        className="ml-6 h-fit"
                        href={process.env.NEXT_PUBLIC_APPLE_APP_STORE || ''}
                        target="_blank"
                      >
                        <Image
                          src="/app-store.svg"
                          alt="App store"
                          width={158}
                          height={24}
                        />
                      </Link>
                    </div>
                  </>
                ) : null}
              </div>
            )}
            {image && (
              <div className="w-100">
                <ImageComponent
                  src={image || ''}
                  alt="Hero section"
                  className="w-full h-full"
                  width={600}
                  height={600}
                />
              </div>
            )}
          </div>
        )}
        {type === 'MERGED_CONTENT' && (
          <div
            className={`grid grid-cols-1 gap-0 h-full ${
              contentPosition === 'CENTER' || !image
                ? 'grid-cols-1'
                : 'sm:grid-cols-2'
            }`}
          >
            <div
              className={`flex w-full z-10 ${textStyle} ${
                contentPosition === 'LEFT'
                  ? 'justify-start'
                  : contentPosition === 'RIGHT'
                  ? 'justify-end'
                  : 'justify-center text-center mx-auto max-w-xl lg:max-w-[34rem]'
              }`}
            >
              {text && <div>{textContent()}</div>}
            </div>
            {image && (
              <div className={`z-0 ml-0 ${mergeAmount}`}>
                <ImageComponent
                  src={image || ''}
                  alt="Hero section"
                  className="w-full h-full"
                  width={1280}
                  height={600}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
