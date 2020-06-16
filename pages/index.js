import { graphcmsClient } from '../lib/_client'
import { pageQuery } from '../lib/_queries'
import Wrapper from '../components/wrapper'

function IndexPage({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps() {
  const { page } = await graphcmsClient.request(pageQuery, { slug: 'home' })

  return {
    props: {
      page,
    },
  }
}

export default IndexPage
