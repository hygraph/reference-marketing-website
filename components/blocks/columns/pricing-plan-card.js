function PricingPlanCard({ description, included, monthlyPrice, name }) {
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
            }).format(monthlyPrice)}
          </span>
          <span className="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-purple-700"
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
              <svg
                className="flex-shrink-0 h-5 w-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-500">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PricingPlanCard
