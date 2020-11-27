import React from 'react';
import BackToTop from "react-back-to-top-button";
import { Link, animateScroll as scroll } from "react-scroll";

const GoTop = () => {
    return (
        <BackToTop
            showOnScrollUp
            easing="easeInOutQuint"
        >
            <Link
                activeClass="active"
                to="nav"
                spy={true}
                smooth={true}
                duration={800}
                className='text-black cursor-pointer hover:opacity-75'
            >
                <svg class="w-6 h-6 focus:outline-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>                </Link>
        </BackToTop >
    );
};

export default GoTop;