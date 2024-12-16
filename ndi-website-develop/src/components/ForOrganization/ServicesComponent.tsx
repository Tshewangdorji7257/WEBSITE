'use client'

import { ReactElement, useEffect, useState } from 'react'

import BackButton from '../Buttons/BackButton'
import DataError from '../Errors/DataError'
import Markdown from '../Markdown'
import PageLoader from '../Loader/PageLoader'
import Routes from '@/config/routes'
import { Services } from '@/models'
import { fetchOrganizationServices } from '@/services/organization.service'

const ServicesComponent = (): ReactElement => {
  const [loader, setLoader] = useState<boolean>(true)
  const [services, setServices] = useState<Services[]>([])
  const fetchOrganizationDetails = async (): Promise<void> => {
    setLoader(true)
    try {
      const orgServices = await fetchOrganizationServices()
      setServices(orgServices)
      setLoader(false)
    } catch (error) {
      setLoader(false)
    }
  }
  useEffect(() => {
    fetchOrganizationDetails()
    setTimeout(() => {
      const { hash } = window.location
      // eslint-disable-next-line prefer-destructuring
      const id = hash.split('#')[1]
      const hashDoc = document?.getElementById(id)
      if (hash && hashDoc && hashDoc !== null) {
        hashDoc.scrollIntoView({ behavior: 'smooth' })
      }
    }, 1000)
  }, [])

  return (
    <div className="bg-white px-section py-12">
      <div className="max-w-container mx-auto relative">
        {loader ? (
          <PageLoader fullHeight />
        ) : (
          <>
            <BackButton
              backRoute={`${Routes.organization.organization}/#services`}
              styles="sticky top-24 z-10 left-0 w-fit flex items-center !px-6"
            />
            {services && Array.isArray(services) && services.length > 0 ? (
              <>
                {services.map((service) => (
                  <div
                    key={service.id}
                    id={service.URL || ''}
                    className="text-black relative bg-no-repeat bg-contain sm:bg-70% bg-right first:mt-0 last:border-0 border-b-2 border-ndi-emrald"
                    style={{
                      backgroundImage: `${
                        service.image ? `url(${service.image})` : 'transparent'
                      }`
                    }}
                  >
                    <div className="white-overlay" />
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 content-over-white-overlay pt-[150px] pb-[115px]">
                      <div className="mr-0 md:-mr-12">
                        {service?.title && (
                          <h2 className="text-[40px] sm:text-[45px] text-ndi-emrald font-semibold leading-[normal]">
                            {service?.title}
                          </h2>
                        )}
                        {service?.description && (
                          <div className="feature-container mt-5">
                            <Markdown content={service.description} />
                          </div>
                        )}
                      </div>
                      <div />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <DataError message="No feature found" />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ServicesComponent
