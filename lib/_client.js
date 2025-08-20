import { GraphQLClient } from 'graphql-request'

// Helper function to delay execution
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Retry function with exponential backoff
const retryWithBackoff = async (fn, maxRetries = 3, baseDelay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (error.response?.status === 429 && i < maxRetries - 1) {
        // Rate limited - wait with exponential backoff
        const waitTime = baseDelay * Math.pow(2, i)
        console.log(`Rate limited, retrying in ${waitTime}ms...`)
        await delay(waitTime)
        continue
      }
      throw error
    }
  }
}

const hygraphClient = (preview = false) => {
  const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
    headers: {
      ...(process.env.HYGRAPH_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.HYGRAPH_PREVIEW_TOKEN
            : process.env.HYGRAPH_TOKEN
        }`
      })
    }
  })

  // Wrap the request method with retry logic
  const originalRequest = client.request.bind(client)
  client.request = async (query, variables) => {
    return retryWithBackoff(() => originalRequest(query, variables))
  }

  return client
}

export { hygraphClient }
