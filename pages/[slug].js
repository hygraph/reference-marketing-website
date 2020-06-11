import { graphcmsClient } from '../lib/_client'
import Wrapper from '../components/wrapper'

function Page({ page }) {
  return <Wrapper {...page} />
}

export async function getStaticProps({ params }) {
  const { page } = await graphcmsClient.request(
    `query PageQuery($slug: String!) {
      page(where: {slug: $slug}) {
        banner {
          id
          content
          href
          slug
          theme
        }
        blocks {
          __typename
          ... on Grid {
            id
            columns {
              __typename
              ... on BlogPost {
                id
                authors {
                  name
                }
                content {
                  markdown
                }
                coverImage {
                  id
                  title
                  url
                }
                published
                slug
                title
              }
              ... on Feature {
                id
                content {
                  markdown
                }
                image {
                  id
                  title
                  url
                }
                slug
                title
              }
            }
            slug
          }
          ... on Hero {
            id
            buttons {
              id
              href
              label
              style
            }
            image {
              id
              title
              url
            }
            slug
          }
        }
        id
        subtitle
        title
      }
    }`,
    { slug: params.slug }
  )

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const { pages } = await graphcmsClient.request(`{
     pages(where: {slug_not: "home"}) {
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

export default Page
