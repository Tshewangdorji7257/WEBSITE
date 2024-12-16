import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import SocialMediaList from './SocialMedia'

interface IProps {
  title: string | undefined
  desc: string | undefined
  image: string | undefined
  backButtonName: string | undefined
  backButtonRef: (value: boolean) => void
  visitButtonName: string | undefined
  visitButtonRef: string | undefined
}

const SuccessPage = ({
  title,
  desc,
  image,
  backButtonName,
  backButtonRef,
  visitButtonName,
  visitButtonRef
}: IProps): ReactElement => (
  <div className="flex flex-col items-center">
    {title && (
      <h1 className="text-ndi-emrald font-bold text-center text-5xl mb-4">
        {title}
      </h1>
    )}
    {desc && <p className="text-ndi-gray-500 text-center">{desc}</p>}
    {image && (
      <Image
        className="object-cover object-bottom h-[410px]mt-16"
        src={image}
        alt="Success"
        width={700}
        height={600}
      />
    )}
    <div className="mt-12 flex flex-wrap">
      <button
        type="button"
        className="block outline-btn text-center rounded-full border border-ndi-emrald py-4 px-8 text-ndi-emrald min-w-235px mr-6"
        onClick={() => backButtonRef(true)}
      >
        {backButtonName}
      </button>
      <Link
        className="block text-center outline-btn rounded-full border border-ndi-emrald py-4 px-8 text-ndi-emrald min-w-235px"
        href={visitButtonRef || ''}
      >
        {visitButtonName}
      </Link>
    </div>
    <div className="mt-12">
      <h4 className="text-4xl text-ndi-emrald font-bold mb-4">
        Let’s connect!
      </h4>
      <SocialMediaList size={40} spacing="mr-4" />
    </div>
  </div>
)
export default SuccessPage
