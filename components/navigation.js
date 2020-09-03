import NavigationLink from './navigation-link'
import Link from 'next/link'

function Navigation({ pages }) {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {pages.map((page, index) => {
        return (
          <li key={index}>
            <NavigationLink {...page} />
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
