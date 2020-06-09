import * as Columns from './columns'

function Grid({ columns }) {
  if (!columns || !columns.length) return null

  return (
    <div className="grid">
      {columns.map((column, index) => {
        const Component = Columns[column.__typename]

        if (!Component) return null

        return <Component key={index} {...column} />
      })}
    </div>
  )
}

export default Grid
