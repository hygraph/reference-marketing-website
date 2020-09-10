import Banner from './banner'
import { getLayout as getSiteLayout } from './layout'
import Hero from './hero'
import Navigation from './navigation'

const PageLayout = ({ children, page }) => {
  return (
    <React.Fragment>
      {page?.banner && <Banner {...page.banner} />}
      {page?.hero ? (
        <Hero {...page.hero} navigation={page.navigation} page={page} />
      ) : page?.navigation ? (
        <Navigation {...page.navigation} />
      ) : null}
      <div>{children}</div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)

export default PageLayout
