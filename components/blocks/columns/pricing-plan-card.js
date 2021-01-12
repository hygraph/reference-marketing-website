import { CheckIcon } from '@/icons'

function PricingPlanCard({
  annualPrice,
  billingPeriod,
  description,
  included,
  monthlyPrice,
  name
}) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
      <div className="p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">{name}</h2>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-extrabold text-gray-900">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format(billingPeriod === 'monthly' ? monthlyPrice : annualPrice)}
          </span>
          <span className="text-base font-medium text-gray-500">
            {billingPeriod === 'monthly' ? '/mo' : '/yr'}
          </span>
        </p>
        <a
          href="#"
          className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-700"
        >
          Buy {name}
        </a>
      </div>
      <div className="pt-6 pb-8 px-6">
        <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
          What's included
        </h3>
        <ul className="mt-6 space-y-4">
          {included.map((feature, index) => (
            <li key={index} className="flex space-x-3">
              <CheckIcon
                className="flex-shrink-0 h-5 w-5 text-green-500"
                aria-hidden="true"
              />
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PricingPlanCard
