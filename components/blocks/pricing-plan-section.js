import * as React from 'react'
import cx from 'classnames'

import Grid from './grid'
import { PricingPlanCard } from './columns'

function PricingPlanSection({ page, ...grid }) {
  const [billingPeriod, setBillingPeriod] = React.useState('annual')

  return (
    <React.Fragment>
      <div className="px-4 sm:px-6 sm:flex sm:flex-col sm:align-center lg:px-8">
        <div className="relative mt-6 bg-gray-100 rounded-lg p-0.5 flex self-center space-x-2 sm:mt-8">
          <button
            type="button"
            className={cx(
              'relative border rounded-md py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8',
              billingPeriod === 'monthly'
                ? 'bg-white border-gray-200 shadow-sm'
                : 'border-transparent'
            )}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly billing
          </button>
          <button
            type="button"
            className={cx(
              'relative border rounded-md py-2 w-1/2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8',
              billingPeriod === 'annual'
                ? 'bg-white border-gray-200 shadow-sm'
                : 'border-transparent'
            )}
            onClick={() => setBillingPeriod('annual')}
          >
            Annual billing
          </button>
        </div>
      </div>
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
    </React.Fragment>
  )
}

export default PricingPlanSection
