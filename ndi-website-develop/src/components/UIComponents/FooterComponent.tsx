'use client'

import { ReactElement, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import Routes from '@/config/routes'
import SocialMediaList from '../SocialMedia'

interface IFooterMenu {
  id: string
  name: string
  route: string
  order: number
}

interface IFooterSection {
  id: string
  footerMenu: {
    items: IFooterMenu[]
  }
  title: string
  order: number
}

interface IFooterData {
  footerNote: string
  footerSections: {
    items: IFooterSection[]
  }
}

interface IProps {
  footerData: IFooterData
}

const FooterComponent = ({ footerData }: IProps): ReactElement => {
  const [media] = useState([])
  const router = useRouter()
  const pathname = usePathname()
  const tollFreeImage =
    'https://ndi-website-17-07-2023-storage-4b404e2160703-staging.s3.ap-southeast-1.amazonaws.com/public/logos/tollFreeContact.svg'
  return (
    <div className="bg-ndi-gray w-full top-0 z-50 p-4 pt-11 px-section">
      <div className="max-w-container mx-auto">
        <div className="pb-11 border-b border-ndi-emrald">
          <div className="mx-auto">
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3 min-h-[70px]">
              <div className="col-span-3 md:col-span-2 lg:col-span-2 flex flex-1 items-center justify-start sm:justify-between">
                <div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {footerData &&
                      typeof footerData === 'object' &&
                      footerData?.footerSections &&
                      Array.isArray(footerData?.footerSections?.items) &&
                      footerData?.footerSections?.items?.length > 0 &&
                      footerData?.footerSections?.items
                        .sort(
                          (a: IFooterSection, b: IFooterSection) =>
                            a.order - b.order
                        )
                        .map((section: IFooterSection) => (
                          <div
                            key={section?.id}
                            className=""
                            aria-current="page"
                          >
                            <p className="text-ndi-emrald rounded-md pb-2 text-2xl font-medium">
                              {section.title}
                            </p>
                            {section?.footerMenu &&
                              section?.footerMenu?.items?.length > 0 &&
                              section?.footerMenu?.items
                                ?.sort(
                                  (
                                    a: { order: number },
                                    b: { order: number }
                                  ) => a.order - b.order
                                )
                                .map(
                                  (subMenu: {
                                    id: string
                                    route: string
                                    name: string
                                  }) => (
                                    <div key={subMenu.id}>
                                      {subMenu.route === '/' &&
                                        section.title === 'Contact' && (
                                          <div className="text-white text-sm flex flex-row justify-center items-center">
                                            <Image
                                              src={tollFreeImage}
                                              alt=""
                                              width={24}
                                              height={24}
                                            />
                                            <span className="ml-2">
                                              {subMenu.name}
                                            </span>
                                          </div>
                                        )}
                                      {subMenu.route !== '/' && (
                                        <Link
                                          href={subMenu.route}
                                          className={`${
                                            subMenu?.route &&
                                            pathname.includes(subMenu?.route)
                                              ? 'text-ndi-emrald'
                                              : 'text-white'
                                          } text-sm`}
                                        >
                                          {subMenu.name}
                                        </Link>
                                      )}
                                    </div>
                                  )
                                )}
                            <div>
                              {section.title.toLowerCase() === 'media' &&
                                media && (
                                  <div className="flex mt-2">
                                    <SocialMediaList size={24} spacing="mr-2" />
                                  </div>
                                )}
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center mb-11">
                  <button
                    type="button"
                    className="text-center w-auto bg-ndi-emrald text-white font-medium py-4 px-16 rounded-full block"
                    onClick={(): void => router.push(Routes.company.contactus)}
                  >
                    Contact Us!
                  </button>
                </div>
                <div className="flex justify-center">
                  <Link
                    key="play-store"
                    href={process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE || ''}
                    target="_blank"
                  >
                    <Image
                      src="/play-store.svg"
                      alt="Play store"
                      width={158}
                      height={24}
                      className=""
                    />
                  </Link>
                  <Link
                    key="app-store"
                    href={process.env.NEXT_PUBLIC_APPLE_APP_STORE || ''}
                    target="_blank"
                    className="ml-6"
                  >
                    <Image
                      src="/app-store.svg"
                      alt="App store"
                      width={158}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3 flex-wrap">
          <p className="text-white text-medium text-sm">
            {footerData &&
              typeof footerData === 'object' &&
              footerData?.footerNote}
          </p>
          <Link
            href={Routes.privacyPolicy}
            className="text-white text-medium text-sm ml-auto"
          >
            Privacy Policy
          </Link>
          <Link
            href={Routes.termsOfServices}
            className="text-white text-medium text-sm ml-3"
          >
            Terms of services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
