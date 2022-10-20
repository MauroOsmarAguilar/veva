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
                    <h5>${product.price}.-</h5>
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
            margin: 25px;
            padding: 0 0 20px 0;
            border: 1px solid none;
            border-radius: 10px;
            background-color: #151515af;
            color: #f2f2f2;
            text-align: center;
            -webkit-box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.5); 
                    box-shadow: 0px 0px 25px 10px rgba(0,0,0,0.5);

            img{
                width: 298px;
                border-radius: 0px;
                border: 1px solid #353535;
                border-bottom: none;
                border-radius: 5px 5px 0px 0px;
            }

            img:hover{
                cursor: pointer;
            }
            
            .product__container__title{
                margin-top: -55px;
                text-shadow: -1px 1px 5px rgba(0,0,0,1);
                color: #f2f2f2;
                text-decoration: none;
                -webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	                    animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

                @-webkit-keyframes slide-top {
                    0% {
                    -webkit-transform: translateY(0);
                            transform: translateY(0);
                    }
                    100% {
                    -webkit-transform: translateY(-50px);
                            transform: translateY(-50px);
                    }
                }
                @keyframes slide-top {
                    0% {
                    -webkit-transform: translateY(100px);
                            transform: translateY(100px);
                    }
                    100% {
                    -webkit-transform: translateY(0px);
                            transform: translateY(0px);
                    }
                }

                h2{
                    margin: 0;
                    -webkit-animation: text-focus-in 0.75s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	                        animation: text-focus-in 0.75s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                }
    
                h4{
                    margin: 0;
                    font-size: 14px;
                    font-weight: lighter;
                    -webkit-animation: text-focus-in 0.60s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	                        animation: text-focus-in 0.60s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                }

                @-webkit-keyframes text-focus-in {
                    0% {
                    -webkit-filter: blur(12px);
                            filter: blur(12px);
                    opacity: 0;
                    }
                    100% {
                    -webkit-filter: blur(0px);
                            filter: blur(0px);
                    opacity: 1;
                    }
                }
                @keyframes text-focus-in {
                    0% {
                    -webkit-filter: blur(12px);
                            filter: blur(12px);
                    opacity: 0;
                    }
                    100% {
                      -webkit-filter: blur(0px);
                            filter: blur(0px);
                    opacity: 1;
                    }
                }
            }

            .product__container__button{
                display: inline-block;
                position: relative;
                margin-top: -10px;
                text-decoration: none;
                cursor: pointer;
            
                h3{
                    color: #F2F2F2;
                    display: inline-block;
                    position: relative;
                    letter-spacing: 3px;
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
            
            h5{
                letter-spacing: 1px;
                font-size: 16px;
                border: 1px solid #353535;
                border-radius: 0px 0px 10px 10px;
                margin-top: 0px;
                padding: 10px; 
            }
        }     
    }
`