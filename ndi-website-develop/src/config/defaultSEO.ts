import { Metadata } from 'next'

const url = 'https://www.bhutanndi.com'
const appName = 'NDI Website'

const SEO: Metadata = {
  title: appName,
  description:
    'We enable trusted interaction between individuals and service providers',
  authors: { url, name: appName },
  viewport: 'width=device-width, initial-scale=1.0',
  keywords:
    'ndi,bhutan,blockchain,ssi,national digital identity,foundational id,verifiable credentials,vc',
  alternates: {
    canonical: url
  },
  openGraph: {
    url,
    title: appName,
    description:
      'We enable trusted interaction between individuals and service providers.',
    images: ['https://www.bhutanndi.com/ndi-logo.svg']
  },
  publisher: appName
}

export default SEO
