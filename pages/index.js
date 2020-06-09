import Banner from '../components/banner'
import * as Blocks from '../components/blocks'
import { graphcmsClient } from '../lib/_client'

function IndexPage({ page: { banner, blocks, ...page } }) {
  return (
    <React.Fragment>
      {banner && <Banner {...banner} />}
      {blocks.map((block, index) => {
        const Component = Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} {...block} {...page} />
      })}
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const { page } = await graphcmsClient.request(
    `query IndexPageQuery($slug: String!) {
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
    { slug: 'home' }
  )

  return {
    props: {
      page,
    },
  }
}

export default IndexPage
