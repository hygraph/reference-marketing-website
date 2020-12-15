import * as React from 'react'

import { getLayout as getSiteLayout } from './layout'
import Hero from './hero'
import * as Marketing from './marketing'
import Navigation from './navigation'

const PageLayout = ({ children, page }) => {
  const pageBanner = page.marketing.find(
    (block) => block.__typename === 'Banner'
  )

  return (
    <React.Fragment>
      {pageBanner ? <Marketing.Banner {...pageBanner} /> : null}
      {page?.hero ? (
        <Hero {...page.hero} navigation={page.navigation} page={page} />
      ) : (
        <Navigation {...page?.navigation} />
      )}
      <div>{children}</div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)

export default PageLayout
