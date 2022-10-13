import React from 'react'
import Navbar from './components/NavBar'
import ProductBar from './components/ProductBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <ProductBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Somos Veva" />} />
          <Route path="/category/:category" element={<ItemListContainer />}/>
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App