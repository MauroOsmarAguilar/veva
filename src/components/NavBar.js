import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import BurgerButton from './BurgerButton'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <Logo/>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h">HOME</a>
                    <a onClick={handleClick} href="#h">DESIGN</a>
                    <a onClick={handleClick} href="#h">NOSOTROS</a>
                    <a onClick={handleClick} href="#h">CONTACTO</a>
                </div>
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

    a {
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
        a {
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                color: white;
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
        a {
            font-family: 'Montserrat';
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    }

    .burger {
        @media(min-width: 768px){
            display: none;
        }
    }
`

const BgDiv = styled.div`
    background-color: #151515;
    position: absolute;
    top: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease-in-out ;
  
    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`