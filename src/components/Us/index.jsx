import React from 'react'
import styled from 'styled-components'

const About = () => {

    return(
        <AboutContainer>
            <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#151515', width: '100%', height: 132, transform: 'scaleX(-1)' }}><path d="M1200 120L0 16.48V0h1200v120z" /></svg>
            <div className='about__container'>
                <div className='about__container__img' />
                <div className='about__container__text'>
                    <h1>Somos un emprendimiento de ropa personalizada y diseños re cancheros.</h1>
                    <h1>¿Por qué? No hay por qué. Somos todo lo que está bien. Somos Veva.</h1>
                </div>
            </div>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
    overflow: hidden;
    
    .about__container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: wrap;
        padding: 20px;
        font-family: 'Montserrat';
        margin-top: -150px;
        
        .about__container__img{
                min-height: 400px;
                min-width: 400px;
                background: url(../img/header1.jpeg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
        }
       
        .about__container__text{
            padding: 30px;
            
            h1{
                color: #f2f2f2;
                font-size: 30px;
            }
        }

        @media(max-width: 750px){
            flex-direction: column;
        }
    }
`
