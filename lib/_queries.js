import { gql } from 'graphql-request'

const blogPageQuery = gql`
  fragment BlogPostFields on BlogPost {
    id
    authors {
      id
      name
      photo {
        id
        url
      }
      role
    }
    category
    content
    coverImage {
      id
      height
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
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
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
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
    }
    posts: blogPosts(orderBy: published_DESC) {
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
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
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
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
    }
    post: blogPost(where: { slug: $slug }) {
      id
      authors {
        id
        name
        photo {
          id
          url
        }
        role
      }
      category
      content
      coverImage {
        id
        height
        url
        width
      }
      excerpt
      published
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
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
            theme
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
                  url
                }
                role
              }
              category
              content
              coverImage {
                id
                height
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
              icon
              image {
                id
                height
                url
                width
              }
              slug
              title
            }
            ... on Person {
              id
              name
              photo {
                id
                height
                url
                width
              }
              role
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
          gridHeadline: headline
          layout
          slug
          gridSubtitle: subtitle
          gridTag: tag
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
        ... on Testimonial {
          id
          content
          person {
            id
            name
            company {
              id
              logo {
                id
                height
                url
                width
              }
              name
            }
            photo {
              id
              height
              url
              width
            }
            role
          }
        }
      }
      footer {
        id
        primaryLinks {
          id
          navigationLabel
          slug
        }
        secondaryLinks {
          id
          navigationLabel
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
          theme
        }
        image {
          id
          height
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
        ... on Newsletter {
          id
          ctaLabel
          subtitle
          title
        }
      }
      navigation {
        id
        slug
        pages(where: { slug_not: "home" }) {
          id
          navigationLabel
          slug
        }
      }
      seo {
        id
        description
        image {
          id
          height
          url
          width
        }
        keywords
        noIndex
        title
      }
      subtitle
      title
    }
  }
`

export { blogPageQuery, blogPostQuery, pageQuery }
