import { graphcmsClient } from '../lib/_client'
import { pageQuery } from '../lib/_queries'
import Wrapper from '../components/wrapper'

function Page({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ params }) {
  const { page } = await graphcmsClient.request(pageQuery, {
    slug: params.slug,
  })

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const { pages } = await graphcmsClient.request(`{
     pages(where: {slug_not_in: ["home", "blog"]}) {
       slug
     }
   }`)

  return {
    paths: pages.map((page) => ({
      params: { slug: page.slug },
    })),
    fallback: false,
  }
}

export default Page
