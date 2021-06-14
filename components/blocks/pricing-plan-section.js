import { useState } from 'react'
import { Button, Box, Stack } from '@chakra-ui/react'

import { Grid } from '@/blocks'
import { PricingPlanCard } from '@/columns'

function PricingButton({ isActive, children, ...rest }) {
  return (
    <Button
      type="button"
      pos="relative"
      border="1px solid"
      borderRadius="md"
      py={2}
      w={['50%', 'auto']}
      fontSize="sm"
      fontWeight="medium"
      color="gray.700"
      whiteSpace="nowrap"
      px={{ sm: 8 }}
      bg={isActive && 'white'}
      shadow={isActive && 'sm'}
      borderColor={isActive ? 'gray.200' : 'transparent'}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default function PricingPlanSection({ page, ...grid }) {
  const [billingPeriod, setBillingPeriod] = useState('annual')

  return (
    <>
      <Box
        px={[4, 6, null, 8]}
        display={{ sm: 'flex' }}
        flexDirection={{ sm: 'column' }}
        alignItems={{ sm: 'center' }}
      >
        <Stack
          direction="row"
          spacing={2}
          display="flex"
          position="relative"
          mt={[6, 8]}
          bg="gray.100"
          borderRadius="lg"
          p="2px"
          alignSelf="center"
        >
          <PricingButton
            isActive={billingPeriod === 'monthly'}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly billing
          </PricingButton>
          <PricingButton
            isActive={billingPeriod === 'annual'}
            onClick={() => setBillingPeriod('annual')}
          >
            Annual billing
          </PricingButton>
        </Stack>
      </Box>
      <Grid {...grid}>
        {() =>
          grid.columns.map((column) => (
            <PricingPlanCard
              key={column.id}
              {...{ ...column, billingPeriod }}
            />
          ))
        }
      </Grid>
    </>
  )
}
