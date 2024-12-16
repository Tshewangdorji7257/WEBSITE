import Content from './Content'
import { Direction } from '@/API'
import { ReactElement } from 'react'

// interface ISubSectionList {
//   id: string
// }

// interface ISubSection {
//   subSection: {
//     subSections: {
//       items: ISubSectionList[]
//     }
//   }
// }

interface IOrder {
  order: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
const SubSection = ({ subSection }: any): ReactElement => {
  const subSectionSortByOrder = subSection?.subSections?.items?.sort(
    (a: IOrder, b: IOrder) => a.order - b.order
  )
  return (
    <div
      className={`sub-section-container grid grid-cols-1 gap-4 md:gap-8 lg:gap-16 sm:grid-cols-${
        subSection?.subSections?.items.length &&
        subSection.subSectionDirection === Direction.HORIZONTAL
          ? subSection?.subSections?.items.length
          : 1
      }`}
    >
      {subSectionSortByOrder &&
        subSectionSortByOrder.length > 0 &&
        subSectionSortByOrder.map((subSec: { id: string }) => (
          <div key={subSec.id} className="flex flex-col justify-center">
            <Content contentData={subSec} />
          </div>
        ))}
    </div>
  )
}
export default SubSection
