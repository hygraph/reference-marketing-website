import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

function NavigationLink({ slug }) {
  const router = useRouter()

  const isActive = router.asPath.startsWith(`/${slug}`)
  const isStaticPage = ['blog', 'home'].includes(slug)

  return (
    <Link
      href={isStaticPage ? `/${slug}` : `/[slug]`}
      as={isStaticPage ? null : `/${slug}`}
    >
      <a
        className={cx('font-medium', {
          'text-red-300': isActive,
        })}
      >
        {slug}
      </a>
    </Link>
  )
}

export default NavigationLink
