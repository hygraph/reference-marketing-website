import { BlogPostCard } from '../components/blocks/columns'
import { graphcmsClient } from '../lib/_client'
import { blogQuery } from '../lib/_queries'

function BlogPage({ page: { subtitle, title }, posts }) {
  return (
    <React.Fragment>
      <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {title}
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {subtitle.markdown}
          </p>
        </div>
      </main>
      <div className="grid gap-14 grid-cols-1 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const { page, posts } = await graphcmsClient.request(blogQuery)

  return {
    props: {
      page,
      posts,
    },
  }
}

export default BlogPage
