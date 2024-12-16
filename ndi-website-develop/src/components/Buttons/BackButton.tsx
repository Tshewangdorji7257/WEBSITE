'use client'

/* eslint-disable react/require-default-props */
import { ReactElement } from 'react'
import { useRouter } from 'next/navigation'

interface IProps {
  backRoute?: string
  title?: string
  icon?: ReactElement
  styles?: string
  outline?: boolean
}

const BackButton = ({
  backRoute,
  title = 'Back',
  icon,
  styles,
  outline = false
}: IProps): ReactElement => {
  const router = useRouter()

  return (
    <button
      type="button"
      className={`${styles} ${
        outline
          ? 'outline-btn'
          : 'flex items-center text-sm font-normal text-white bg-ndi-emrald rounded-full px-[15px] py-[7px] mt-[1.25rem] w-fit hover:opacity-70'
      }`}
      onClick={() => (backRoute ? router.push(backRoute) : router.back())}
    >
      {icon || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-[10px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      )}

      {title || 'Back'}
    </button>
  )
}

export default BackButton
