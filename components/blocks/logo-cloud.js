import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

export default function LogoCloud({ companies, logoCloudTitle }) {
  if (!(logoCloudTitle || companies || companies.length)) return null

  return (
    <Box bg="indigo.700">
      <Box maxW="7xl" mx="auto" py={[16, 20]} px={[4, 6, null, 8]}>
        <Heading as="h2" fontSize="3xl" fontWeight="extrabold" color="white">
          {logoCloudTitle}
        </Heading>

        <Box display="flow-root" mt={{ base: 8, lg: 10 }}>
          <Flex
            mt={-4}
            ml={{ base: -8, lg: -4 }}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {companies.map((company) => (
              <Flex
                key={company.id}
                mt={4}
                ml={{ base: 8, lg: 4 }}
                flexGrow={{ base: 1, lg: 0 }}
                flexShrink="0"
              >
                <Box pos="relative" w={44}>
                  <Image
                    src={company.logo.url}
                    height={company.logo.height}
                    width={company.logo.width}
                    layout="responsive"
                    alt={company.logo.title}
                  />
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
