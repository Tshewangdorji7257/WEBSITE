import { ReactElement } from 'react'

interface IProps {
  isViewMore: boolean
  OnClickHandle: (value: string) => void
}

const ViewMore = ({ OnClickHandle, isViewMore }: IProps): ReactElement => (
  <div>
    {isViewMore ? (
      <button
        className="w-full text-md text-ndi-emrald font-medium my-4 py-4 px-8 hover:bg-ndi-emrald hover:text-white"
        type="button"
        onClick={(): void => OnClickHandle('VIEW_MORE')}
      >
        View more
      </button>
    ) : (
      <button
        className="w-full text-md text-ndi-emrald font-medium my-4 py-4 px-8 hover:bg-ndi-emrald hover:text-white"
        type="button"
        onClick={(): void => OnClickHandle('VIEW_LESS')}
      >
        View less
      </button>
    )}
  </div>
)

export default ViewMore
