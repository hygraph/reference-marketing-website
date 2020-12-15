import * as React from 'react'

import * as Blocks from '../components/blocks'

function Wrapper({ banner, blocks, hero, navigation, ...page }) {
  return (
    <React.Fragment>
      {blocks.map((block, index) => {
        const Component = Blocks[block.component] || Blocks[block.__typename]

        if (!Component) return null

        return <Component key={index} page={page} {...block} />
      })}
    </React.Fragment>
  )
}

export default Wrapper
