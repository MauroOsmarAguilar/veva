import { ItemCount } from '../ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div>{greeting}</div>
            <ItemCount initial={1} stock={10} onAdd={() => {}}/>
        </>
    )
}

export { ItemListContainer }