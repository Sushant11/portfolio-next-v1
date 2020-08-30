import React from 'react';
import Typed from 'react-typed'
import logo from '../../public/assets/introImg.jpg'
import dots from '../../public/assets/dots.svg'


const Intro = () => {
    return (
        <section id='intro'>
            <div className='flex flex-wrap md:flex-col justify-between items-center md:items-center md:h-auto' style={{ height: '90vh' }}>
                <div className='relative md:mt-48'>
                    <img src={logo} alt='Sushant Chitrakar' className='rounded-md z-10 shadow-xl md:w-1/2 lg:w-3/4 mx-auto hover:shadow transition ease-in-out duration-300' />
                    <img src={dots} alt='Sushant Chitrakar' className='absolute w-40 -mt-24 right-0 -mr-20 opacity-50 md:hidden lg:w-1/3 lg:-mr-2 lg:-mt-24' style={{ zIndex: '-1' }} />
                </div>
                <div className='flex justify-center flex-col md:text-center cursor-default'>
                    <div className='font-semibold text-4xl md:text-3xl my-8'>
                        Hi! I am Sushant.
                        <div className=' font-normal text-xl md:text-1xl my-2 md:mt-4 opacity-75'>
                            <Typed
                                strings={[
                                    'Frontend Developer',
                                    'UI/UX Designer',]}
                                typeSpeed={100}
                                backSpeed={40}
                                loop >
                            </Typed>
                        </div>
                    </div>
                    <div>
                        <button className="bg-white font border py-4 px-6 rounded-sm shadow-xl my-12 md:my-2 focus:outline-none hover:text-gray-700 font- inline-flex items-center hover:shadow-sm border-gray-700 border-opacity-50 hover:border-gray-400 transition duration-300 ease-in-out tracking-wide">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="paper-airplane w-6 h-6 transform rotate-45 mr-2"><path strokeinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    Get In Touch
                    </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;