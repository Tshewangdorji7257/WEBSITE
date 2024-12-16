import { DataStore, Hub } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PageLoader from './Loader/PageLoader'
import { UseCases } from '../models/index'

interface UseCaseData {
  id: string
  title: string
  image: string
  list1: string
  list2: string
  list3: string
  list4: string
  websiteLink: string
}

const ServiceCard: React.FC<Omit<UseCaseData, 'id'>> = ({
  title,
  image,
  list1,
  list2,
  list3,
  list4,
  websiteLink
}) => {
  const listItems = [list1, list2, list3, list4].filter((item) => item)
  return (
    <div className="p-4">
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <h3 className="useCaseTitle flex justify-center text-center text-lg text-[#124143] font-bold">
          {title}
        </h3>
      </a>
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center mt-3">
          <div className="h-[123px] w-[123px] rounded-full border-2 border-ndi-emrald flex items-center justify-center overflow-hidden">
            <Image
              className="object-contain max-h-[90px] max-w-[90px]"
              src={image}
              alt={title}
              width={123}
              height={123}
            />
          </div>
        </div>
      </a>

      <div className=" mt-2 text-sm text-[#5F6368] font-normal flex justify-center text-center">
        <ul className="list-disc-green">
          {listItems.map((item) => (
            <li key={`${item}-${item}`}>
              <span className="text-[#5F6368]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const UseCasesComponent: React.FC = () => {
  const [useCases, setUseCases] = useState<UseCaseData[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  const fetchUseCases = async () => {
    try {
      const useCasesData = await DataStore.query(UseCases)
      setUseCases(useCasesData as UseCaseData[])
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error fetching use cases', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 900) {
        setCardsToShow(3)
      } else if (window.innerWidth >= 800) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)

    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  useEffect(() => {
    // Start the DataStore and listen for the sync process
    DataStore.start()
    fetchUseCases()

    const removeListener = Hub.listen('datastore', async (capsule) => {
      const { event } = capsule.payload
      if (event === 'ready') {
        fetchUseCases()
      }
    })

    return () => {
      removeListener()
    }
  }, [])

  const handleNextClick = () => {
    if (useCases.length > 0) {
      const newIndex = currentIndex + cardsToShow
      setCurrentIndex(newIndex >= useCases.length ? 0 : newIndex)
    }
  }

  const visibleUseCases = useCases.slice(
    currentIndex,
    currentIndex + cardsToShow
  )
  const additionalCardsNeeded = cardsToShow - visibleUseCases.length

  if (additionalCardsNeeded > 0) {
    visibleUseCases.push(...useCases.slice(0, additionalCardsNeeded))
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <div className="mt-11 pt-11">
      <h1 className="flex justify-center mt-4 text-5xl text-ndi-emrald font-bold">
        Use Cases
      </h1>
      <div className="px-section hero-section-container relative mt-4 flex justify-between items-center p-4">
        <div className="bg-white mb-10 p-4 border-2 border-ndi-emrald rounded-lg w-full max-w-container mx-auto">
          <div className="relative flex justify-end items-center">
            <div className="text-lg cursor-pointer absolute right-0 inset-y-0 mt-16 pt-16">
              <svg
                onClick={handleNextClick}
                aria-label="Next Usecase"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[42px] w-auto text-[#DADADA] hover:text-ndi-emrald"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          <div
            key={currentIndex}
            className={`grid grid-cols-1 ${
              cardsToShow === 3
                ? 'md:grid-cols-3'
                : cardsToShow === 2
                ? 'md:grid-cols-2'
                : ''
            } gap-4`}
          >
            {visibleUseCases.map((useCase) => (
              <ServiceCard
                key={useCase.id}
                title={useCase.title}
                image={useCase.image}
                list1={useCase.list1}
                list2={useCase.list2}
                list3={useCase.list3}
                list4={useCase.list4}
                websiteLink={useCase.websiteLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCasesComponent
