import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header-content-wrapper'>
                    <div>
                        <button>
                            menu
                        </button>
                        <input title='Buscar' className='input-search' />
                    </div>
                    <div>
                        <a href="/" className='header-logo'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_La_Naci%C3%B3n.svg' alt='' />
                        </a>
                    </div>

                    <div>
                        <a href="/" >subscribite</a>
                        <a href="/" >ingresar</a>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header