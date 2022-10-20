import styled from 'styled-components'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    const [ dataClient, setDataClient ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''  
    })

    const [ SaleId, setSaleId ] = useState()

    const checkoutSell = () => {
        const sellsCollection = collection(db, 'sells')
        addDoc(sellsCollection, {
            dataClient,
            items: cartList,
            date: serverTimestamp(),
            total: `${totalPrice()}`
        })
        .then((res) => {
            setSaleId(res.id)
            console.log(res.id)           
        })        
    }

    const clientChange = (e) => {
        const { name, value } = e.target
        setDataClient({
            ...dataClient, [name] : value
        })
    }

    return(
        <>
            <CartContainer>
                <div className='cart__container'>
                    {cartList.map(prod =>
                        <div key={prod.id} className='cart__container__item'>
                            <button onClick={() => removeProduct(prod.id)} className='cart__container__item__delete'>X</button>
                            <img src={prod.image} alt={prod.image}/>
                            <p className='cart__container__item__info'>{prod.category}</p>
                            <p>{prod.name}</p>
                            <p className='cart__container__item__info'>Cantidad: {prod.quantity}</p>
                            <p className='cart__container__item__info'>${`${prod.price}`*`${prod.quantity}`}.-</p>
                        </div>
                    )}
                    {cartList.length === 0 ? 
                        <p>Tu carrito está vacío</p>
                    :
                    <>
                        <p className='cart__container__total'>Total: ${totalPrice()}.-</p>
                        <div className='cart__container__options'>
                            <button onClick={cleanCart} className='cart__container__options__button'>Vaciar carrito</button>
                            <Link to='/'><button className='cart__container__options__button'>Ver más diseños</button></Link>
                        </div>
                        <div className='cart__form'>
                            <p>Completa con tus datos para finalizar la compra:</p>
                            <form onSubmit={checkoutSell} onChange={clientChange}>
				                <input
					                type="text"
    					            placeholder="Nombre"
	    			    	        name="nombre"
		    	    		        onChange={clientChange}
		        		        />
	    		    	        <input
    				    	        type="text"
					                placeholder="Apellido"
					                name="apellido"
                                    onChange={clientChange}
    				            />
	    		    	        <input
		            		        type="text"
	            			        placeholder="Email"
        		    		        name="email"
                                    onChange={clientChange}
				                />
                                <input
		        		            type="text"
    	        			        placeholder="Teléfono"
            				        name="telefono"
                                    onChange={clientChange}
			    	            />
                            </form>
                        <button onClick={checkoutSell} className='cart__container__button'>Finalizar compra</button>
                    </div>
                        <p>¡Hola, {dataClient.nombre}! Gracias por elegirnos. ¡Tu compra se ha realizado exitosamente!</p>
                        <p>Tu ID de compra es {SaleId}</p>
                    </>
                    }
                </div>
            </CartContainer>            
        </>
    )
}

export { Cart }

const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    color: #f2f2f2;
    font-family: 'Montserrat';

    .cart__container__item{
        display: inline-block;
        justify-content: center;
        margin: 10px;
        padding: 10px;
        background-color: #151515;
        border: 1px solid #252525;
        border-radius: 10px;
        font-family: 'Montserrat';
        color: #f2f2f2;
        font-weight: bold;

        img{
            margin: 5px 5px 0px 5px;
            height: 200px;
            border-radius: 5px;
        }

        .cart__container__item__info{
            font-weight: lighter;
            font-size: 12px;
        }

        p{
            text-align: center;
        }

        .cart__container__item__delete{
            position: absolute;
            border: 1px solid #555555;
            border-radius: 100px;
            height: 25px;
            cursor: pointer;
            background-color: #252525;
            color: #f2f2f2;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
        }

        .cart__container__item__delete:hover{
            background-color: #353535;
        }
    }

    .cart__container__total{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Montserrat';
        letter-spacing: 1px;  
        color: #f2f2f2;
        margin: 10px;
        border: 1px solid #f2f2f2af;
        border-radius: 10px;
        padding: 10px;
    }

    .cart__container__options{
        display: flex;
        flex-direction: wrap;
        justify-content: space-around;
        margin: 10px 0px;
        width: 100%;

        a{
            width: 100%;
            padding-right: 20px;
        }

        .cart__container__options__button{
            display: flex;
            justify-content: center;
            width: 100%;
            margin: 10px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #252525;
            color: #f2f2f2;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
        }
    
        .cart__container__options__button:hover{
            background-color: #353535;
        }    
    }
    
    .cart__form{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
`