import { Box, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

const linkDefaultStyles = {
  width: 'full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: [8, null, 10],
  py: [3, null, 4],
  fontSize: ['base', null, 'lg'],
  fontWeight: 'medium',
  borderRadius: 'md'
}

export default function Button({ href, label, theme }) {
  if (!href || !label) return null

  if (href.includes('http')) {
    return (
      <Box borderRadius="md" boxShadow="md">
        <ChakraLink
          isExternal
          href={href}
          {...linkDefaultStyles}
          variant={theme}
        >
          {label}
        </ChakraLink>
      </Box>
    )
  }

  return (
    <Box borderRadius="md" boxShadow="md">
      <Link href={href} passHref>
        <ChakraLink {...linkDefaultStyles} variant={theme}>
          {label}
        </ChakraLink>
      </Link>
    </Box>
  )
}
