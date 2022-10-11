import { useState, useEffect } from 'react'
import { products } from '../../assets/productos'
import { customFetch } from '../../Utils/customFetch'
import { ItemDetail } from '../ItemDetail'
import { Spinner } from '../Spinner'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === parseInt(id)))
            })
    }, [])

    return(
        <>
            {!loading ? 
                <ItemDetail listProduct={listProduct} />
            : 
                <Spinner />}
        </>
    )
}

export { ItemDetailContainer }