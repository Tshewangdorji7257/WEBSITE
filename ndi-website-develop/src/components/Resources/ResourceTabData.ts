import Events from './Events'
import NewsUpdate from './NewsUpdate'
import { PageNames } from '@/API'
import Publication from './Publication'
import { ReactNode } from 'react'
import Routes from '@/config/routes'
import Webinars from './Webinars'

export interface ITabsComponent {
  id: PageNames | string
  title: string
  component: () => ReactNode
  status: boolean
  show: boolean
  index: number
  route?: string
}

export const ResourcesData: ITabsComponent[] = [
  {
    index: 1,
    id: Routes.resources.newsUpdate,
    title: 'News & Updates',
    component: NewsUpdate,
    status: false,
    show: true
  },
  {
    index: 2,
    id: Routes.resources.events,
    title: 'Events',
    component: Events,
    status: false,
    show: true
  },
  {
    index: 3,
    id: Routes.resources.webinars,
    title: 'Webinars',
    component: Webinars,
    status: false,
    show: true
  },
  {
    index: 4,
    id: Routes.resources.publications,
    title: 'Publications',
    component: Publication,
    status: false,
    show: true
  }
]
