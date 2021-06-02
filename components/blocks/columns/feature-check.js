import { Flex, Box } from '@chakra-ui/react'
import hydrate from 'next-mdx-remote/hydrate'

import { CheckIcon } from '@/icons'

function FeatureCheck({ content, title }) {
  const mdxContent = hydrate(content.mdx)

  return (
    <Flex>
      <Box
        as={CheckIcon}
        flexShrink="0"
        w={6}
        h={6}
        color="green.500"
        aria-hidden="true"
      />
      <Box ml={3}>
        <Box
          as="dt"
          fontSize="lg"
          lineHeight="6"
          fontWeight="medium"
          color="gray.900"
        >
          {title}
        </Box>
        <Box as="dd" mt={2}>
          {mdxContent}
        </Box>
      </Box>
    </Flex>
  )
}
export default FeatureCheck
