'use client'

import { ReactElement, useEffect, useState } from 'react'

import { Amplify } from 'aws-amplify'
import DataError from '../Errors/DataError'
import PageLoader from '../Loader/PageLoader'
import { PageNames } from '@/API'
import Sections from '../Sections'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })
interface IData {
  order: number
}

const VisionMission = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchPageDetails = async () => {
    setLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pageData: any = await fetchPageByName(PageNames.VISION_MISSION)
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
    <div className="vision-mission-container">
      {data?.pageData && data?.pageData?.sections ? (
        <Sections
          sections={data?.pageData?.sections}
          showAnnouncement={false}
          showFeatureBanner={false}
          showUseCase={false}
        />
      ) : !(data?.heroSection && Array.isArray(data?.heroSection)) && loader ? (
        <PageLoader fullHeight />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}

export default VisionMission
