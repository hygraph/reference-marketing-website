import SiteLayout from '../components/layout'

import '../styles/index.css'

function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default App
