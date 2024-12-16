import React, { ReactElement } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Routes from '@/config/routes'

const PageNotFound = (): ReactElement => (
  <div className="w-full flex items-center flex-col pt-4 pb-10">
    <Image className="mb-4" src="/404.svg" alt="404" width={750} height={100} />
    <div className="text-ndi-emrald text-7xl font-semibold mb-4">
      Page Not Found
    </div>
    <div className="text-lg text-white mb-8">
      Sorry the page you are looking for doesn’t exist or an error occurred
    </div>
    <Link
      href={Routes.home}
      className="text-white bg-ndi-emrald p-4 rounded-[30px]"
    >
      <span className="text-xl font-medium">Go back to homepage</span>
    </Link>
  </div>
)
export default PageNotFound
