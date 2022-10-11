import { useState } from 'react'
import styled from 'styled-components'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1) 

    const handleclick = () => onAdd(count)

    return(
        <CountContainer>
            <div className='count__container'>
                    <button className='count__container__button' onClick={decrease}>-</button>
                    <p className='count__container__number'>{count}</p>
                    <button className='count__container__button' onClick={increase}>+</button>
                    <button className='count__container__button__add' onClick={handleclick}>Agregar</button>
            </div>
        </CountContainer>
    )
}

export { ItemCount }

const CountContainer = styled.div`
    .count__container{
        display: flex;
        justify-content: space-between;
        padding: 5px;
                
        .count__container__button{
            padding: 15px;
            border: none;
            border-radius: 5px;
            background-color: #252525;
            color: #f2f2f2;
            font-family: 'Montserrat';
            cursor: pointer;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
        }

        .count__container__button:hover{
            background-color: #353535;
        }

        .count__container__number{
            font-variant-numeric: tabular-nums;
            align-self: center;
            border: none;
        }

        .count__container__button__add{
            width: 50%;
            padding: 15px;
            border: none;
            border-radius: 5px;
            background-color: #252525;
            color: #f2f2f2;
            font-family: 'Montserrat';
            cursor: pointer;
            transition: .3s cubic-bezier(.8, .5, .2);
            transition-duration: 500ms;
        }

        .count__container__button__add:hover{
            background-color: #353535;
        }
    }
`