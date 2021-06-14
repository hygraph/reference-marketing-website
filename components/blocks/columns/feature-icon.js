import { Flex, Box } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'

import * as Icons from '@/icons'

export default function FeatureIcon({ content, icon, title }) {
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
        <Box as="dd" mt={2} className="prose">
          <MDXRemote {...content.mdx} />
        </Box>
      </Box>
    </div>
  )
}
