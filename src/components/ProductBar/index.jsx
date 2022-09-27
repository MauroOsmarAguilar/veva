import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ProductBar() {
    return (
        <>
            <ProductBarContainer>
                <Link to="category/remera">REMERAS</Link>
                <Link to="category/buzo">BUZOS</Link>
                <Link to="category/totebag">TOTEBAGS</Link>
            </ProductBarContainer>
        </>
  )
}

export default ProductBar

const ProductBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5px;
    background-color: #151515;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    border-color: #3A3B3Caf;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 5px;
    

    a{
        text-decoration: none;
        color: #F2F2F2;
    }

`



