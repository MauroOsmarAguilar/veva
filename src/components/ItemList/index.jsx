import { Item } from "../Item"

const ItemList = ({ listProducts }) => {
    
    return(
        <>
            {listProducts.map((prod, i) => <Item key={`${prod.product}-${i}`} product={prod}/>)}
        </>
    )
}

export { ItemList } 