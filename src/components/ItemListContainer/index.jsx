import styled from 'styled-components'
import { ItemList } from '../ItemList'
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
    }, [category])

    return (
        <>

        <div>{greeting}</div>
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