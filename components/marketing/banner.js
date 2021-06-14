import { Box, Flex, Text } from '@chakra-ui/react'

import Button from '@/components/button'

const themeColor = {
  WARNING: 'orange.600'
}

export default function Banner({ content, href, theme = 'WARNING' }) {
  if (!content || !href) return null

  return (
    <Box
      bg={themeColor[theme] || 'indigo.600'}
      color={themeColor[theme] || 'indigo.600'}
    >
      <Box maxW={1280} mx="auto" py={3} px={[3, 6, null, 8]}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Flex flex="1 1 0" alignItems="center">
            <Text fontWeight="medium" color="white">
              {content}
            </Text>
          </Flex>
          <Box w={['full', 'auto']} order={[3, 2]} mt={[2, 0]} flexShrink="0">
            <Box borderRadius="md" boxShadow="sm">
              <Button
                href={href}
                label="Learn more"
                size="SMALL"
                theme="WHITE"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
