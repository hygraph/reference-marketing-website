import { GraphQLClient } from 'graphql-request'

const graphcmsClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
})

export { graphcmsClient }
