'use client'

import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IdleState = () => {
  const [mouseMoved, setMouseMoved] = useState(false)
  useEffect(() => {
    const idleTimeout = setTimeout(() => {
      // Reload the page after a period of inactivity
      window.location.reload()
    }, 60 * 60 * 1000) // 1 hour

    // Clear the timeout on activity - Mouse move
    window.addEventListener('mousemove', () => {
      clearTimeout(idleTimeout)
      setMouseMoved(!mouseMoved)
    })

    // // Clear the timeout on activity - Scroll
    // window.addEventListener('scroll', () => {
    //   clearTimeout(idleTimeout)
    //   setMouseMoved(!mouseMoved)
    // })

    // Cleanup on unmount
    return () => {
      clearTimeout(idleTimeout)
    }
  }, [mouseMoved])
  return null
}

export default IdleState
