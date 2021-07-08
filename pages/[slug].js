import { gql } from 'graphql-request'

import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function Page({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ locale, params, preview = false }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(pageQuery, {
    locale,
    slug: params.slug
  })

  if (!page) {
    return {
      notFound: true
    }
  }

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData,
      preview
    },
    revalidate: 60
  }
}

export async function getStaticPaths({ locales }) {
  let paths = []

  const client = graphcmsClient()

  const { pages } = await client.request(gql`
    {
      pages(where: { slug_not_in: ["home", "blog"] }) {
        slug
      }
    }
  `)

  for (const locale of locales) {
    paths = [
      ...paths,
      ...pages.map((page) => ({ params: { slug: page.slug }, locale }))
    ]
  }

  return {
    paths,
    fallback: 'blocking'
  }
}

Page.getLayout = getPageLayout
