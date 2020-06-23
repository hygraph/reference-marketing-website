import { graphcmsClient } from '../../lib/_client'
import { blogPostQuery } from '../../lib/_queries'

function BlogPost({ post }) {
  return JSON.stringify(post)
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
