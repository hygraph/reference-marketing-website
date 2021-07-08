import { GraphQLClient } from 'graphql-request'

const graphcmsClient = (preview = false) =>
  new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
    headers: {
      ...(process.env.GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.GRAPHCMS_PREVIEW_TOKEN
            : process.env.GRAPHCMS_TOKEN
        }`
      })
    }
  })

export { graphcmsClient }
