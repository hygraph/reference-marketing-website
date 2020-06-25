import { BlogPostCard } from '../components/blocks/columns'
import { graphcmsClient } from '../lib/_client'
import { blogPageQuery } from '../lib/_queries'

import Heading from '../components/heading'
import MarkdownRenderer from '../components/markdown-renderer'

function BlogPage({ featuredPosts, page: { subtitle, title }, posts }) {
  return (
    <main>
      <header className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <Heading level={2} className="mb-3 md:mb-5">
            {title}
          </Heading>
          <MarkdownRenderer content={subtitle.markdown} />
        </div>
      </header>
      <div className="max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="grid gap-14 grid-cols-1 mb-14">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} isFeatured />
          ))}
        </div>
        <div className="grid gap-14 grid-cols-1 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const { featuredPosts, page, posts } = await graphcmsClient.request(
    blogPageQuery
  )

  return {
    props: {
      featuredPosts,
      page,
      posts,
    },
  }
}

export default BlogPage
