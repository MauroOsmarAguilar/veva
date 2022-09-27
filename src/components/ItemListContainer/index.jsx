import { ItemList } from '../ItemList'
import { products } from '../../assets/productos'
import { customFetch } from '../../Utils/customFetch'
import { useState, useEffect } from 'react'
import { Spinner } from '../Spinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProducts(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProducts(res)
                }
            })
    }, [category])

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

