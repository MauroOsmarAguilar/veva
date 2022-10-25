import styled from 'styled-components'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import Logo from '../Logos/Logo'
import { 
    Center,
    ChakraProvider,
    Button,
    Modal, 
    ModalOverlay, 
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'



const Cart = () => {

    // Agrega elementos del contexto
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    // Campos para el estado de cliente
    const [ dataClient, setDataClient ] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''  
    })

    const [ SaleId, setSaleId ] = useState()

    // Contiene la información a enviar a la base de datos
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
        })        
    }

    const clientChange = (e) => {
        const { name, value } = e.target
        setDataClient({
            ...dataClient, [name] : value
        })
    }

    // Genera estado en el modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    // Agrupa funciones de modal y datos
    const SaleEnd = () => {
        checkoutSell()
        onOpen()
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
                            <button onClick={SaleEnd} className='cart__form__button'>Continuar compra</button>
                        </div>
                        <ChakraProvider>
                            <Modal isOpen={isOpen} onClose={onClose}> 
                                <ModalOverlay backgroundColor='#010101af'/>
                                <ModalContent 
                                    bgGradient="linear(to-t, #151515, #353535)"
                                    color='#f2f2f2'
                                    border='1px'
                                    borderColor='#f2f2f2af'
                                    borderRadius="15"
                                    fontFamily='Montserrat'
                                    fontSize={14}
                                    letterSpacing={1}
                                    textAlign='center'
                                    >
                                    <ModalHeader fontSize={18}>¡Gracias por elegirnos!</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <p>Ahora vos también sos parte de</p>
                                        <Center>
                                            <Logo />
                                        </Center>
                                        <p>¡Hola, {dataClient.nombre}!  ¡Tu compra se ha realizado exitosamente!</p>
                                        <p>Tu ID de compra es {SaleId}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button 
                                            mr={3} 
                                            onClick={onClose}
                                            backgroundColor='#252525' 
                                            color='#f2f2f2'
                                            borderRadius="5"
                                            fontSize={14}>
                                            Cerrar
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </ChakraProvider>
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
    background: #151515 no-repeat; 
    background-image: linear-gradient(to right top, #040404, #0d0d0d, #141414, #191919, #1e1e1e, #1f1f1f, #212121, #222222, #202020, #1e1e1e, #1c1c1c, #1a1a1a);

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
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        border-radius: 10px;
        background: rgb(21,21,21);
        background: linear-gradient(230deg, rgba(21,21,21,1) 0%, rgba(53,53,53,1) 100%);
        margin: 10px;
        padding: 0px 10px;
        text-align: center;

        p{
            margin: 10px;
            padding: 10px 0px;
            border-bottom: 1px solid #353535af;
        }

        input{  
            margin: 10px;
            padding: 10px; 
            border: 1px solid #f2f2f2af; 
            border-radius: 5px; 
            background-color: #f2f2f2; 
            color: #151515; 
            drop-shadow: 0px 0px 20px 0px rgba(42,42,42,.75); 
            font-size: 14px;  
        }

        input:focus{ 
            outline:none; 
        } 

        .cart__form__button{
            display: flex;
            justify-content: center;
            margin: 10px;
            padding: 10px;
            
            border-radius: 5px;
            cursor: pointer;
            background-color: #151515;
            color: #f2f2f2;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
        }

        .cart__form__button:hover{
            background-color: #353535;
        }
    }
`