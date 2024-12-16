'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useState } from 'react'

import { API } from '@aws-amplify/api'
import { Amplify } from 'aws-amplify'
import DataError from '../Errors/DataError'
import { ListTeamsQuery } from '@/API'
import PageLoader from '../Loader/PageLoader'
import TeamCard from '@/components/Cards/Teams'
import config from '../../aws-exports'
import { listTeams } from '@/graphql/queries'

Amplify.configure({ ...config })

interface IResponse {
  data: ListTeamsQuery
}

interface IData {
  order: number
  Image: string
  name: string
  id: string
  linkedInURL: string
  role: string
}

const MeetOurTeam = async (): Promise<ReactElement> => {
  const [data, setData] = useState<any>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchData = async () => {
    setLoader(true)
    try {
      const response = (await API.graphql({
        query: listTeams
      })) as IResponse
      const list =
        response?.data &&
        response?.data?.listTeams &&
        response?.data?.listTeams?.items &&
        response?.data?.listTeams?.items.length > 0 &&
        (response?.data?.listTeams?.items?.sort(
          (a: any, b: any) => a.order - b.order
        ) as IData[])
      setLoader(false)
      if (list && list !== null && Array.isArray(list)) {
        setData(list)
      }
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-container mx-auto pb-12">
        {data && Array.isArray(data) && data?.length > 0 ? (
          <>
            <h1 className="head-text py-8 text-center">Our Team</h1>
            <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 px-0 xl:px-40 mb-8">
              {Array.isArray(data) &&
                data?.slice(0, 3).map((item: IData) => (
                  <div key={item.id}>
                    <TeamCard data={item} height={340} />
                  </div>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
              {data.slice(3, data?.length).map((item: IData) => (
                <div key={item.id}>
                  <TeamCard data={item} height={340} />
                </div>
              ))}
            </div>
          </>
        ) : !(data && Array.isArray(data) && data.length > 0) && loader ? (
          <PageLoader fullHeight />
        ) : (
          <DataError message="No data found" />
        )}
      </div>
    </div>
  )
}

export default MeetOurTeam
