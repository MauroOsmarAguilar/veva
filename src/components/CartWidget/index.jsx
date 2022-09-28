import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link to="/cart">
            <FaShoppingCart />
        </Link>
    )
}

export { CartWidget }