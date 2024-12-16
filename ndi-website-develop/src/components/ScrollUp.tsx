'use client'

import { useEffect } from 'react'

// eslint-disable-next-line react/function-component-definition
export default function ScrollUp(): null {
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0)
  }, [])

  return null
}
