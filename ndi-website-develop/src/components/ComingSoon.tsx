'use client'

import React, { ReactElement } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import SocialMediaList from './SocialMedia'

const ComingSoon = (): ReactElement => (
  <div className="w-full flex items-center flex-col pt-16 pb-16">
    <Image
      className="mb-4"
      src="/coming-soon.svg"
      alt="coming-soon"
      width={800}
      height={100}
    />
    <div className="text-lg text-ndi-emrald mb-4 text-center">
      We are currently working hard building this page! Follow us on our socials
      to get updates on when it’ll be live.
    </div>
    <div className="flex justify-center mb-40">
      <SocialMediaList size={44} spacing="mr-4" />
    </div>
    <Link href="/" className="text-white bg-ndi-emrald p-4 rounded-[30px]">
      <span className="text-xl font-medium">Go back to homepage</span>
    </Link>
  </div>
)
export default ComingSoon
