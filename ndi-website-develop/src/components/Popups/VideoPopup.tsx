import { Button, Modal } from 'flowbite-react'

import DisplayFrame from '../DisplayFrame'
import { ReactElement } from 'react'

interface IProps {
  data: {
    id: string
    contentData: string
  }
  onClose: (value: boolean) => void
  show: boolean
}
const VideoPopup = ({ show, data, onClose }: IProps): ReactElement => (
  <Modal
    dismissible
    onClose={() => onClose(false)}
    show={show}
    size="4xl"
    theme={{
      content: {
        inner: '!bg-transparent'
      }
    }}
  >
    <Modal.Header className="border-b-0 hidden md:block !float-right" />
    <DisplayFrame data={data} height="500" width="100%" />
    <Modal.Footer className="justify-center border-b-0 border-t-0 lg:hidden">
      <Button
        onClick={() => onClose(false)}
        className="bg-transparent text-white pt-0 font-bold"
      >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
)
export default VideoPopup
