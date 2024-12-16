'use client'

import { Content, PageNames } from '@/API'
import {
  ITabsComponent,
  ResourcesData
} from '@/components/Resources/ResourceTabData'
import { ReactElement, useEffect, useState } from 'react'

import Hero from '@/components/Hero'
import PageNotFound from '@/components/Errors/404'
import TabsComponent from '@/components/Tabs'
import fetchPageByName from '@/services/page.service'
import { useParams } from 'next/navigation'

interface ISection {
  ssrSection: Content[]
}

const ResourceComponent = ({ ssrSection }: ISection): ReactElement => {
  const { slug } = useParams()
  const [heroSection, setHeroSection] = useState<Content[]>()
  const tabs: ITabsComponent[] = ResourcesData.map((tab: ITabsComponent) => {
    if (tab.id.includes(slug)) {
      return {
        ...tab,
        status: true
      }
    }
    return tab
  })

  const fetchPageData = async () => {
    const sections = await fetchPageByName(PageNames.RESOURCE)
    const sectionData =
      sections &&
      sections?.sections &&
      sections.sections?.items &&
      sections.sections?.items.length > 0 &&
      sections.sections?.items[0]?.subSections &&
      sections.sections?.items[0]?.subSections?.items &&
      sections.sections?.items[0]?.subSections?.items.length > 0 &&
      sections.sections?.items[0]?.subSections?.items[0]?.contents &&
      sections.sections?.items[0]?.subSections?.items[0]?.contents?.items
        ?.length > 0 &&
      (sections?.sections?.items[0]?.subSections.items[0].contents.items?.sort(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (a: any, b: any) => a.order - b.order
      ) as Content[])
    if (sectionData) {
      setHeroSection(sectionData)
    }
  }

  useEffect(() => {
    if (heroSection && heroSection.length <= 0) {
      fetchPageData()
    }
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

  useEffect(() => {
    if (ssrSection) {
      setHeroSection(ssrSection)
    }
  }, [ssrSection])

  return (
    <div>
      <div>
        {tabs &&
        tabs.filter((item) => item.id.split('/').includes(slug) && item.show)
          .length > 0 ? (
          <div>
            <div id="hero-sec" className="bg-ndi-gray">
              {heroSection && Array.isArray(heroSection) && (
                <Hero
                  type="MERGED_CONTENT"
                  text={heroSection[0].contentData || ''}
                  image={heroSection[1].contentData || ''}
                  title=""
                  subTitle=""
                  contentPosition="LEFT"
                  textStyle="pt-12"
                  mergeAmount="max-h-hero-section xl:ml-[-20rem] lg:ml-0 md:ml-0 sm:ml-0"
                  fullHeight
                />
              )}
            </div>
            <div id="tabs">
              <div className="px-section bg-white py-12">
                <div className="max-w-container mx-auto tabs-sticky">
                  <TabsComponent tabs={tabs} pageName="RESOURCE" route />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <PageNotFound />
        )}
      </div>
    </div>
  )
}

export default ResourceComponent
