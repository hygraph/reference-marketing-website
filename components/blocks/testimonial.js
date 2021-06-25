import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

import { DotsSVG } from '@/svgs'
import { SlashIcon } from '@/icons'

export default function Testimonial({ content, person }) {
  if (!person) return null

  return (
    <Box as="section" py={[12, null, 20, 24]} bg="gray.50" overflow="hidden">
      <Box pos="relative" maxW="7xl" mx="auto" px={[4, 6, null, 8]}>
        <Box
          as={DotsSVG}
          pos="absolute"
          top="100%"
          right="100%"
          color="gray.200"
          transform={{
            base: 'translate(33.33%, -25%)',
            lg: 'translate(50%, -25%)',
            xl: 'translate(50%, -50%)'
          }}
        />
        <Box pos="relative">
          <Box h={8} pos="relative">
            <Image
              src={person.company.logo.url}
              alt={person.company.logo.title}
              layout="fill"
            />
          </Box>
          <Box as="blockquote" mt={10}>
            <Box
              maxW="3xl"
              mx="auto"
              textAlign="center"
              fontSize="2xl"
              lineHeight="9"
              fontWeight="medium"
              color="gray.900"
            >
              <MDXRemote {...content.mdx} />
            </Box>
            <Box as="footer" mt={8}>
              <Box
                display={{ md: 'flex' }}
                alignItems={{ md: 'center' }}
                justifyContent={{ md: 'center' }}
              >
                <Box flexShrink={{ md: 0 }}>
                  <Box mx="auto" h={10} w={10} position="relative">
                    <Image
                      className="avatar"
                      alt={`${person.name} photo`}
                      src={person.photo.url}
                      layout="fill"
                    />
                  </Box>
                </Box>
                <Box
                  mt={[3, null, 0]}
                  ml={{ md: 4 }}
                  textAlign="center"
                  display={{ md: 'flex' }}
                  alignItems={{ md: 'center' }}
                >
                  <Box fontWeight="medium" color="gray.900">
                    {person.name}
                  </Box>

                  {person.role && (
                    <>
                      <Box
                        as={SlashIcon}
                        display={['none', null, 'block']}
                        mx={1}
                        h={5}
                        w={5}
                        color="indigo.600"
                      />
                      <Box fontWeight="medium" color="gray.500">
                        {person.role}, {person.company.name}
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
