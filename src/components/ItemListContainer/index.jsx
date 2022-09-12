import { ItemList } from '../ItemList'
import { products } from '../../assets/productos'
import { customFetch } from '../../Utils/customFetch'
import { useState, useEffect } from 'react'
import { Spinner } from '../Spinner'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])

    return (
        <>
            <div>{greeting}</div>
            {
            loading ?
                <Spinner />
            :
                <ItemList listProducts={listProducts} />
            }
        </>
    )
}

export { ItemListContainer }

