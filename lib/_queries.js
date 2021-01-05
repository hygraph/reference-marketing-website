import { gql } from 'graphql-request'

const blogPageQuery = gql`
  fragment BlogPostFields on BlogPost {
    id
    authors {
      id
      name
      photo {
        id
        title
        url
      }
    }
    content
    coverImage {
      id
      height
      title
      url
      width
    }
    excerpt
    published
    slug
    title
  }

  query BlogPageQuery($locale: Locale!) {
    page(locales: [$locale, en], where: { slug: "blog" }) {
      id
      footer {
        id
        pages {
          id
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          slug
        }
      }
      subtitle
      title
    }
    featuredPosts: blogPosts(first: 1, orderBy: published_DESC) {
      ...BlogPostFields
    }
    posts: blogPosts(skip: 1, orderBy: published_DESC) {
      ...BlogPostFields
    }
  }
`

const blogPostQuery = gql`
  query BlogPostQuery($locale: Locale!, $slug: String!) {
    allPosts: blogPosts(locales: [$locale, en], orderBy: published_ASC) {
      id
      slug
      title
    }
    page(where: { slug: "blog" }) {
      footer {
        id
        pages {
          id
          slug
        }
        slug
        title
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          slug
        }
      }
    }
    post: blogPost(where: { slug: $slug }) {
      id
      authors {
        id
        name
        photo {
          id
          title
          url
        }
      }
      content
      coverImage {
        id
        height
        title
        url
        width
      }
      excerpt
      published
      slug
      title
    }
  }
`

const pageQuery = gql`
  query PageQuery($locale: Locale!, $slug: String!) {
    page(locales: [$locale, en], where: { slug: $slug }) {
      blocks {
        __typename
        ... on Breakpoint {
          id
          buttons {
            id
            href
            label
            style
          }
          subtitle
          title
        }
        ... on Grid {
          id
          columns {
            __typename
            ... on BlogPost {
              id
              authors {
                id
                name
                photo {
                  id
                  title
                  url
                }
              }
              content
              coverImage {
                id
                height
                title
                url
                width
              }
              excerpt
              published
              slug
              title
            }
            ... on Faq {
              id
              content
              title
            }
            ... on Feature {
              id
              content
              image {
                id
                height
                title
                url
                width
              }
              slug
              title
            }
            ... on PricingPlan {
              id
              annualPrice
              description
              included
              monthlyPrice
              name
            }
            ... on Stat {
              id
              label
              value
            }
          }
          columnComponent
          component
          slug
          gridSubtitle: subtitle
          theme
          gridTitle: title
          width
        }
        ... on LogoCloud {
          id
          companies {
            id
            logo {
              id
              height
              url
              width
            }
            name
          }
          logoCloudTitle: title
        }
      }
      footer {
        id
        pages {
          id
          slug
        }
        slug
        title
      }
      hero {
        id
        buttons {
          id
          href
          label
          style
        }
        image {
          id
          height
          title
          url
          width
        }
        slug
      }
      id
      marketing {
        __typename
        ... on Banner {
          id
          content
          href
          slug
          theme
        }
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          slug
        }
      }
      subtitle
      title
    }
  }
`

export { blogPageQuery, blogPostQuery, pageQuery }
