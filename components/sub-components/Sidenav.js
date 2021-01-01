import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Sidenav = ({ isOpen, setOpen }) => {
    return (
        <div className={`hidden items-center md:block pl-6 font-normal z-20 text-gray-800 fixed h-full bg-white right-0 shadow-xl pt-24 transition duration-500 ease-in w-1/2`}>
            <div className='flex flex-col'>
                <div className='hover:text-gray-600 my-4'>
                    <Link
                        activeClass="active"
                        to="works"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={700}
                        onClick={() => setOpen(!isOpen)} className='inline-flex items-center cursor-pointer'
                    >
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="code nav-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        <span className='mx-4 text-xl'>Works</span>
                    </Link>
                </div>
                <div className='hover:text-gray-600 my-4'>
                    <Link
                        activeClass="active"
                        to="exp"
                        spy={true}
                        smooth={true}
                        duration={700}
                        onClick={() => setOpen(!isOpen)} className='inline-flex items-center cursor-pointer'
                    >
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="briefcase nav-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className='mx-4 text-xl'>Experience</span>
                    </Link>
                </div>
                <div className=' hover:text-gray-600 my-4'>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={700}
                        onClick={() => setOpen(!isOpen)} className='inline-flex items-center cursor-pointer'
                    >
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mail nav-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className='mx-4 text-xl'>Say Hi!</span>
                    </Link>
                </div>
                <div className='hover:text-gray-600 my-4'>
                    <a type='button' href="/assets/Resume.pdf" onClick={() => setOpen(!isOpen)} className='inline-flex items-center'>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="document-text nav-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className='mx-4 text-xl'>Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;