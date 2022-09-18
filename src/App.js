import React from 'react'
import Navbar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'

const App = () => {
  return (
    <div>
        <Navbar />
        <ItemDetailContainer />
        {/* <ItemListContainer greeting="Somos Veva" /> */}
    </div>
  )
}

export default App