'use client'

import { API, Amplify } from 'aws-amplify'
import { ReactElement, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Dropdown } from 'flowbite-react'
import Image from 'next/image'
import { ListMenusQuery } from '@/API'
import config from '../aws-exports'
import { listMenus } from '@/graphql/queries'

Amplify.configure({ ...config })

interface ISubMenus {
  id: string
  name: string
  route: string
  selected?: boolean
  order: number
}

interface IMenus {
  id: string
  name: string
  route: string
  subMenus: {
    items: ISubMenus[]
  }
  selected: boolean
}

type IMediaType = ListMenusQuery['listMenus'] extends {
  items: infer T
}
  ? T
  : never

interface IListSections {
  data: ListMenusQuery
}

const Header = (): ReactElement => {
  const [navData, setNavData] = useState<IMenus[]>()
  const [mobileOption, setMobileOption] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const handleSelectMenu = (menuId: string) => {
    const updateNavData =
      navData &&
      navData.length > 0 &&
      navData.map((menu: IMenus) => {
        if (menu.id === menuId) {
          return {
            ...menu,
            selected: menu.selected ? !menu.selected : true
          }
        }
        return {
          ...menu,
          selected: false
        }
      })
    if (updateNavData && Array.isArray(updateNavData)) {
      setNavData(updateNavData)
    }
  }

  const fetchMenuDetails = async () => {
    try {
      const sectionData = (await API.graphql({
        query: listMenus,
        variables: {
          filter: {
            and: [{ _deleted: { ne: true } }, { isActive: { ne: false } }]
          }
        }
      })) as IListSections
      const menusData =
        sectionData &&
        sectionData?.data &&
        sectionData?.data?.listMenus &&
        sectionData?.data?.listMenus?.items &&
        Array.isArray(sectionData?.data?.listMenus?.items) &&
        sectionData?.data?.listMenus?.items.length > 0 &&
        (sectionData?.data?.listMenus?.items?.sort(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a: any, b: any) => a.order - b.order
        ) as IMediaType)
      if (menusData) {
        setNavData(menusData)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error::', err)
    }
  }

  useEffect(() => {
    fetchMenuDetails()
  }, [])

  return (
    <nav className="bg-ndi-gray fixed w-full top-0 z-50 px-4 px-section">
      <div className="mx-auto max-w-container">
        <div className="relative flex min-h-[70px] items-center justify-between">
          <div className="absolute inset-y-0 right-1 flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileOption(!mobileOption)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileOption && (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              {!mobileOption && (
                <>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-start sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="block h-[43px] w-auto cursor-pointer"
                src="/ndi-logo.svg"
                alt="Your Company"
                width={180}
                height={37}
                priority
                onClick={() => router.push('/')}
              />
            </div>
            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-2 lg:space-x-6 items-center nav-options">
                {navData &&
                  navData.length > 0 &&
                  navData.map((menu: IMenus) => {
                    const isActive =
                      (menu?.route && pathname.endsWith(menu?.route)) ||
                      menu.selected ||
                      (menu.subMenus.items &&
                        menu.subMenus.items
                          .map((item) => item.route)
                          .includes(pathname))
                    return (
                      <div key={menu.id} className="group relative">
                        {menu.subMenus.items &&
                        menu.subMenus.items.length > 0 ? (
                          <div>
                            <div
                              className={`${
                                isActive
                                  ? 'text-ndi-emrald'
                                  : 'text-white hover:text-ndi-emrald'
                              } rounded-md text-base font-medium flex items-center py-2`}
                            >
                              {menu.name}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 ml-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                            
                            {/* Dropdown Menu */}
                            <div
                              className="absolute left-0 hidden group-hover:block bg-gray-800 rounded-md shadow-lg mt-2"
                              style={{ minWidth: '145px' }}
                            >
                              {menu.subMenus.items
                                ?.sort(
                                  (a: { order: number }, b: { order: number }) => a.order - b.order
                                )
                                .map((subMenu) => (
                                  <div
                                    key={subMenu.id}
                                    onClick={(): void => router.push(`${subMenu.route}`)}
                                    className={`${
                                      (subMenu?.route && pathname.includes(subMenu?.route)) ||
                                      subMenu.selected
                                        ? '!text-ndi-emrald'
                                        : ''
                                    } hover:text-ndi-emrald text-sm text-white pl-5 pr-2 py-2 cursor-pointer w-full text-start`}
                                  >
                                    {subMenu.name}
                                  </div>
                                ))}
                            </div>
                          </div>
                        ) : (
                          <button
                            className={`${
                              isActive
                                ? 'text-ndi-emrald'
                                : 'text-white hover:text-ndi-emrald'
                            } px-0 py-2 text-base font-medium`}
                            type="button"
                            onClick={(): void => router.push(`${menu.route}`)}
                          >
                            {menu.name}
                          </button>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden" id="mobile-menu">
        {mobileOption && (
          <div className="space-y-1 px-2 pb-3">
            {navData &&
              navData.length > 0 &&
              navData.map((menu: IMenus) => {
                const isActive = menu?.route && pathname.endsWith(menu?.route)
                return (
                  <>
                    <button
                      type="button"
                      key={menu.id}
                      className={`${
                        isActive
                          ? 'bg-gray-800 text-white'
                          : 'text-white hover:bg-gray-700 hover:text-white'
                      } rounded-md px-3 py-2 text-base font-medium w-full flex justify-between items-center`}
                      onClick={() => handleSelectMenu(menu.id)}
                    >
                      {menu.name}
                      {menu.subMenus.items && menu.subMenus.items.length > 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </button>
                    {menu.subMenus.items && menu.subMenus.items.length > 0 && (
                      <div className="pl-6">
                        {menu.subMenus.items.map((subMenu) => (
                          <div
                            key={subMenu.id}
                            onClick={(): void => router.push(`${subMenu.route}`)}
                            className={`${
                              pathname.includes(subMenu.route) ? 'text-ndi-emrald' : ''
                            } text-white py-2`}
                          >
                            {subMenu.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )
              })}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
