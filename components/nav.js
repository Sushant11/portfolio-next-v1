import React, { useState, Fragment } from 'react';

import logo from '../public/HeaderLogo.svg'
import logodark from '../public/logodark.png'

const nav = () => {
    const [current, setCurrent] = useState('')

    const handelClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <Fragment>
            <div className='logo'>
                <img src={logo} alt='Sushant Chitrakar' />
            </div>
            <ul>
                <li>
                    <a type='button' href='#'>Works</a>
                </li>
                <li>
                    <a type='button' href='#'>Experience</a>
                </li>
                <li>
                    <a type='button' href='#'>Say Hi!</a>
                </li>
                <li>
                    <a type='button' href='#'>Resume</a>
                </li>
            </ul>
        </Fragment>
    );
};

export default nav;