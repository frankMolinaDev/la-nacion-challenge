import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header-content-wrapper'>

                    <a href="/" className='header-logo'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_La_Naci%C3%B3n.svg' alt='' />
                    </a>
                    <a>subscribite</a>
                </div>
            </header>
        </>
    )
}

export default Header