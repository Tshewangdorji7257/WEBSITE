'use client'

import { ReactElement } from 'react'

interface IWords {
  id: string
  word: string
  description: string
  order: number
}

interface IProps {
  title: string
  words: IWords[]
}

const GlossaryCard = ({ title, words }: IProps): ReactElement => (
  <div>
    <div className="text-5xl text-ndi-emrald font-bold mb-4 mt-8">
      {`${title?.toLocaleUpperCase()}${title?.toLocaleLowerCase()}`}
    </div>
    <div>
      {words &&
        Array.isArray(words) &&
        words.length > 0 &&
        words.map((word) => (
          <div key={word.id} className="border rounded p-4 mb-2">
            <h3 className="text-3xl font-medium text-ndi-emrald">
              {word.word}
            </h3>
            <p className="text-base font-normal mt-2">{word.description}</p>
          </div>
        ))}
    </div>
  </div>
)

export default GlossaryCard
