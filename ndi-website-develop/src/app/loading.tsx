import PageLoader from '@/components/Loader/PageLoader'
import { ReactElement } from 'react'

const Loading = (): ReactElement => (
  <div>
    <PageLoader fullHeight />
  </div>
)

export default Loading
