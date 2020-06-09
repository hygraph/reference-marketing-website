import Link from 'next/link'

function Button({ href, label }) {
  return (
    <Link href={href || '/'}>
      <a>{label}</a>
    </Link>
  )
}

export default Button
