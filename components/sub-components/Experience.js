import React from 'react';

import line from '../../public/assets/line.svg'

const Works = () => {
    return (
        <section id='exp' className=' overflow-hidden md:h-auto h-screen flex justify-center items-center flex-col'>
            <div className=' text-bgDark text-opacity-75 font-medium flex float-left w-full md:w-auto sm:ml-0 mb-16 md:mt-32 -mt-20 ml-8 cursor-default'>
                <span className='md:border-b'>Where I've Worked</span> <img src={line} alt="Line" className='ml-16 md:hidden' />
            </div>
            <div className='flex justify-between flex-wrap w-full md:justify-center'>
               
            </div>
        </section>
    );
};

export default Works;