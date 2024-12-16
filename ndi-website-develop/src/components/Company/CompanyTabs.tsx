'use client'

import { ITabsComponent } from '@/components/Resources/ResourceTabData'
import PageNotFound from '@/components/Errors/404'
import { ReactElement } from 'react'
import TabsComponent from '@/components/Tabs'

interface IProps {
  tabs: ITabsComponent[]
  slug: string
}

const CompanyTabs = ({ tabs, slug }: IProps): ReactElement => (
  <div className="">
    {tabs &&
    tabs.filter((item) => item.route && item.route.split('/').includes(slug))
      .length > 0 ? (
      <div className="px-section bg-white pt-4 pb-12">
        <div className="max-w-container mx-auto tabs-sticky">
          <TabsComponent tabs={tabs} pageName="COMPANY" route />
        </div>
      </div>
    ) : (
      <PageNotFound />
    )}
  </div>
)

export default CompanyTabs
