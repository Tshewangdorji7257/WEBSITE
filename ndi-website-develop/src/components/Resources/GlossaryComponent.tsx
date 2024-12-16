'use client'

import { Amplify, DataStore, Hub, SortDirection } from 'aws-amplify'
import { ListGlossariesQuery, PageNames, Pages } from '@/API'
import { ReactElement, useEffect, useState } from 'react'

import DataError from '@/components/Errors/DataError'
import { Glossary } from '@/models'
import GlossaryCard from '@/components/Cards/glossaries'
import Markdown from '@/components/Markdown'
import PageLoader from '@/components/Loader/PageLoader'
import SearchBar from '@/components/SearchBar'
import _ from 'lodash'
import config from '../../aws-exports'
import fetchPageByName from '@/services/page.service'

Amplify.configure({ ...config })
interface IWords {
  id: string
  word: string
  description: string
  order: number
}

interface IGlossary {
  letter: string
  words: IWords[]
}

type IMediaType = ListGlossariesQuery['listGlossaries'] extends {
  items: infer T
}
  ? T
  : never

const GlossaryComponent = (): ReactElement => {
  const [alphabet, setAlphabet] = useState([
    { text: 'a', dataStatus: false },
    { text: 'b', dataStatus: false },
    { text: 'c', dataStatus: false },
    { text: 'd', dataStatus: false },
    { text: 'e', dataStatus: false },
    { text: 'f', dataStatus: false },
    { text: 'g', dataStatus: false },
    { text: 'h', dataStatus: false },
    { text: 'i', dataStatus: false },
    { text: 'j', dataStatus: false },
    { text: 'k', dataStatus: false },
    { text: 'l', dataStatus: false },
    { text: 'm', dataStatus: false },
    { text: 'n', dataStatus: false },
    { text: 'o', dataStatus: false },
    { text: 'p', dataStatus: false },
    { text: 'q', dataStatus: false },
    { text: 'r', dataStatus: false },
    { text: 's', dataStatus: false },
    { text: 't', dataStatus: false },
    { text: 'u', dataStatus: false },
    { text: 'v', dataStatus: false },
    { text: 'w', dataStatus: false },
    { text: 'x', dataStatus: false },
    { text: 'y', dataStatus: false },
    { text: 'z', dataStatus: false }
  ])

  const [loader, setLoader] = useState<boolean>(true)
  const [glossaries, setGlossaries] = useState<
    boolean | null | undefined | IGlossary[]
  >()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [sections, setSections] = useState<Pages>()
  const [initLoader, setInitLoader] = useState<boolean>(false)

  const fetchData = async (wordVal?: string, letterVal?: string) => {
    setLoader(true)
    try {
      const response = await DataStore.query(
        Glossary,
        (c) =>
          // eslint-disable-next-line no-shadow
          c.and((c) => [c.letter.contains(letterVal || '')]),
        {
          sort: (s) => s.order(SortDirection.ASCENDING)
        }
      )
      const searchText: string = wordVal || ''
      const searchResponse = response?.filter((element) =>
        element.word?.toLowerCase().includes(searchText.toLowerCase())
      )

      setLoader(false)
      const list =
        searchResponse &&
        searchResponse?.length > 0 &&
        (searchResponse as IMediaType)
      const groupData = list && _.groupBy(list, 'letter')
      const finalList: IGlossary[] = Object.entries(groupData).map(
        ([key, value]) => ({
          letter: key,
          words: (value || []) as IWords[]
        })
      )
      const result = alphabet.map((element) => {
        const reassignedAlphabet = { ...element }
        if (Object.keys(groupData).includes(reassignedAlphabet.text)) {
          reassignedAlphabet.dataStatus = true
        }
        return reassignedAlphabet
      })

      setAlphabet(result)
      setGlossaries(finalList)
    } catch (err) {
      setLoader(false)
      // eslint-disable-next-line no-console
      console.log('Error::', err, glossaries)
    }
  }

  const fetchPageData = async () => {
    try {
      const sectionsData = await fetchPageByName(PageNames.GLOSSARY)
      if (sectionsData) {
        setSections(sectionsData)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('ERROR-Glossary::', err)
    }
  }

  useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen('datastore', async (capsule) => {
      setInitLoader(true)
      const {
        payload: { event }
      } = capsule

      if (event === 'ready') {
        fetchData()
        setInitLoader(false)
      }
    })

    fetchData()
    fetchPageData()
    // Start the DataStore, this kicks-off the sync process.
    DataStore.start()
    return () => {
      removeListener()
    }
  }, [])

  return (
    <div className="bg-white px-section py-12">
      <div className="max-w-container mx-auto">
        <div>
          <div className="mb-8">
            {sections && Array.isArray(sections) && (
              <div className="glossary-markdown">
                <Markdown content={sections[0]?.contentData} />
              </div>
            )}
          </div>
          <SearchBar
            onSearchSubmit={(value) => {
              fetchData(value, filter)
              setSearch(value)
            }}
          />
          <div className="flex justify-center flex-wrap mt-8">
            {alphabet.map((element) => (
              <button
                type="button"
                className={`px-2 py-1 text-3xl font-medium text-ndi-emrald ${
                  filter === element.text && 'bg-gray-100'
                }
                ${
                  element.dataStatus === false
                    ? 'hover:bg-gray-200 cursor-not-allowed'
                    : 'hover:bg-green-200 cursor-pointer'
                }
                hover:text-white
                `}
                disabled={element.dataStatus === false}
                onClick={() => {
                  fetchData(search, element.text)
                  setFilter(element.text)
                }}
                title={element.dataStatus === false ? 'Not available' : ''}
              >
                {element.text?.toLocaleUpperCase()}
              </button>
            ))}
          </div>
          {(search || filter) && (
            <div className="text-sm flex mt-4">
              {search && (
                <div className="bg-gray-200 mr-4 px-4 py-2 text-gray-900 rounded-full flex justify-between items-center min-w-[50px]">
                  <span className="font-medium">{search}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-900 ml-2 cursor-pointer"
                    onClick={() => {
                      fetchData('', filter)
                      setSearch('')
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}
              {filter && (
                <div className="bg-gray-200 px-4 py-2 text-gray-900 rounded-full flex justify-between items-center min-w-[50px]">
                  <span className="font-medium">
                    {filter.toLocaleUpperCase()}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-900 ml-2 cursor-pointer"
                    onClick={() => {
                      fetchData(search, '')
                      setFilter('')
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          {glossaries && Array.isArray(glossaries) && glossaries.length > 0 ? (
            glossaries.map((item: IGlossary) => (
              <div key={`glossary-card-${item.letter}`}>
                <GlossaryCard title={item.letter} words={item.words} />
              </div>
            ))
          ) : (!(
              glossaries &&
              Array.isArray(glossaries) &&
              glossaries.length > 0
            ) &&
              loader) ||
            initLoader ? (
            <PageLoader />
          ) : (
            <DataError message="No data found" />
          )}
        </div>
      </div>
    </div>
  )
}

export default GlossaryComponent
