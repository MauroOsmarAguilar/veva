import { useState } from 'react'
import styled from 'styled-components'
import tshirt from './tshirt1.jpg'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > initial && setCount(count - 1)

    return(
        <CountContainer>
            <div className='count__container'>
                <img src={tshirt} />
                <h1>smilesad tshirt</h1>
                <div className="count__container__show">
                    <button className='count__container__button' onClick={decrease}>-</button>
                    <p className='count__container__number'>{count}</p>
                    <button className='count__container__button' onClick={increase}>+</button>
                    <button className='count__container__button'>Agregar</button>
                </div>
            </div>
        </CountContainer>
    )
}

export { ItemCount }

const CountContainer = styled.div`
    .count__container{
        width: 300px;
        padding: 0 0 20px 0;
        border: 1px solid;
        border-radius: 5px;
        background-color: #151515;
        color: #f2f2f2;

        img{
            width: 300px;
            border-radius: 5px 5px 0 0;
        }

        h1{  
            text-align: center;
            top: 50px;
        }

        .count__container__show{
            display: flex;
            justify-content: space-around;
        
            .count__container__button{
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
                border: none;
            }       
        }
    }
`