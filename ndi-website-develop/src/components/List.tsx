'use client'

import { ReactElement, useEffect, useState } from 'react'

import CollabsCard from './Cards/Collaborators'
import ViewMore from './ViewMore'

interface IItemData {
  id: string
  title: string
  image: string
  URL?: string
  order: number
  isActive: boolean
}
interface IProps {
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any
  }
}

interface IOrder {
  order: number
}

const ListComponent = ({ data }: IProps): ReactElement => {
  const [carouselData, setCarouselData] = useState<
    undefined | boolean | null | IItemData[]
  >([])
  const showCount = 16
  const key = data && data?.contentData
  const noOfItemPerRow = data && data.noOfItemPerRow
  const initData =
    data &&
    data[key] &&
    (data[key]?.items?.sort(
      (a: IOrder, b: IOrder) => a.order - b.order
    ) as IItemData[])
  useEffect(() => {
    const carouData =
      initData &&
      Array.isArray(initData) &&
      initData.length > 0 &&
      (initData.slice(0, showCount) as IItemData[])
    if (carouData && Array.isArray(carouData)) {
      setCarouselData(carouData)
    }
  }, [initData])

  const handleViewMore = (value: string) => {
    switch (true) {
      case value === 'VIEW_MORE':
        if (initData && initData.length > 0) {
          setCarouselData(initData)
        }
        break
      case value === 'VIEW_LESS':
        if (initData && initData.length > 0) {
          setCarouselData(initData.slice(0, showCount))
        }
        break
      default:
        break
    }
  }

  const itemData = carouselData && Array.isArray(carouselData)
  const isDynamicRow = itemData && noOfItemPerRow > 0
  return (
    <div
      className={`mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 ${
        isDynamicRow && noOfItemPerRow === 4
          ? 'md:grid-cols-4 lg:grid-cols-4 md:gap-8'
          : isDynamicRow
          ? `md:grid-cols-${noOfItemPerRow} lg:grid-cols-${noOfItemPerRow} md:gap-16`
          : 'md:grid-cols-3 lg:grid-cols-5 md:gap-16'
      }`}
    >
      {itemData &&
        carouselData?.length > 0 &&
        carouselData
          .filter((element: IItemData) => element.isActive)
          .map((resource: IItemData) => (
            <div key={resource.id}>
              <CollabsCard data={resource} section={key} />
            </div>
          ))}
      {initData && initData.length > showCount && (
        <ViewMore
          OnClickHandle={(value) => handleViewMore(value)}
          isViewMore={initData.length !== (itemData && carouselData.length)}
        />
      )}
    </div>
  )
}

export default ListComponent
