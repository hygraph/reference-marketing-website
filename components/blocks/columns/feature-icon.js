import hydrate from 'next-mdx-remote/hydrate'
import camelCase from 'lodash.camelcase'
import startCase from 'lodash.startcase'

import * as Icons from '../../icons'

function FeatureIcon({ content, icon, title }) {
  const mdxContent = hydrate(content.mdx)

  const IconComponent =
    Icons[`${startCase(camelCase(icon))}Icon`] || Icons.DefaultIcon

  return (
    <div>
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <IconComponent className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="mt-5">
        <dt className="text-lg leading-6 font-medium text-gray-900">{title}</dt>
        <dd className="mt-2 prose">{mdxContent}</dd>
      </div>
    </div>
  )
}

export default FeatureIcon
