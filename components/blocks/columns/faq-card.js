import * as React from 'react'
import { Box } from '@chakra-ui/react'
import hydrate from 'next-mdx-remote/hydrate'

function FAQCard({ content, title }) {
  const mdxContent = hydrate(content.mdx)

  return (
    <div>
      <Box
        as="dt"
        fontSize="lg"
        lineHeight="6"
        fontWeight="medium"
        color="gray.900"
      >
        {title}
      </Box>
      <Box as="dd" mt={2} className="prose">
        {mdxContent}
      </Box>
    </div>
  )
}

export default FAQCard
