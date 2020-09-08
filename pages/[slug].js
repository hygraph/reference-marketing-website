import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { getLayout as getPageLayout } from '../components/layout-page'
import { graphcmsClient } from '../lib/_client'
import mdxComponents from '../components/mdx'
import { pageQuery } from '../lib/_queries'
import { parseBlocksMdx } from '../utils/_parseBlocksMdx'
import Wrapper from '../components/wrapper'

function Page({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ params }) {
  const {
    page: { blocks, subtitle, ...page },
  } = await graphcmsClient.request(pageQuery, {
    slug: params.slug,
  })

  return {
    props: {
      page: {
        ...(blocks && {
          blocks: await parseBlocksMdx(blocks),
        }),
        ...(subtitle && {
          subtitle: {
            ...subtitle,
            mdx: await renderToString(he.decode(subtitle.markdown), {
              components: mdxComponents,
            }),
          },
        }),
        ...page,
      },
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

Page.getLayout = getPageLayout

export default Page
