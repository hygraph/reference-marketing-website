import Banner from '../components/banner'
import * as Blocks from '../components/blocks'

function Wrapper({ banner, blocks, ...page }) {
  return (
    <React.Fragment>
      {banner && <Banner {...banner} />}
      {blocks.map((block, index) => {
        const Component = Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} {...block} {...page} />
      })}
    </React.Fragment>
  )
}

export default Wrapper
