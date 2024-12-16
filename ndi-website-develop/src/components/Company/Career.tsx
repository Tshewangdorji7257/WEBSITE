'use client'

import { ReactElement, useEffect, useState } from 'react'

import { Amplify } from 'aws-amplify'
import DataError from '../Errors/DataError'
import Image from 'next/image'
import Markdown from '../Markdown'
import PageLoader from '../Loader/PageLoader'
import { PageNames } from '@/API'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })
interface IData {
  order: number
}

const Career = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchPageDetails = async () => {
    setLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pageData: any = await fetchPageByName(PageNames.CAREER)
      const sectionSortByOrder = pageData?.sections?.items?.sort(
        (a: IData, b: IData) => a.order - b.order
      )

      const heroSection =
        sectionSortByOrder &&
        sectionSortByOrder[0]?.subSections.items[0].contents.items?.sort(
          (a: IData, b: IData) => a.order - b.order
        )

      setData({
        heroSection
      })
      setLoader(false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error::', err)
      setLoader(false)
    }
  }
  useEffect(() => {
    fetchPageDetails()
  }, [])
  return (
    <div className="pt-12 pl-section">
      {data?.heroSection && Array.isArray(data?.heroSection) ? (
        <div>
          {data?.heroSection && Array.isArray(data?.heroSection) && (
            <div className="w-full mb-12">
              <div className="company-markdown-container">
                <Markdown content={data?.heroSection[0]?.contentData} />
              </div>
              {data?.heroSection[1]?.contentData && (
                <Image
                  src={data?.heroSection[1]?.contentData || ''}
                  alt={data?.heroSection[0]?.contentData}
                  className="w-full h-full mt-0 mb-0 lg:mt-[-8rem] lg:mb-[-3rem]"
                  width={600}
                  height={600}
                />
              )}
            </div>
          )}
          <div className="bg-white">
            <div className="max-w-container pb-12 mx-auto">
              <div className="flex justify-center">
                <div>
                  <button
                    type="button"
                    className="text-center w-auto bg-ndi-emrald text-white font-medium py-4 px-16 rounded-full block"
                  >
                    <a
                      target="_blank"
                      href="https://erecruit.dhi.bt/erm/"
                      rel="noreferrer"
                      className="hover:text-white"
                    >
                      Go to Career Page
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : !(data?.heroSection && Array.isArray(data?.heroSection)) && loader ? (
        <PageLoader fullHeight />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}
export default Career
