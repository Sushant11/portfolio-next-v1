import React from 'react';

import line from '../../public/assets/line.svg'
import Card from './items/Card';

const Works = () => {
    return (
        <section id='works' className='h-screen flex justify-center items-center flex-col'>
            <div className=' text-bgDark text-opacity-75 font-medium flex items-center float-left w-full mb-16 -mt-64'>
            Some things I've Built <img src={line} alt="Line" className='ml-16'/>
            </div>

            <div>
                <Card/>
            </div>
        </section>
    );
};

export default Works;