'use client'

import { ReactElement, useEffect } from 'react'

const ChatBot = (): ReactElement => {
  useEffect(() => {
    // Load the chatbot script dynamically
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      window.nomindbhutanConfig = { chatbotId: "thGs9Mui3vAzU5I7ND7MT" };
    `
    document.head.appendChild(script)

    const chatbotScript = document.createElement('script')
    chatbotScript.type = 'module'
    chatbotScript.src = 'https://dashboard.nomindbhutan.com/embed.min.js'
    document.body.appendChild(chatbotScript)

    // Clean up on component unmount
    return () => {
      document.head.removeChild(script)
      document.body.removeChild(chatbotScript)
    }
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return <> </> // No need for unnecessary UI code
}

export default ChatBot
