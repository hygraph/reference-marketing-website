import * as React from 'react'
import { DefaultSeo } from 'next-seo'

import { SiteLayout } from '@/layout'

import { defaultSEO } from '../next-seo.config'
import 'tailwindcss/tailwind.css'

function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
    </React.Fragment>
  )
}

export default App
