import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return(
        <>
            <FaShoppingCart />
            <p>{totalQuantity()}</p>
        </>
    )
}

export { CartWidget }