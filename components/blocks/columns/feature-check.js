import hydrate from 'next-mdx-remote/hydrate'

import { CheckIcon } from '../../icons'

function FeatureCheck({ content, title }) {
  const mdxContent = hydrate(content.mdx)

  return (
    <div className="flex space-x-3">
      <CheckIcon
        className="flex-shrink-0 h-6 w-6 text-green-500"
        aria-hidden="true"
      />
      <div className="space-y-2">
        <h4 className="text-lg leading-6 font-medium text-gray-900">{title}</h4>
        <div className="flex space-x-3 lg:py-0 lg:pb-4">
          <span className="prose">{mdxContent}</span>
        </div>
      </div>
    </div>
  )
}
export default FeatureCheck
