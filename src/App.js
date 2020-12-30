import React from 'react'
import Items from './components/Items'

const App = () => {
  const items = [
    'List 1',
    'List 2',
    'List 3',
    'List 4'
  ]

  return(
    <Items items={items} />
  )
}

export default App