import React from 'react'
import Navbar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Somos Veva" />
    </div>
  )
}

export default App