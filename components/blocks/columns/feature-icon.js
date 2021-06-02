import { Flex, Box } from '@chakra-ui/react'
import hydrate from 'next-mdx-remote/hydrate'
import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'

import * as Icons from '@/icons'

function FeatureIcon({ content, icon, title }) {
  const mdxContent = hydrate(content.mdx)

  const IconComponent =
    Icons[`${startCase(camelCase(icon))}Icon`] || Icons.DefaultIcon

  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="center"
        h={12}
        w={12}
        borderRadius="md"
        bg="indigo.500"
        color="white"
      >
        <Box as={IconComponent} w={6} h={6} aria-hidden="true" />
      </Flex>
      <Box mt={5}>
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
    </div>
  )
}

export default FeatureIcon
