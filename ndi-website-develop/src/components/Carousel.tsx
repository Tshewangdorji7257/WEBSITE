'use client'

import { Carousel } from 'flowbite-react'
import DataError from './Errors/DataError'
import FeatureCard from './Cards/feature'
import { ReactElement } from 'react'

interface IItemData {
  id: string
  title: string
  subTitle: string
  url: string
  image: string
}

interface IOrder {
  order: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
const CarouselSection = ({ data }: any): ReactElement => {
  const carouselData =
    data &&
    data.contentData &&
    data[data.contentData] &&
    data[data.contentData]?.items?.sort(
      (a: IOrder, b: IOrder) => a.order - b.order
    )
  return (
    <div className="text-white">
      {carouselData && carouselData.length > 0 ? (
        <Carousel
          slide={false}
          className="!h-[800px] sm:!h-[650px] md:!h-[675px] custom-carousel-item"
          theme={{
            root: {
              leftControl:
                'absolute top-0 -left-3 md:-left-12 flex h-full items-center justify-center p-0 focus:outline-none',
              rightControl:
                'absolute top-0 -right-3 md:-right-12 flex h-full items-center justify-center p-0 focus:outline-none'
            }
          }}
          leftControl={
            <div className="text-white w-10 h-full text-center opacity-75 z-10 p-0 m-0 transition-all ease-in-out duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[42px] w-auto text-[#DADADA] hover:text-ndi-emrald"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </div>
          }
          rightControl={
            <div className="text-white w-10 h-full text-center opacity-75 z-10 p-0 m-0 transition-all ease-in-out duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[42px] w-auto text-[#DADADA] hover:text-ndi-emrald"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </div>
          }
        >
          {carouselData.map((item: IItemData) => (
            <div key={item.id} className="px-8 md:px-0">
              <FeatureCard data={item} />
            </div>
          ))}
        </Carousel>
      ) : (
        <DataError message="Feature not found" />
      )}
    </div>
  )
}

export default CarouselSection
