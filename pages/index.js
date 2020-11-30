import { getLayout as getPageLayout } from '../components/layout-page'
import { graphcmsClient } from '../lib/_client'
import { pageQuery } from '../lib/_queries'
import { parsePageData } from '../utils/_parsePageData'
import Wrapper from '../components/wrapper'

function IndexPage({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps() {
  const { page } = await graphcmsClient.request(pageQuery, { slug: 'home' })

  return {
    props: {
      page: await parsePageData(page)
    },
    revalidate: 3
  }
}

IndexPage.getLayout = getPageLayout

export default IndexPage
