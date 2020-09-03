const blogPageQuery = `
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
    content {
      markdown
    }
    coverImage {
      id
      title
      url
    }
    excerpt
    published
    slug
    title
  }

  query BlogPageQuery {
    page(where: {slug: "blog"}) {
      id
      subtitle {
        markdown
      }
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

const blogPostQuery = `
  query BlogPostQuery($slug: String!) {
    post: blogPost(where: {slug: $slug}) {
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
      content {
        markdown
      }
      coverImage {
        id
        title
        url
      }
      excerpt
      published
      slug
      title
    }
    allPosts: blogPosts(orderBy: published_ASC) {
      id
      slug
      title
    }
  }
`

const pageQuery = `
  query PageQuery($slug: String!) {
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
                id
                name
                photo {
                  id
                  title
                  url
                }
              }
              content {
                markdown
              }
              coverImage {
                id
                title
                url
              }
              excerpt
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
          component
          slug
          gridSubtitle: subtitle {
            markdown
          }
          theme
          gridTitle: title
          width
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
      navigation {
        id
        slug
        pages {
          id
          slug
        }
      }
      subtitle {
        markdown
      }
      title
    }
  }
`

export { blogPageQuery, blogPostQuery, pageQuery }
