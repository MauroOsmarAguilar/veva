import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Spinner = () => {
    return(
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <FaSpinner />
            </IconContext.Provider>
        </>
    )
}

export { Spinner }