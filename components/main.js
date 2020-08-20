import React from 'react';

import logo from  '../public/introImg.jpg'

const main = () => {
    return (
        <section id='intro' className='container'>
            <div className='intro-main'>
                <div class='intro'>
                    Hi! I am <span className="js-text-animation"></span>
                </div>
                <div class='intro-img' data-tilt>
                <img src={logo} alt='Sushant Chitrakar'/>
                </div>
            </div>
        </section>
    );
};

export default main;