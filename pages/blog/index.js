import { Box, Grid } from '@chakra-ui/react'

import { blogPageQuery } from '@/lib/_queries'
import { BlogPostCard } from '@/columns'
import { getPageLayout } from '@/layout'
import { hygraphClient } from '@/lib/_client'
import { parsePageData } from '@/utils/_parsePageData'
import { parsePostData } from '@/utils/_parsePostData'

export default function BlogPage({ posts }) {
  return (
    <main>
      <Box
        maxW={{ base: 'xl', lg: '7xl' }}
        mx="auto"
        px={[4, 6, null, 8]}
        py={[8, 12, null, 20]}
      >
        <Grid
          gridGap={14}
          gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        >
          {posts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </Grid>
      </Box>
    </main>
  )
}

export async function getStaticProps({ locale, preview = false }) {
  const client = hygraphClient(preview)

  const { page, posts } = await client.request(blogPageQuery, {
    locale
  })

  const parsedPageData = await parsePageData(page)
  const parsedPostData = await Promise.all(
    posts.map((post) => parsePostData(post))
  )

  return {
    props: {
      page: parsedPageData,
      posts: parsedPostData,
      preview
    },
    revalidate: 60
  }
}

BlogPage.getLayout = getPageLayout
