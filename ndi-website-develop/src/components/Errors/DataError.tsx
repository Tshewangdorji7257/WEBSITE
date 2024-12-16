import Image from 'next/image'
import { ReactElement } from 'react'

interface IProps {
  message: string
  // eslint-disable-next-line react/require-default-props
  showImage?: boolean
}

const DataError = ({ message, showImage }: IProps): ReactElement => (
  <div className="py-24 max-w-container mx-auto">
    <h1 className="text-[76px] !text-ndi-emrald text-center font-semibold">
      {message || 'Something went wrong!'}
    </h1>
    {showImage !== false && (
      <div className="relative">
        <Image
          src="/not-found.svg"
          alt="Data not found"
          className="w-[80%] h-full mt-0 mb-0 mx-auto"
          width={500}
          height={500}
        />
      </div>
    )}
  </div>
)

export default DataError
