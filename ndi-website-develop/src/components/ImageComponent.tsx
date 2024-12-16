'use client'

/* eslint-disable react/require-default-props */

import React, { ReactElement, useState } from 'react'

import Image from 'next/image'

const ImageComponent = (props: {
  src: string
  fallbackSrc?: string
  alt: string
  quality?: number
  unoptimized?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}): ReactElement => {
  const { src, fallbackSrc, alt, quality, unoptimized, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)
  const defaultImage = '/default-image.jpg'

  // eslint-disable-next-line no-shadow, @typescript-eslint/no-explicit-any
  const imageLoader = ({ src, width, quality }: any): string =>
    `${src}?w=${width}&q=${quality || 75}`

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc || defaultImage)
      }}
      loader={imageLoader}
      quality={quality || 80}
      unoptimized={unoptimized || true}
    />
  )
}

export default ImageComponent
