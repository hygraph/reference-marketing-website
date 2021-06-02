import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import { SiteLayout } from '@/layout'

import { defaultSEO } from '../next-seo.config'
import { theme } from '../styles/theme'
import '../styles/css/global.css'
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default App
