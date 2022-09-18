import { Item } from "../Item"

const ItemList = ({ listProducts }) => {
    
    return(
        <>
            {listProducts.map((prod, i) => <Item key={`${prod.id}-${i}`} product={prod}/>)}
        </>
    )
}

export { ItemList } 