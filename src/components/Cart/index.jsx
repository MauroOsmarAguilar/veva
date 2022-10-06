import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { HStack } from '@chakra-ui/react'

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()


    console.log(cartList)
    return(
        <div>
            {cartList.map(prod =>
                
                    <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="black">
                        <img src={prod.image}/>
                        <p>{prod.name}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <button onClick={() => removeProduct(prod.id)}>X</button>
                    </HStack>
            )}
            {cartList.length === 0 ? 
                <p>Tu carrito está vacío</p>
                :
                <>
                    <p>Total: ${totalPrice()}</p>
                    <button onClick={cleanCart}>Vaciar carrito</button>
                </>
            }
            
        </div>
    )
}

export { Cart }