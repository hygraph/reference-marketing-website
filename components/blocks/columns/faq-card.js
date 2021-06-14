import { Box } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

export default function FAQCard({ content, title }) {
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
        <MDXRemote {...content.mdx} />
      </Box>
    </div>
  )
}
