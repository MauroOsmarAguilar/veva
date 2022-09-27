import React from 'react'
import styled from 'styled-components'
import { ItemCount } from '../ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return(
        <ProductContainer>
            <div className='product'>
                <div className='product__container'>
                    <img src={product.image} alt={product.name}/>
                    <div className='product__container__title'>
                        <h4>{product.category}</h4>
                        <h2>{product.name}</h2>
                    </div>
                    <h3>${product.price}.-</h3>
                    <Link to={`../product/${product.id}`}>Ver detalle</Link>
                    <ItemCount initial={1} stock={product.stock} onAdd={() => {}}/>
                </div>
            </div>
        </ProductContainer>
    )
}

export { Item } 

const ProductContainer = styled.div`
    .product{
        display: flex;
        justify-content: center;
        color: #f2f2f2;
        font-family: 'Montserrat';

        .product__container{
            width: 300px;
            margin: 20px;
            padding: 0 0 20px 0;
            border: 1px solid none;
            border-radius: 5px;
            background-color: #151515;
            color: #f2f2f2;
            text-align: center;
            -webkit-box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.5); 
                    box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.5);

            img{
                width: 300px;
                border-radius: 5px 5px 0 0;
            }

            img:hover{
                cursor: pointer;
            }
            
            .product__container__title{
                border: 1px solid;
                margin-top: -55px;
                text-shadow: -1px 1px 5px rgba(0,0,0,1);
                
                h2{
                    margin: 0;
                }
    
                h4{
                    margin: 0;
                    font-size: 14px;
                    font-weight: lighter;
                }
            }
            
            h3{
                font-size: 16px;
            }
        }
    }
`