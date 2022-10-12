import React from 'react'
import styled from 'styled-components'
import { LineWobble } from '@uiball/loaders'

const Spinner = () => {
    return(
        <>
            <SpinnerContainer>
                <p>Cargando...</p>
                <LineWobble 
                    size={150}
                    lineWeight={5}
                    speed={1.75} 
                    color="#f2f2f2" 
                />
            </SpinnerContainer>
        </>
    )
}

export { Spinner }

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Montserrat';
    color: #f2f2f2;
`