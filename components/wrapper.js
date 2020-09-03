import Banner from '../components/banner'
import * as Blocks from '../components/blocks'
import Navigation from './navigation'

function Wrapper({ banner, blocks, navigation, ...page }) {
  return (
    <React.Fragment>
      {banner && <Banner {...banner} />}
      {navigation?.pages && navigation.pages.length && (
        <Navigation {...navigation} />
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
