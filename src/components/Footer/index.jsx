import React from 'react'
import styled from 'styled-components'
import InstagramLogo from '../Logos/InstagramLogo'
import WhatsappLogo from '../Logos/WhatsappLogo'
import { Link } from 'react-router-dom'


const Footer = () => {

    // Links externos a redes sociales
    const InstagramLink = () => {
        window.open('https://www.instagram.com/somos.veva', '_blank')
    }
    const WhatsappLink = () => {
        window.open('https://wa.me/+5491153295919', '_blank')
    }

    return(
        <FooterContainer>
            <div className='footer__container'>
                <div className='footer__container__list'>
                        <Link className='footer__container__list__item' onClick={InstagramLink}>
                            <InstagramLogo /> 
                        </Link>
                        <Link className='footer__container__list__item' onClick={WhatsappLink}>
                            <WhatsappLogo />
                        </Link>
                </div>
                <span className='footer__container__line'/>
                <div className='footer__container__data'>
                    <p>somos.vveva@gmail.com</p>
                    <p>+54 9 11 5329-5919</p>
                    <p>Berazategui, Buenos Aires</p>
                </div>
            </div>
            <Copy>
                <p>© 2022 VEVA | Todos los derechos reservados | Design by Mauro Aguilar</p>
            </Copy>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0;
    background-color: #151515;
    width: 100%;
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    border-color: #3A3B3Caf;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 2px; 

    .footer__container{
        display: flex;
        justify-content: center;
        flex-direction: wrap;
    }

    .footer__container__list__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 20px 0px;
        cursor: pointer;

        svg path{
            fill: #959595;
            transition: all ease 0.3s;
        }

        svg:hover path{
            fill: #f2f2f2;
        }
        
    }

    .footer__container__line{
        margin: 30px;
        border-style: solid;
        border-width: 0px 0px 0px 1px;
        border-color: #3A3B3Caf;
    }

    .footer__container__data{
        display: flex;
        flex-direction: column;
        justify-content: left;
        color: #f2f2f2;
        font-weight: lighter;
        letter-spacing: 2px;
    }
`



const Copy = styled.div`
    opacity: 1;
    background-color: #000;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 30px;
        color: #959595;
        font-family: 'Calibri';
        font-size: 11px;
        letter-spacing: 1px; 
        -webkit-animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
                animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes text-focus-in {
        0% {
        -webkit-filter: blur(12px);
                filter: blur(12px);
        opacity: 0;
        }
        100% {
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
        }
    }
    @keyframes text-focus-in {
        0% {
        -webkit-filter: blur(12px);
                filter: blur(12px);
        opacity: 0;
        }
        100% {
          -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
        }
    }
`

