import hydrate from 'next-mdx-remote/hydrate'

import { CheckIcon } from '@/icons'

function FeatureCheck({ content, title }) {
  const mdxContent = hydrate(content.mdx)

  return (
    <div className="flex">
      <CheckIcon
        className="flex-shrink-0 h-6 w-6 text-green-500"
        aria-hidden="true"
      />
      <div className="ml-3">
        <dt className="text-lg leading-6 font-medium text-gray-900">{title}</dt>
        <dd className="mt-2 prose">{mdxContent}</dd>
      </div>
    </div>
  )
}
export default FeatureCheck
