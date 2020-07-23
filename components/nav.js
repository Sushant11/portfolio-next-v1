import React from 'react';


const nav = () => {
    return (
        <header>
            <div>
                <img src='/headerLogo.svg' alt='Sushant Chitrakar' />
            </div>

            <div class="topnav">
                <a href="#works">Works</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
                <a href="#resume">Resume</a>
            </div>
        </header>
    );
};

export default nav;