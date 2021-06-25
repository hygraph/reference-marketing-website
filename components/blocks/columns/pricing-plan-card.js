import { Box, Heading, Text, Link, Stack } from '@chakra-ui/react'

import { CheckIcon } from '@/icons'

export default function PricingPlanCard({
  annualPrice,
  billingPeriod,
  description,
  included,
  monthlyPrice,
  name
}) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Box p={6} borderBottom="1px solid" borderColor="gray.200">
        <Heading
          as="h2"
          fontSize="lg"
          lineHeight="6"
          fontWeight="medium"
          color="gray.900"
        >
          {name}
        </Heading>
        <Text mt={4} fontSize="sm" lineHeight="5" color="gray.500">
          {description}
        </Text>
        <Text mt={8}>
          <Text
            as="span"
            fontWeight="extrabold"
            fontSize="4xl"
            lineHeight="shorter"
            color="gray.900"
          >
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format(billingPeriod === 'monthly' ? monthlyPrice : annualPrice)}
          </Text>
          <Text as="span" fontSize="md" fontWeight="medium" color="gray.500">
            {billingPeriod === 'monthly' ? '/mo' : '/yr'}
          </Text>
        </Text>
        <Link
          href="#"
          mt={8}
          display="block"
          w="full"
          bg="indigo.600"
          border="1px solid transparent"
          borderRadius="md"
          py={2}
          fontSize="sm"
          fontWeight="semibold"
          color="white"
          textAlign="center"
          _hover={{
            bg: 'indigo.700'
          }}
        >
          Buy {name}
        </Link>
      </Box>
      <Box pt={6} pb={8} px={6}>
        <Heading
          as="h3"
          fontSize="xs"
          fontWeight="medium"
          color="gray.900"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          What&apos;s included
        </Heading>
        <Stack as="ul" mt={6} spacing={4}>
          {included.map((feature, index) => (
            <Stack
              as="li"
              key={index}
              display="flex"
              spacing={3}
              direction="row"
            >
              <Box
                as={CheckIcon}
                flexShrink="0"
                w={5}
                h={5}
                color="green.500"
                aria-hidden="true"
              />
              <Text as="span" fontSize="sm" color="gray.500">
                {feature}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
