import { ReactElement, useEffect } from 'react'
import AnnouncementComponent from './Announcement'
import Features from './FeatureBanner'
import Hero from './Hero'
import Markdown from './Markdown'
import SubSections from './SubSections'
import UseCase from './UseCases'

interface ISectionList {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subSections: any
  id: string
  title: string
  subTitle: string
  sectionType: string
}

interface IOrder {
  order: number
}

// interface ISection {
//   sections: {
//     items: ISectionList[]
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sections = ({
  sections,
  mergeAmount,
  showAnnouncement = true,
  showUseCase = true,
  showFeatureBanner = true
}: any): // eslint-disable-line @typescript-eslint/no-explicit-any
ReactElement => {
  const sectionSortByOrder = sections?.items?.sort(
    (a: IOrder, b: IOrder) => a.order - b.order
  )
  useEffect(() => {
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
    <div className="">
      {sectionSortByOrder &&
        sectionSortByOrder?.length > 0 &&
        // eslint-disable-next-line sonarjs/cognitive-complexity
        sectionSortByOrder?.map((section: ISectionList): ReactElement => {
          if (
            section.sectionType &&
            section.sectionType.length > 0 &&
            section.sectionType.includes('hero_section')
          ) {
            const type =
              section.sectionType?.split('-')?.length === 2 &&
              section.sectionType.split('-')[1]?.toLowerCase()
            const position =
              section.sectionType?.split('-')?.length === 3 &&
              section.sectionType?.split('-')[2]?.toLowerCase()
            const subSection = section?.subSections?.items?.sort(
              (a: IOrder, b: IOrder) => a.order - b.order
            )
            const heroSection = {
              text:
                subSection &&
                subSection.length > 0 &&
                subSection[0]?.contents.items[0].contentData,
              image:
                subSection &&
                subSection.length > 0 &&
                subSection[1]?.contents.items[0].contentData
            }
            return (
              <div
                key={section.id}
                className={
                  position === 'center'
                    ? 'pt-12 section-container'
                    : 'section-container'
                }
              >
                <Hero
                  text={heroSection.text}
                  image={heroSection.image}
                  title=""
                  fullHeight
                  subTitle=""
                  type={type === 'normal' ? 'NORMAL_CONTENT' : 'MERGED_CONTENT'}
                  contentPosition={
                    position === 'center'
                      ? 'CENTER'
                      : position === 'right'
                      ? 'RIGHT'
                      : 'LEFT'
                  }
                  mergeAmount={
                    position === 'center'
                      ? `mt-4 lg:mt-[-2rem] ${mergeAmount || 'xl:mt-[-4rem]'}`
                      : position === 'right'
                      ? 'md:mr-[-25rem]'
                      : 'max-h-hero-section xl:ml-[-22rem] lg:ml-0 md:ml-0 sm:ml-0'
                  }
                  customComponent={
                    subSection[0]?.contents?.items[1]?.contentType === 'CUSTOM'
                      ? subSection[0]?.contents?.items[1]?.customComponent
                      : ''
                  }
                />
                {showAnnouncement && <AnnouncementComponent />}
                {showUseCase && <UseCase />}
                {showFeatureBanner && <Features />}
              </div>
            )
          }
          return (
            <div
              id={section?.sectionType}
              key={section.id}
              className="section-container px-section py-24"
            >
              <div className="max-w-container mx-auto section-content">
                {section.title && (
                  <div className="head-text section-title text-center">
                    <Markdown content={section.title} />
                  </div>
                )}
                {section.subTitle && (
                  <h4 className="sub-head-text text-center px-0 md:px-24">
                    {section.subTitle}
                  </h4>
                )}
                <SubSections subSection={section} />
              </div>
            </div>
          )
        })}
    </div>
  )
}
export default Sections
