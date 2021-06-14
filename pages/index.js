import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function IndexPage({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ locale }) {
  const { page } = await graphcmsClient.request(pageQuery, {
    locale,
    slug: 'home'
  })

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData
    },
    revalidate: 60
  }
}

IndexPage.getLayout = getPageLayout
