'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { FAQ, TypeOfFaq } from '@/models'
import { ReactElement, useEffect, useState } from 'react'

import DataError from './Errors/DataError'
import FaqCard from './Cards/faqs'
import PageLoader from './Loader/PageLoader'
import SearchBar from './SearchBar'
import config from '../aws-exports'

Amplify.configure({ ...config })
interface IFaqs {
  title: string
  data: string
}

const OrganizationFaqs = (): ReactElement => {
  const [faqs, setFaqs] = useState<boolean | null | undefined | IFaqs[]>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchData = async (searchValue?: string) => {
    setLoader(true)
    try {
      const response = await DataStore.query(
        FAQ,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [
            c.title.contains(searchValue || ''),
            c.type.eq(TypeOfFaq.ORGANIZATION),
            c.isActive.eq(true)
          ]),
        {
          sort: (s) => s.order(SortDirection.ASCENDING)
        }
      )
      setLoader(false)
      const list = response && response?.length > 0 && (response as IFaqs[])
      setFaqs(list)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, faqs)
    }
  }

  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen('datastore', async (capsule) => {
      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchData()
      }
    })

    fetchData()

    // Start the DataStore, this kicks-off the sync process.
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])

  return (
    <div className="max-w-container px-section">
      <div className="my-8">
        <SearchBar onSearchSubmit={(value) => fetchData(value)} />
      </div>

      {faqs && Array.isArray(faqs) && faqs.length > 0 ? (
        <FaqCard data={faqs} />
      ) : loader ? (
        <PageLoader />
      ) : (
        <DataError message="FAQs not found" />
      )}
    </div>
  )
}

export default OrganizationFaqs
