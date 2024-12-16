'use client'

import { ITabsComponent } from './Resources/ResourceTabData'
import PageLoader from './Loader/PageLoader'
import { ReactElement } from 'react'
import Routes from '@/config/routes'
import { Tabs } from 'flowbite-react'
import { useRouter } from 'next/navigation'

interface IProps {
  tabs: ITabsComponent[]
  pageName: 'COMPANY' | 'RESOURCE' | 'FAQ'
  route: boolean
}
const TabsComponent = ({ tabs, pageName, route }: IProps): ReactElement => {
  const router = useRouter()

  const onTabSelect = (index: number) => {
    if (pageName === 'COMPANY') {
      if (index === 0) {
        router.push(Routes.company.aboutus)
      } else if (index === 1) {
        router.push(Routes.company.visionMission)
      } else if (index === 2) {
        router.push(Routes.company.meetOurTeam)
      } else if (index === 3) {
        router.push(Routes.company.career)
      } else if (index === 4) {
        router.push(Routes.company.mediaCoverage)
      } else {
        router.push(Routes.company.aboutus)
      }
    }
    if (pageName === 'RESOURCE') {
      if (index === 0) {
        router.push(`${Routes.resources.newsUpdate}#tabs`)
      } else if (index === 1) {
        router.push(`${Routes.resources.events}#tabs`)
      } else if (index === 2) {
        router.push(`${Routes.resources.webinars}#tabs`)
      } else if (index === 3) {
        router.push(`${Routes.resources.publications}#tabs`)
      } else {
        router.push(`${Routes.resources.newsUpdate}#tabs`)
      }
    }
  }

  return (
    <Tabs.Group
      aria-label="Tabs"
      // eslint-disable-next-line react/style-prop-object
      style="underline"
      onActiveTabChange={onTabSelect}
    >
      {tabs &&
        tabs
          .filter((item) => item.show)
          .map((tab) => (
            <Tabs.Item key={tab.id} active={tab.status} title={tab.title}>
              {tab.status || route === false ? (
                tab.component()
              ) : (
                <PageLoader fullHeight />
              )}
            </Tabs.Item>
          ))}
    </Tabs.Group>
  )
}

export default TabsComponent
