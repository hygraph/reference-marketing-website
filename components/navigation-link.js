import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

function NavigationLink({ slug }) {
  const router = useRouter()

  const isActive = router.asPath.startsWith(`/${slug}`)
  const isStaticPage = ['blog', 'home'].includes(slug)
  const linkLabel = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <Link
      href={isStaticPage ? `/${slug}` : `/[slug]`}
      as={isStaticPage ? null : `/${slug}`}
    >
      <a
        className={cx(
          'font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out',
          {
            'text-blue-600': isActive,
          }
        )}
      >
        {linkLabel}
      </a>
    </Link>
  )
}

export default NavigationLink
