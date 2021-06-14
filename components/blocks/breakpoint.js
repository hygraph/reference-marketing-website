import { Box, Heading, Stack, Text } from '@chakra-ui/react'

import Button from '@/components/button'

export default function Breakpoint({ buttons, subtitle, title }) {
  if (!(buttons || buttons.length)) return null

  return (
    <Box bg="white">
      <Box maxW="7xl" mx="auto" py={[12, null, 16, 20]} px={[4, 6, null, 8]}>
        <Heading
          as="h2"
          fontSize={['3xl', '4xl']}
          fontWeight="extrabold"
          letterSpacing="tight"
          color="gray.900"
        >
          <Text as="span" display="block">
            {title}
          </Text>
          <Text as="span" display="block" color="indigo.600">
            {subtitle}
          </Text>
        </Heading>
        <Stack display="flex" direction="row" mt={8} spacing={3}>
          {buttons.map((button) => (
            <Box
              key={button.id}
              display="inline-flex"
              borderRadius="md"
              boxShadow="md"
            >
              <Button {...button} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
