'use client'

import { ReactElement, useEffect, useState } from 'react'

import BackButton from '../Buttons/BackButton'
import DataError from '../Errors/DataError'
import Markdown from '../Markdown'
import PageLoader from '../Loader/PageLoader'
import Routes from '@/config/routes'
import { Solutions } from '@/models'
import { fetchOrganizationSolutions } from '@/services/organization.service'

const SolutionsComponent = (): ReactElement => {
  const [loader, setLoader] = useState<boolean>(true)
  const [solutions, setSolutions] = useState<Solutions[]>([])
  const fetchOrganizationDetails = async (): Promise<void> => {
    setLoader(true)
    try {
      const orgSolutions: Solutions[] = await fetchOrganizationSolutions()
      setSolutions(orgSolutions)
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
              backRoute={`${Routes.organization.organization}/#solutions`}
              styles="sticky top-24 z-10 left-0 w-fit flex items-center !px-6"
            />
            {solutions && Array.isArray(solutions) && solutions.length > 0 ? (
              <>
                {solutions.map((solution) => (
                  <div
                    key={solution.id}
                    id={solution.URL || ''}
                    className="text-black relative bg-no-repeat bg-contain sm:bg-70% bg-right first:mt-0 last:border-0 border-b-2 border-ndi-emrald"
                    style={{
                      backgroundImage: `${
                        solution.image
                          ? `url(${solution.image})`
                          : 'transparent'
                      }`
                    }}
                  >
                    <div className="white-overlay" />
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2 content-over-white-overlay pt-[150px] pb-[115px]">
                      <div className="mr-0 md:-mr-12">
                        {solution?.title && (
                          <h2 className="text-[40px] sm:text-[45px] mb-5 text-ndi-emrald font-semibold leading-[normal]">
                            {solution?.title}
                          </h2>
                        )}
                        {solution?.description && (
                          <div className="feature-container mt-5">
                            <Markdown content={solution.description} />
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

export default SolutionsComponent
