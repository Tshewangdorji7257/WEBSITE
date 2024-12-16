import { ReactElement, useState } from 'react'

import { Dropdown } from 'flowbite-react'

interface IProps {
  onSortOptionSelect: (search: string) => void
}

const SortFilter = ({ onSortOptionSelect }: IProps): ReactElement => {
  const [selectOption, setSelectOption] = useState('Newest to Oldest')
  const options = [
    {
      name: 'Newest to Oldest',
      value: 'DESC'
    },
    {
      name: 'Oldest to Newest',
      value: 'ASC'
    }
  ]
  return (
    <div className="flex sorting h-[48px]">
      <Dropdown
        dismissOnClick
        arrowIcon={false}
        inline
        label={
          <div className="text-ndi-emrald hover:text-white hover:bg-ndi-emrald h-[48px] rounded-full border border-ndi-emrald text-sm font-medium flex items-center px-4 py-2">
            {selectOption}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        }
        content="!focus:outline-none !focus:ring-0"
        className="!focus:outline-none !focus:ring-0"
        theme={{
          content: '!focus:outline-none !focus:ring-0'
        }}
      >
        {options.map((option) => (
          <Dropdown.Item
            key={option.value}
            onClick={(): void => {
              setSelectOption(option.name)
              onSortOptionSelect(option.value)
            }}
            theme={{
              base: 'text-ndi-light-gray hover:text-ndi-emrald pl-5 pr-2 py-2 cursor-pointer'
            }}
          >
            {option.name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  )
}

export default SortFilter
