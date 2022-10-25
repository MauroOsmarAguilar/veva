import { createContext, useState, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {

    // Estado de carrito
    const [cartList, setCartList] = useState([])

    // Agrega al carrito
    const isInCart = (id) => cartList.find(prod => prod.id === id)

    // Agrega al carrito y mide cantidad
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === item.id) {
                    const newQuantity = prod.quantity + quantity
                    return {...prod, quantity: newQuantity}
                } else {
                    return prod
                }
            })
            setCartList(newCart)
        } else {
            const newProduct = {...item, quantity: quantity}
            setCartList([...cartList, newProduct])
        }
    }

    // Borra del carrito
    const removeProduct = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    // Limpia carrito
    const cleanCart = () => setCartList([])

    // Calcula precio total
    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }

    // Calcula cantidad de productos
    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity,
            cartList
        }}>
            {children}
        </CartContext.Provider>
    )
}