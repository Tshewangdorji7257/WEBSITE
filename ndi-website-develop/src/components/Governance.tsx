'use client'

import { API, Amplify } from 'aws-amplify'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useEffect, useState } from 'react'

import DataError from '@/components/Errors/DataError'
import Image from 'next/image'
import { ListGovernanceFrameworksQuery } from '@/API'
import Markdown from '@/components/Markdown'
import PageLoader from './Loader/PageLoader'
import config from '../aws-exports'
import { listGovernanceFrameworks } from '@/graphql/queries'

Amplify.configure({ ...config })
interface IGovernanceDocs {
  id: string
  isActive: boolean
  language: string
  order: number
  source: string
}

interface IFrameworkItem {
  date: string
  description: string
  governanceDocs: { items: IGovernanceDocs[] }
  id: string
  isActive?: boolean
  isNDI: boolean
  order: number
  title: string
  selected?: boolean
}

interface IOrder {
  order: number
}

interface IList {
  data: ListGovernanceFrameworksQuery
}

const Governance = (): ReactElement => {
  const [showList, setShowList] = useState<boolean>(false)
  const [loader, setLoader] = useState<boolean>(true)
  const [framework, setFramework] = useState<IFrameworkItem>()
  const [frameworkList, setFrameworkList] = useState<
    boolean | null | undefined | IFrameworkItem[]
  >()

  const fetchDocuments = async () => {
    setLoader(true)
    try {
      const response = (await API.graphql({
        query: listGovernanceFrameworks,
        variables: {
          filter: { _deleted: { ne: true }, isActive: { ne: false } }
        }
      })) as IList
      const list: any =
        response &&
        response?.data &&
        response?.data?.listGovernanceFrameworks &&
        response?.data?.listGovernanceFrameworks?.items?.sort(
          (a: any, b: any) => a.order - b.order
        )

      setLoader(false)

      if (list && Array.isArray(list)) {
        setFrameworkList(list)
        const selectFramework = Array.isArray(list) && list[0]
        setFramework(selectFramework || undefined)
      }

      return []
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err)
      return []
    }
  }

  useEffect(() => {
    Amplify.configure(config)
    fetchDocuments()
  }, [])

  const ndiItems: IFrameworkItem[] =
    frameworkList && Array.isArray(frameworkList) && frameworkList.length > 0
      ? frameworkList.filter((item) => item.isNDI)
      : []
  return (
    <div className="px-section bg-white">
      <div className="max-w-container mx-auto">
        {frameworkList && Array.isArray(frameworkList) ? (
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-4 py-12 min-h-full-ex-footer">
            <div className="h-auto">
              {ndiItems &&
                ndiItems.length > 0 &&
                ndiItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`border border-ndi-gray text-left text-md w-full py-2 px-4 rounded mb-4 ${
                      framework?.id === item.id
                        ? 'bg-ndi-gray text-white'
                        : 'text-ndi-gray bg-white'
                    }`}
                    onClick={() => setFramework(item)}
                  >
                    {item.title}
                  </button>
                ))}
              <div>
                {frameworkList &&
                  Array.isArray(frameworkList) &&
                  frameworkList.filter((item: IFrameworkItem) => !item.isNDI)
                    .length > 0 && (
                    <>
                      <button
                        type="button"
                        className={`flex justify-between border border-ndi-gray py-2 px-4 text-left rounded w-full text-ndi-gray ${
                          framework?.id &&
                          !framework.isNDI &&
                          'bg-ndi-gray text-white'
                        } ${showList && '!border-b-0 rounded-b-none'}`}
                        onClick={() => setShowList(!showList)}
                      >
                        Governance Framework
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className={`w-6 h-6 ${showList && 'rotate-180'}`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                      </button>
                      <ul
                        className={`divide-y divide-ndi-gray border-ndi-gray ${
                          showList && 'border-b border-x rounded-b'
                        }`}
                      >
                        {showList &&
                          frameworkList.length > 0 &&
                          frameworkList
                            .filter((item) => !item.isNDI)
                            .map((item) => {
                              const isSelected = Boolean(
                                framework && item.id === framework.id
                              )
                              return (
                                <li
                                  key={item.id}
                                  className={`${
                                    isSelected ? 'bg-ndi-gray' : 'bg-white'
                                  }`}
                                >
                                  <button
                                    type="button"
                                    className="block py-2 px-4 w-full"
                                    onClick={() => setFramework(item)}
                                  >
                                    <h4
                                      className={`text-ndi-gray text-sm font-medium text-left ${
                                        isSelected && 'text-white'
                                      }`}
                                    >
                                      {item.title}
                                    </h4>
                                    <p
                                      className={`text-ndi-light-gray text-start text-xs font-normal ${
                                        isSelected && 'text-white'
                                      }`}
                                    >
                                      Version: {item.date}
                                    </p>
                                  </button>
                                </li>
                              )
                            })}
                      </ul>
                    </>
                  )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <h3 className="border-b border-gray-200 mb-4 pb-4">
                {framework?.description && (
                  <Markdown content={framework?.description} />
                )}
              </h3>
              {framework?.governanceDocs?.items &&
                framework?.governanceDocs?.items?.length > 0 && (
                  <div className="border border-ndi-gray">
                    <div className="bg-ndi-gray px-4 py-2 text-md text-white">
                      Language, formats and link to Bhutan NDI Act
                    </div>
                    <div className="grid grid-cols-3 sm:grip-cols-3 gap-4 md:grid-cols-8 govn-download-doc p-4">
                      <div>
                        <p>&nbsp;</p>
                        <p>HTML</p>
                        <p>PDF</p>
                      </div>
                      {framework.governanceDocs?.items
                        ?.sort((a: IOrder, b: IOrder) => a.order - b.order)
                        .map((doc: IGovernanceDocs) => (
                          <div className="">
                            <p>{doc.language}</p>
                            <p>
                              <div
                                className="opacity-50 cursor-not-allowed"
                                title="Not available"
                              >
                                <Image
                                  src="/html-icon.svg"
                                  alt="html-icon"
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </p>
                            <p>
                              <a
                                href={doc.source}
                                target="_blank"
                                rel="noreferrer"
                                aria-disabled={!doc.source}
                                className={`${
                                  !doc.source && 'opacity-50 cursor-not-allowed'
                                } flex w-fit`}
                                title={`${!doc.source ? 'Not available' : ''}`}
                              >
                                <Image
                                  src="/pdf-icon.svg"
                                  alt="pdf-icon"
                                  width={30}
                                  height={30}
                                />
                              </a>
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        ) : !(frameworkList && Array.isArray(frameworkList)) && loader ? (
          <PageLoader fullHeight />
        ) : (
          <DataError message="No data found" />
        )}
      </div>
    </div>
  )
}

export default Governance
