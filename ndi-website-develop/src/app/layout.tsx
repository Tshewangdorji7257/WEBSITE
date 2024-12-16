import './globals.css'

import React, { ReactElement } from 'react'

import { Amplify } from 'aws-amplify'
import ChatBot from '@/components/Chatbot'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import IdleState from '@/components/IdleStateHandle'
// import { Inter } from 'next/font/google'
import SEO from '@/config/defaultSEO'
import config from '../aws-exports'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  ...SEO
}

Amplify.configure({ ...config, ssr: true })

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}): ReactElement => (
  <html lang="en">
    <body className="bg-ndi-gray" suppressHydrationWarning>
      <Header />
      {/* To handle the idle state of the app for 1 hour */}
      <IdleState />
      <div className="pt-[70px] bg-white">{children}</div>
      <ChatBot />
      <Footer />
    </body>
  </html>
)

export default RootLayout
