import * as React from 'react'

import * as Blocks from '../components/blocks'

function Wrapper({ banner, blocks, hero, navigation, ...page }) {
  return (
    <React.Fragment>
      {blocks.map((block, index) => {
        const Component = Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} {...block} {...page} />
      })}
    </React.Fragment>
  )
}

export default Wrapper
