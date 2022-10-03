import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ProductBar() {
    return (
        <>
            <ProductBarContainer>
                <Link className='ProductBar__list' to="category/remera">REMERAS</Link>
                <Link className='ProductBar__list' to="category/buzo">BUZOS</Link>
                <Link className='ProductBar__list' to="category/totebag">TOTEBAGS</Link>
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
    

    .ProductBar__list{
        text-decoration: none;
        color: #F2F2F2;
    }

`



