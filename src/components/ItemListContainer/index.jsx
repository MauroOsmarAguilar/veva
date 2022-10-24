import styled from 'styled-components'
import { ItemList } from '../ItemList'
import { useState, useEffect } from 'react'
import { Spinner } from '../Spinner'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {

        // Muestra los productos
        const productsCollection = collection(db, 'products')

        // Muestra categoría de productos
        const productCategory = query(productsCollection, where('category', '==', `${category}`))

        // Crea una URL
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
    }, [category])

    return (
        <>  
            {
            loading ?
                <Spinner />
            :
                <ListContainer>
                    <ItemList listProducts={listProducts} />
                </ListContainer>
            }
        </>
    )
}

export { ItemListContainer }

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`