import Link from 'next/link'

import Banner from '../components/banner'
import * as Blocks from '../components/blocks'

function Wrapper({ banner, blocks, navigation, ...page }) {
  return (
    <React.Fragment>
      {banner && <Banner {...banner} />}
      {navigation.pages.length && (
        <ul>
          {navigation.pages.map((page) => {
            const linkHref = page.slug === 'home' ? '/' : page.slug

            return (
              <li key={page.id}>
                <Link href={linkHref}>
                  <a>{page.slug}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      {blocks.map((block, index) => {
        const Component = Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} {...block} {...page} />
      })}
    </React.Fragment>
  )
}

export default Wrapper
