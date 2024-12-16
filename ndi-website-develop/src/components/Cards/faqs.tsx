'use client'

import { Accordion } from 'flowbite-react'
import Markdown from '../Markdown'
import { ReactElement } from 'react'

interface IProps {
  data: {
    title: string
    data: string
  }[]
}

const FaqCard = ({ data }: IProps): ReactElement => (
  <Accordion
    theme={{
      root: {
        base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
        flush: {
          off: 'rounded-lg border',
          on: 'border-b'
        }
      }
    }}
    flush
  >
    {data &&
      data.map((item) => (
        <Accordion.Panel
          theme={{
            root: {
              base: 'bg-red-200 border-gray-200',
              flush: {
                off: 'rounded-lg border bg-lime-600	',
                on: 'border-b bg-red-200'
              }
            }
          }}
        >
          <Accordion.Title
            theme={{
              arrow: {
                base: 'h-6 w-6 shrink-0 text-ndi-emrald',
                open: {
                  off: '',
                  on: 'rotate-180'
                }
              },
              base: 'rounded-t-lg !border-t !border-x mt-5 bg-white flex w-full items-start justify-between !border-ndi-emrald py-5 px-5 text-left font-medium text-gray-500 hover:text-ndi-emrald',
              heading: 'font-normal text-lg',
              open: {
                off: '!border-b !rounded-b-lg text-ndi-light-gray hover:text-ndi-emrald',
                on: '!border-b-0'
              }
            }}
          >
            {item?.title}
          </Accordion.Title>
          <Accordion.Content
            theme={{
              base: '!border-ndi-emrald py-5 px-5 mb-2 !border-t-0 !border-x !border-b rounded-b-lg'
            }}
          >
            {item?.data && <Markdown content={item?.data} />}
          </Accordion.Content>
        </Accordion.Panel>
      ))}
  </Accordion>
)

export default FaqCard
