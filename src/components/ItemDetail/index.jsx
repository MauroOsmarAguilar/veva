import React from 'react'
import styled from 'styled-components'
import { ItemCount } from '../ItemCount'

const ItemDetail = ({ listProduct }) => {

    return(
        <>
            <ProductDetailContainer>
                <div className='product__detail'>
                    <div className='product__detail__container'>
                        <img src={listProduct.image} alt={listProduct.name}/>
                        <div className='product__detail__container__info'>
                            <h1>{listProduct.name}</h1>
                            <h2>{listProduct.category}</h2>
                            <p>{listProduct.detail}</p>
                            <h3>Precio: ${listProduct.price}.- </h3>
                            <ItemCount initial={1} stock={listProduct.stock} onAdd={() => {}}/>
                            <div className='product__detail__container__info__i'>
                                <p>Los tiempos previstos de producción pueden ser entre 2 a 5 días hábiles. Si la prenda ya está en stock, se coordina el envío y entrega al día siguiente o cuando lo prefieras.</p>                            </div>
                        </div>
                    </div>
                </div>
            </ProductDetailContainer>
        </>
    )
}

export { ItemDetail }

const ProductDetailContainer = styled.div`
    .product__detail{
        display: flex;
        justify-content: center;
        alig-items: center;
        align-self: center;
        max-width: 728px;

        .product__detail__container{
            display: flex;
            justify-content: center;
            color: #f2f2f2;
            font-family: 'Montserrat';

            img{
                margin: 10px;
                max-width: 250px;
                border-radius: 5px;
            }
        }    

        .product__detail__container__info{
            color: #f2f2f2;

            h1{
                margin: 0px;
                font-size: 48px;
            }

            h2{
                font-weight: lighter;
                margin: 0px;
                font-size: 28px;
            }

            h3{
                border: 1px solid #f2f2f2af;
                border-radius: 5px;
                padding: 10px;
            }
        }

        .product__detail__container__info__i{
            background-color: #f2f2f2af;
            color: #151515;
            font-size: 12px;
            margin: 5px;
            padding: 10px;
            border-radius: 5px;
        }
    }
`