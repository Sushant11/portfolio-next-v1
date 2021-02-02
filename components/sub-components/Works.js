import React from 'react';

import line from '../../public/assets/line.svg'
import Card from './items/Card';

import projects from '../../assets/content/projects/index'


const Works = () => {
    return (
        <section id='works' className=' overflow-hidden md:h-auto h-screen flex justify-center items-center flex-col'>
            <div className=' text-bgDark text-opacity-75 font-medium flex float-left w-full md:w-auto sm:ml-0 mb-16 md:mt-32 -mt-20 ml-8 cursor-default'>
                <span className='md:border-b'>Some things I've built</span> <img src={line} alt="Line" className='ml-16 md:hidden' />
            </div>
            <div className='flex justify-between flex-wrap w-full md:justify-center'>
                {
                    projects.map((item,i) => (
                        <Card item={item} key={i} />
                    ))
                }
            </div>
        </section>
    );
};

export default Works;