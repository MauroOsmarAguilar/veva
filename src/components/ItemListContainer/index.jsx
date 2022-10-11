import { ItemList } from '../ItemList'
/* import { products } from '../../assets/productos' */
/* import { customFetch } from '../../Utils/customFetch' */
import { useState, useEffect } from 'react'
import { Spinner } from '../Spinner'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, 'products')
        const productCategory = query(productsCollection, where('category', '==', `${category}`))
        const urlCategory = (category === undefined ? productsCollection : productCategory)
        getDocs(urlCategory)
            .then((data) => {
                    const list = data.docs.map((product) => {
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setListProducts(list)
            })
            .finally(() => {
                setLoading(false)
            })

        /* setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProducts(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProducts(res)
                }
            })*/
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
