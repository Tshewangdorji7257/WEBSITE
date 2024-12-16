'use client'

import { PageNames, Pages } from '@/API'
import React, { ReactElement, useEffect, useState } from 'react'

import DataError from '@/components/Errors/DataError'
import PageLoader from '../Loader/PageLoader'
import Sections from '@/components/Sections'
import fetchPageByName from '@/services/page.service'

const HomeComponent = (): ReactElement => {
  const [page, setPage] = useState<Pages>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchData = async () => {
    setLoader(true)
    try {
      const sections = await fetchPageByName(PageNames.HOME)
      if (sections) {
        setPage(sections)
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
        <Sections sections={page?.sections} />
      ) : !page?.sections && loader ? (
        <PageLoader fullHeight />
      ) : (
        <DataError message="No data found" />
      )}
    </div>
  )
}

export default HomeComponent
