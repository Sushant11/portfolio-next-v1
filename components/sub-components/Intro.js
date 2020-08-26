import React from 'react';
import Tilty from "react-tilty";

import logo from '../../public/assets/introImg.jpg'
import dots from '../../public/assets/dots.svg'


const Intro = () => {
    return (
        <section id='intro'>
            <div className='flex flex-wrap md:flex-col justify-between my-40 lg:my-16 md:my-20 md:items-center'>
                <div className='relative'>
                    <Tilty
                    data-tilt-reverse="true"
                        settings={{
                            scale: 1.1,
                            perspective: 900,
                            reset: true,
                            transistion: true,
                            speed: 900,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                        }}
                    >
                        <img src={logo} alt='Sushant Chitrakar' className='rounded-md z-10 shadow-xl' />
                    </Tilty>
                    <img src={dots} alt='Sushant Chitrakar' className='absolute w-48 -mt-24 right-0 -mr-20 opacity-50 sm:hidden lg:w-1/3 lg:-mr-16' style={{ zIndex: '-1' }} />
                </div>
                <div className='flex justify-center flex-col md:text-center'>
                    <div className='font-semibold text-4xl md:text-3xl my-8 md:mt-12'>
                        Hi! I am Sushant.
                    </div>
                    <div>
                        <button class="bg-transparent font border py-4 px-6 rounded-sm shadow-lg my-12 md:my-2 focus:outline-none hover:text-gray-700 font- inline-flex items-center hover:shadow-sm border-gray-700 hover:border-gray-400 transition duration-300 ease-in-out tracking-wide">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="paper-airplane w-6 h-6 transform rotate-45 mr-2 hover:animate-bounce"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    Get In Touch
                    </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;