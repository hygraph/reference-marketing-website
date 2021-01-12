import * as React from 'react'

import { getSiteLayout } from '@/layout'
import Navigation from '@/components/navigation'

const ContentLayout = ({ children, page }) => {
  return (
    <React.Fragment>
      <Navigation {...(page?.navigation && { ...page.navigation })} />
      <div>{children}</div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<ContentLayout {...page.props}>{page}</ContentLayout>)

export default ContentLayout
