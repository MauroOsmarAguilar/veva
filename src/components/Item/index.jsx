import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return(
        <ProductContainer >
                <div className='product__container' >
                    <Link to={`../product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <img src={product.image} alt={product.name}/>
                        <div className='product__container__title'>
                            <h4>{product.category}</h4>
                            <h2>{product.name}</h2>
                        </div>
                    </Link> 
                    <h3>${product.price}.-</h3>
                    <Link to={`../product/${product.id}`} className="product__container__button">
                        <h3 className='effect-underline'>VER MAS</h3>
                    </Link>
                </div>
        </ProductContainer>
    )
}

export { Item } 

const ProductContainer = styled.div`
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
                margin-top: -55px;
                text-shadow: -1px 1px 5px rgba(0,0,0,1);
                color: #f2f2f2;
                text-decoration: none;
                
                h2{
                    margin: 0;
                }
    
                h4{
                    margin: 0;
                    font-size: 14px;
                    font-weight: lighter;
                }
            }

            .product__container__button{
                display: inline-block;
                position: relative;
                margin: -10px;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
            
                h3{
                    color: #F2F2F2;
                    display: inline-block;
                    position: relative;
                    letter-spacing: 2px;
                    border: none;
                    font-size: 14px;
                    height: 0.5em;
                }

                h3.effect-underline:after{
                    content: '';
                    position: absolute;
                    left: 0;
                    display: inline-block;
                    height: 0.5em;
                    width: 100%;
                    border-bottom: 1px solid;
                    margin-top: 10px;
                    opacity: 0;
                    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                    transition: opacity 0.35s, transform 0.35s;
                    -webkit-transform: scale(0,1);
                    transform: scale(0,1);
                }
                  
                h3.effect-underline:hover:after {
                    opacity: 1;
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
            }
            
            h3{
                letter-spacing: 1px;
                font-size: 16px;
            }
        }
    
`