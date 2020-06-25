import { blogPostQuery } from '../../lib/_queries'
import { graphcmsClient } from '../../lib/_client'

import Heading from '../../components/heading'
import MarkdownRenderer from '../../components/markdown-renderer'

function BlogPost({ post }) {
  return (
    <React.Fragment>
      <header className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <Heading level={2}>{post.title}</Heading>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-col items-center">
            <ul className="flex">
              {post.authors.map((author) => (
                <li key={author.id} className="-ml-2 first:ml-0">
                  <img
                    className="h-10 w-10 rounded-full shadow-solid text-white"
                    src={author.photo.url}
                    alt={author.name}
                    title={author.name}
                  />
                </li>
              ))}
            </ul>
            <div className="flex text-sm leading-5 mt-3 text-gray-500">
              <time dateTime={post.published}>{post.published}</time>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto md:max-w-3xl px-4">
        <img
          className="object-cover mx-auto rounded-lg shadow-md"
          src={post.coverImage.url}
          alt={post.coverImage.title}
          title={post.coverImage.title}
        />
        <MarkdownRenderer content={post.content.markdown} />
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  const { post } = await graphcmsClient.request(blogPostQuery, {
    slug: params.slug,
  })

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const { posts } = await graphcmsClient.request(`{
     posts: blogPosts {
       slug
     }
   }`)

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

export default BlogPost
