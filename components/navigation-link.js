import Link from 'next/link'

function NavigationLink({ slug }) {
  const isStaticPage = ['blog', 'home'].includes(slug)

  return isStaticPage ? (
    <Link href={`/${slug}`}>
      <a>{slug}</a>
    </Link>
  ) : (
    <Link href="/[slug]" as={`/${slug}`}>
      <a>{slug}</a>
    </Link>
  )
}

export default NavigationLink
