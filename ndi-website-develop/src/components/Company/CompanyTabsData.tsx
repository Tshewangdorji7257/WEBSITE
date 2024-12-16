import AboutUs from './AboutUs'
import Career from './Career'
import { ITabsComponent } from '../Resources/ResourceTabData'
import MediaCoverage from './MediaCoverage'
import MeetOurTeam from './MeetOurTeam'
import { PageNames } from '@/models'
import Routes from '@/config/routes'
import VisionMission from './VisionMission'

const CompanyData: ITabsComponent[] = [
  {
    index: 1,
    id: PageNames.ABOUT_US,
    route: Routes.company.aboutus,
    title: 'About Us',
    component: AboutUs,
    status: false,
    show: true
  },
  {
    index: 2,
    id: PageNames.VISION_MISSION,
    route: Routes.company.visionMission,
    title: 'Vision & Mission',
    component: VisionMission,
    status: false,
    show: true
  },
  {
    index: 3,
    id: PageNames.MEET_TEAM,
    route: Routes.company.meetOurTeam,
    title: 'Meet Our Team',
    component: MeetOurTeam,
    status: false,
    show: true
  },
  {
    index: 4,
    id: PageNames.CAREER,
    route: Routes.company.career,
    title: 'Career',
    component: Career,
    status: false,
    show: true
  },
  {
    index: 5,
    id: PageNames.MEDIA_COVERAGE,
    route: Routes.company.mediaCoverage,
    title: 'Media Coverage',
    component: MediaCoverage,
    status: false,
    show: true
  }
]

export default CompanyData
