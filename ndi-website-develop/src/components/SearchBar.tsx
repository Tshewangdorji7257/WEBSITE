'use client'

import { ReactElement, useEffect, useState } from 'react'

interface IProps {
  onSearchSubmit: (search: string) => void
  // eslint-disable-next-line react/require-default-props
  classes?: string
}

const SearchBar = ({ onSearchSubmit, classes }: IProps): ReactElement => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    const timeOutId = setTimeout(() => onSearchSubmit(search), 500)
    return () => clearTimeout(timeOutId)
  }, [search])
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSearchSubmit(search)
        }}
        className={`border border-ndi-emrald rounded-full w-full relative p-2 ${classes}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 absolute top-[50%] translate-y-[-50%] left-4 text-ndi-light-gray"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          className="w-full pl-9 pr-4 border-0 h-[30px] bg-transparent focus:!border-0 focus:!outline-0 focus:!shadow-none	focus:!outline-offset-0 focus:!ring-transparent"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="hidden rounded-full text-white absolute top-[50%] translate-y-[-50%] right-2 px-12 py-1 bg-ndi-emrald"
          type="submit"
        >
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default SearchBar
