'use client'

import { PageNames, Pages } from '@/API'
import { ReactElement, useEffect, useState } from 'react'

import DataError from '../Errors/DataError'
import Markdown from '../Markdown'
import PageLoader from '../Loader/PageLoader'
import fetchPageByName from '@/services/page.service'

interface IOrder {
  order: number
}
const PrivacyPolicyComponent = (): ReactElement => {
  const [page, setPage] = useState<Pages>()
  const [loader, setLoader] = useState<boolean>(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [section, setSection] = useState<any>([])
  const fetchData = async () => {
    setLoader(true)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const pageDetails: any = await fetchPageByName(PageNames.PRIVACY_POLICY)
      const sectionData =
        pageDetails?.sections.items[0].subSections?.items[0]?.contents?.items.sort(
          (a: IOrder, b: IOrder) => a.order - b.order
        )
      setSection(sectionData)
      if (pageDetails) {
        setPage(pageDetails)
      }
      setLoader(false)
    } catch (err) {
      setLoader(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {page && page?.sections ? (
        <div className="bg-white px-section py-12">
          <div className="max-w-container mx-auto relative text-center">
            {page?.title && <h2 className="font-semibold">{page?.title}</h2>}
          </div>
          <div className="privacy-policy">
            <Markdown content={section[0].contentData} />
            <Markdown content={section[1].contentData} />
            <Markdown content={section[2].contentData} />
          </div>
        </div>
      ) : !page?.sections && loader ? (
        <PageLoader fullHeight />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}
export default PrivacyPolicyComponent
