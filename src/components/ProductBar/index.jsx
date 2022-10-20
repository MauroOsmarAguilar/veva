import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function ProductBar() {
    return (
        <>
            <ProductBarContainer>
                <div className='container__list'>
                    <Link className='container__list__item' to="category/remera" data-text="REMERAS">REMERAS</Link>
                </div>
                <div className='container__list'>
                    <Link className='container__list__item' to="category/buzo" data-text="BUZOS">BUZOS</Link>
                </div>
                <div className='container__list'>
                    <Link className='container__list__item' to="category/totebag" data-text="TOTEBAGS">TOTEBAGS</Link>
                </div>
                <div className='container__list'>
                    <Link className='container__list__item' to="category/medias" data-text="MEDIAS">MEDIAS</Link>
                </div>
            </ProductBarContainer>
        </>
  )
}

export default ProductBar

const ProductBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    background-color: #151515;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    border-color: #3A3B3Caf;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 5px;    
    
    .container__list{
        position: relative;
        display: inline-block;
        padding: 0px 10px 0px 10px;
        cursor: pointer;
    }

    .container__list::before{
        content: "";
        width: 0%;
        height: 100%;
        position: absolute;
        background: #f2f2f2;
        right: 0;
        top: 0;
        transition: 0.3s;
    }

    .container__list:hover .container__list__item::before,.container__list:hover::before{
        width: 100%;
    }

    .container__list__item{
        text-transform: uppercase;
        text-decoration: none;   
        position: relative;
        color: #f2f2f2;
    }
    
    .container__list__item::before{
        content: attr(data-text);
        position: absolute;
        color: #151515;
        width: 0;
        overflow: hidden;
        transition: 0.3s;
    }
}
@media(max-width: 500px){
    display: flex;
    font-size: .6rem;
}
@media(max-width: 375px){
    display: flex;
    font-size: .5rem;
}

`



