import React from 'react'
import Navbar from './components/Navbar'
import ProductBar from './components/ProductBar'
import Footer from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

const App = () => {
  return (
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <ProductBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />}/>
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
  )
}

export default App