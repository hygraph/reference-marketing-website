import Image from 'next/image'
import { Box, HStack, Text } from '@chakra-ui/react'

import { AvatarIcon } from '@/components/icons'

export default function PersonCard({ name, photo, role }) {
  return (
    <li>
      <HStack display="flex" alignItems="center" spacing={{ base: 4, lg: 6 }}>
        <Box
          bg="gray.100"
          w={{ base: 16, lg: 20 }}
          h={{ base: 16, lg: 20 }}
          overflow="hidden"
          position="relative"
          borderRadius="full"
        >
          {photo ? (
            <Image
              className="avatar"
              src={photo.url}
              alt={name}
              title={name}
              layout="fill"
            />
          ) : (
            <Box as={AvatarIcon} h="full" w="full" color="gray.300" />
          )}
        </Box>
        <Box fontWeight="medium" fontSize="lg" lineHeight="6">
          <h3>{name}</h3>

          {role && (
            <Text color="indigo.600" mt={1}>
              {role}
            </Text>
          )}
        </Box>
      </HStack>
    </li>
  )
}
