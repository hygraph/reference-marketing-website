import Banner from '../components/banner'
import * as Blocks from '../components/blocks'
import Hero from './hero'

function Wrapper({ banner, blocks, hero, navigation, ...page }) {
  return (
    <React.Fragment>
      {banner && <Banner {...banner} />}
      {hero && <Hero {...hero} navigation={navigation} page={page} />}
      {blocks.map((block, index) => {
        const Component = Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} {...block} {...page} />
      })}
    </React.Fragment>
  )
}

export default Wrapper
