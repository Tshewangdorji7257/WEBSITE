import { ReactElement } from 'react'

interface IProps {
  data: {
    id: string
    contentData: string
  }
  height: string
  width: string
}

const DisplayFrame = ({ data, height, width }: IProps): ReactElement => (
  <iframe
    title={data?.id}
    width={width}
    height={height}
    src={data?.contentData}
  />
)
export default DisplayFrame
