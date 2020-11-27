import React, { useState, Fragment } from 'react';

import logo from '../public/assets/HeaderLogo.svg'
import logoSC from '../public/assets/SC.svg'
import Sidenav from './sub-components/Sidenav';
import Nav from './sub-components/Nav';
// import logodark from '../public/assets/logodark.png'

const nav = () => {
    const [isOpen, setOpen] = useState(false)

    const handleNav = () => {
        setOpen(!isOpen)
    }

    return (
        <Fragment>
            {isOpen &&
                <Sidenav isOpen={isOpen} setOpen={setOpen} handleNav={handleNav} />
            }
            <div className='flex justify-between items-center pt-8 md:mx-4' id='nav'>
                <div >
                    <img src={logo} alt='Sushant Chitrakar' className='sm:ml-4 sm:hidden' />
                    <img src={logoSC} alt='Sushant Chitrakar' className='sm:ml-4 w-8 hidden sm:block' />
                </div>
                <Nav />
                <div className='hidden md:block'>
                    <a type='button' onClick={handleNav} className='cursor-pointer'>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="menu sm:mr-4 nav-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </a>
                </div>
            </div>
        </Fragment>
    );
};

export default nav;