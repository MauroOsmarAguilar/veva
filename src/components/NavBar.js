import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logos/Logo'
import BurgerButton from './BurgerButton'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <Logo to={"/"} className='navlist'/>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link onClick={handleClick} to="/" className='navlist'>HOME</Link>
                    <Link onClick={handleClick} to="#h" className='navlist'>NOSOTROS</Link>
                    <Link onClick={handleClick} to="#h" className='navlist'>CONTACTO</Link>
                </div>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
                <div className='burger'>
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
  )
}

export default Navbar

const NavContainer = styled.nav`
    padding: .4rem;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .navlist {
        color: #F2F2F2;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links {
        position: absolute;
        top: -1000px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;

        .navlist {
            color: #F2F2F2;
            font-size: 2rem;
            display: block;
        }
        
        @media(min-width: 768px){
            position: initial;
            margin: 0;

            .navlist {
                font-size: 1rem;
                color: #F2F2F2;
                display: inline;
            }

        display: block;
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 2;
        

        .navlist {
            font-family: 'Montserrat';
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    }

    .burger {
        z-index: 1;

        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background-color: transparent;
    position: fixed;
    top: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease-in-out ;
  
    &.active{
        background-color: #151515;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`