import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

function NavigationLink({ slug }) {
  const router = useRouter()

  const isActive = router.asPath.startsWith(`/${slug}`)
  const isStaticPage = ['blog', 'home'].includes(slug)

  return isStaticPage ? (
    <Link href={`/${slug}`}>
      <a
        className={cx('font-medium', {
          'text-red-300': isActive,
        })}
      >
        {slug}
      </a>
    </Link>
  ) : (
    <Link href="/[slug]" as={`/${slug}`}>
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
