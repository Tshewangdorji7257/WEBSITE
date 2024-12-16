import { Pagination } from 'flowbite-react'
import { ReactElement } from 'react'

interface IProps {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const PaginationComponent = ({
  currentPage,
  totalPages,
  setCurrentPage
}: IProps): ReactElement => {
  const buttonStyle = 'text-ndi-light-gray border-0 py-2 px-4 hover:bg-gray-200'
  return (
    <div>
      {totalPages > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination
            showIcons={false}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page)
            }}
            totalPages={totalPages}
            theme={{
              pages: {
                previous: {
                  base: buttonStyle
                },
                next: {
                  base: buttonStyle
                },
                selector: {
                  base: buttonStyle,
                  active: '!text-ndi-emrald',
                  disabled: 'opacity-50 cursor-normal'
                }
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default PaginationComponent
