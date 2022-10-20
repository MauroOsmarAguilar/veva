import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa"
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return(
        <>
            <CartWidgetContainer>
                <p>{totalQuantity()}</p>
                <FaShoppingCart />   
            </CartWidgetContainer>
        </>
    )
}

export { CartWidget }

const CartWidgetContainer = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    color: #f2f2f2;

        p{
            margin-right: 5px;
            text-decoration: none;
        }
`