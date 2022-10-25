import React from 'react'
import styled from 'styled-components'
import Warning from '../Logos/Warning'
import { ItemCount } from '../ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({ listProduct }) => {

    // Plantea agregar al carrito
    const [isAdded, setIsAdded] = useState(false)
    const { addToCart } = useCartContext()
    const onAdd = (quantity) => {
        addToCart(listProduct, quantity)
        setIsAdded(true)
    }

    return(
        <>
            <ProductDetailContainer>
                <div className='product__detail'>
                    <div className='product__detail__menu'>
                        <Link to="/">productos</Link>
                        <span>/</span>
                        <Link to={`../category/${listProduct.category}`}>{listProduct.category}</Link>
                        <span>/</span>
                        <div className='product__detail__menu__name'>{listProduct.name}</div>
                    </div>
                    <div className='product__detail__container'>
                        <img src={listProduct.image} alt={listProduct.name}/>
                        <div className='product__detail__container__info'>
                            <h1>{listProduct.name}</h1>
                            <h2>{listProduct.category}</h2>
                            <p>{listProduct.detail}</p>
                            <h3>Precio: ${listProduct.price}.- </h3>
                            {
                                isAdded ?
                                <Link to="/cart">
                                    <div className='product__detail__container__info__cart'>
                                        Ir al carrito
                                    </div>
                                </Link>
                                :
                                <ItemCount initial={1} stock={listProduct.stock} onAdd={onAdd}/>
                            }                            
                            <div className='product__detail__container__info__i'>
                                <p>Talles disponibles: del S al XXL.</p>
                                <div className='product__detail__container__info__i__size'>Al momento de realizar la compra nos pondremos en contacto para consultar las medidas.</div>
                                <p>Los tiempos previstos de producción pueden ser entre 2 a 5 días hábiles. Si la prenda ya está en stock, se coordina el envío y entrega al día siguiente o cuando lo prefieras.</p>                            
                            </div>
                        </div>
                    </div>
                    <div className='product__detail__size'>
                        <Warning />
                        <p>¡Acordate que todas nuestras prendas son personalizadas! Antes de realizar la compra te pediremos tus medidas</p>
                    </div>
                </div>
            </ProductDetailContainer>
        </>
    )
}

export { ItemDetail }

const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;

    .product__detail__menu{
        display: flex;
        margin: 15px 10px;
        color: #f2f2f2;
        font-family: 'Montserrat';
        
        a{
            margin: 0px 10px;
            text-decoration: none;
            color: #f2f2f2;
            font-weight: bold;
        }

        a:hover{
            text-decoration: underline;
        }

        .product__detail__menu__name{
            margin: 0px 10px;
            font-weight: lighter;
        }
    }

    .product__detail{
        alig-items: center;
        align-self: center;
        max-width: 800px;
        text-decoration: none;
        margin: 0 auto;

        .product__detail__container{
            display: flex;
            justify-content: center;
            color: #f2f2f2;
            font-family: 'Montserrat';

            img{
                margin: 10px;
                max-width: 350px;
                border-radius: 5px;
            }
        }    

        .product__detail__container__info{
            color: #f2f2f2;
            margin: 5px;

            p{
                margin: 5px;
            }

            h1{
                margin: 5px;
                font-size: 48px;
            }

            h2{
                margin: 5px;
                font-weight: lighter;
                font-size: 28px;
            }

            h3{
                margin: 5px;
                border: 1px solid #f2f2f2af;
                border-radius: 5px;
                padding: 10px;
            }
        }

        .product__detail__container__info__i{
            background-color: #f2f2f2af;
            margin: 5px;
            padding: 10px;
            border-radius: 5px;

            p{
                color: #151515;
                font-size: 12px;
            }

            .product__detail__container__info__i__size{
                margin: 5px;
                color: #151515;
                border: 1px solid #151515af;
                border-radius: 5px;
                padding: 10px;
                font-size: 14px;
                
            }
        }

        .product__detail__container__info__cart{
            margin: 5px;
            padding: 15px;
            border: none;
            border-radius: 5px;
            background-color: #252525;
            color: #f2f2f2;
            font-family: 'Montserrat';
            text-align: center;
            cursor: pointer;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
            text-decoration: none;
        }
        
        a{
            text-decoration: none;
        }

        .product__detail__container__info__cart:hover{
            background-color: #353535;
        }
    }

    @media (max-width: 600px){
        .product__detail__container{
            flex-wrap: wrap;

            img{
                min-width: 95%;
            }
        }
    }

    .product__detail__size{
        display: flex;
        margin: 10px;
        border: 1px solid #f2f2f2af;
        border-radius: 5px;
        padding: 10px;
        color: #f2f2f2;
        font-family: 'Montserrat';

        svg{
            min-width: 70px;
            margin: 10px;
        }
    }
`