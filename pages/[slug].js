import { useRouter } from 'next/router'

import { getLayout as getPageLayout } from '../components/layout-page'
import { graphcmsClient } from '../lib/_client'
import { pageQuery } from '../lib/_queries'
import { parsePageData } from '../utils/_parsePageData'
import Wrapper from '../components/wrapper'

function Page({ page }) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading</div>

  if (!page) return <div> Not found</div>

  return <Wrapper {...page} />
}

export async function getStaticProps({ params }) {
  const { page } = await graphcmsClient.request(pageQuery, {
    slug: params.slug
  })

  return {
    props: {
      page: page ? await parsePageData(page) : null
    },
    revalidate: 3
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
      params: { slug: page.slug }
    })),
    fallback: true
  }
}

Page.getLayout = getPageLayout

export default Page
