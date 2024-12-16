'use client'

import { ReactElement, useEffect, useState } from 'react'

import { Amplify } from 'aws-amplify'
import Content from '../Content'
import DataError from '../Errors/DataError'
import Hero from '../Hero'
import PageLoader from '../Loader/PageLoader'
import { PageNames } from '@/API'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

interface IData {
  order: number
}

Amplify.configure({ ...config })

const AboutUs = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchPageDetails = async () => {
    setLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pageData: any = await fetchPageByName(PageNames.ABOUT_US)
      const sectionSortByOrder = pageData?.sections?.items?.sort(
        (a: IData, b: IData) => a.order - b.order
      )
      const contentDetails = sectionSortByOrder[1]?.subSections?.items

      const heroSection =
        sectionSortByOrder &&
        sectionSortByOrder[0].subSections.items[0].contents.items?.sort(
          (a: IData, b: IData) => a.order - b.order
        )

      setData({
        pageData,
        contentDetails,
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
    <div>
      {data?.heroSection &&
      Array.isArray(data?.heroSection) &&
      data?.heroSection.length > 0 ? (
        <div>
          <div className="w-full pl-section bg-gradient-about aboutus-hero-container">
            <Hero
              type="MERGED_CONTENT"
              text={data?.heroSection[0]?.contentData}
              image={data?.heroSection[1]?.contentData}
              title=""
              subTitle=""
              contentPosition="LEFT"
              pxRequired={false}
              textStyle="pt-12 sm:max-w-md"
              mergeAmount="max-h-hero-section xl:ml-[-20rem] lg:ml-0 md:ml-0 sm:ml-0"
            />
          </div>
          {data?.contentDetails &&
            data?.contentDetails.length > 0 &&
            data?.contentDetails.map((subSec: { id: string }) => (
              <div
                key={subSec.id}
                className="company-section-data-container aboutus-container"
              >
                <Content contentData={subSec} />
              </div>
            ))}
        </div>
      ) : !(data?.heroSection && Array.isArray(data?.heroSection)) && loader ? (
        <PageLoader fullHeight />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}

export default AboutUs
