import React from 'react'

const Items = (props) => {
  const { items = [] } = props

  if (items.length === 1) {
    return <span>{items[0]}</span>
  }

  if (items.length > 1) {
    return (
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
  }

  return <span>No items in list</span>
}

export default Items