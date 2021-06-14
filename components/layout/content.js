import { getSiteLayout } from '@/layout'
import Navigation from '@/components/navigation'

export default function ContentLayout({ children, page }) {
  return (
    <>
      <Navigation {...(page?.navigation && { ...page.navigation })} />
      <div>{children}</div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<ContentLayout {...page.props}>{page}</ContentLayout>)
}
