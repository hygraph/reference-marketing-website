import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { graphcmsClient } from '../lib/_client'
import mdxComponents from '../components/mdx'
import { pageQuery } from '../lib/_queries'
import { parseBlocksMdx } from '../utils/_parseBlocksMdx'
import Wrapper from '../components/wrapper'

function IndexPage({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps() {
  const {
    page: { blocks, subtitle, ...page },
  } = await graphcmsClient.request(pageQuery, { slug: 'home' })

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

export default IndexPage
