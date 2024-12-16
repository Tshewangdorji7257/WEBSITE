'use client'

import { ReactElement, useEffect, useState } from 'react'

import { Amplify } from 'aws-amplify'
import BackButton from '@/components/Buttons/BackButton'
import DataError from '@/components/Errors/DataError'
import Markdown from '@/components/Markdown'
import PageLoader from '../Loader/PageLoader'
import Routes from '@/config/routes'
import config from '../../aws-exports'
import fetchFeatureDetails from '@/services/feature.service'

Amplify.configure(config)

interface IFeatures {
  id: string
  title: string
  subTitle: string
  url: string
  image: string
  description: string
}

const FeatureComponent = (): ReactElement => {
  const [featureData, setFeatureData] = useState<IFeatures[]>()
  const [loader, setLoader] = useState<boolean>(true)

  const fetchFeatureData = async (): Promise<void> => {
    setLoader(true)
    try {
      const sortedFeatureList = await fetchFeatureDetails()
      setFeatureData(sortedFeatureList)
      setLoader(false)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error::', err)
      setLoader(false)
    }
  }

  useEffect(() => {
    fetchFeatureData()
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
              backRoute={`${Routes.home}#features`}
              styles="sticky top-24 z-10 left-0 w-fit flex items-center !px-6"
            />
            <div className="">
              {featureData &&
              Array.isArray(featureData) &&
              featureData.length > 0 ? (
                <div className="">
                  {featureData.map((feature) => (
                    <div
                      key={feature.id}
                      id={feature.url}
                      className="text-black relative bg-no-repeat bg-contain sm:bg-auto bg-right first:mt-0 last:border-0 border-b-2 border-ndi-emrald"
                      style={{
                        backgroundImage: `${
                          feature.image
                            ? `url(${feature.image})`
                            : 'transparent'
                        }`
                      }}
                    >
                      <div className="white-overlay" />
                      <div className="grid grid-cols-1 gap-0 md:grid-cols-2 content-over-white-overlay pt-[150px] pb-[115px]">
                        <div className="mr-0 md:-mr-12">
                          {feature?.title && (
                            <h2
                              className="text-[40px] sm:text-[45px] text-black font-normal leading-[normal]"
                              // eslint-disable-next-line react/no-danger
                              dangerouslySetInnerHTML={{
                                __html: feature?.title
                              }}
                            />
                          )}
                          {feature?.subTitle && (
                            <h4 className="text-ndi-gray font-medium leading-[normal] text-[25px] mb-[30px]">
                              {feature?.subTitle}
                            </h4>
                          )}
                          {feature?.description && (
                            <div className="feature-container">
                              <Markdown content={feature.description} />
                            </div>
                          )}
                        </div>
                        <div />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <DataError message="No feature found" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default FeatureComponent
