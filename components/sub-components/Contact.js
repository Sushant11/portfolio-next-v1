import React from 'react';
import { Tooltip } from 'react-tippy'

const tootipProps = {
    position: "top",
    trigger: "mouseenter",
    arrow: 'true',
    arrowSize: 'small',
    size: 'small',
    inertia: 'true'
}

const Contact = () => {
    return (
        <section id='contact' className=' overflow-hidden h-screen flex justify-center items-center flex-col relative'>
            <div className='font-bold text-4xl'>GET IN TOUCH</div>
            <div className='text-lg text-center mt-4 opacity-75'>My inbox is always open. Whether you have a question or just want to say hi, <br /> I’ll try my best to get back to you!</div>
            <div>
                <a type='button' href='mailto:sushantchitrakar@gmail.com' className="bg-white text-black font border py-4 px-6 rounded-sm shadow-sm my-24 md:my-12 focus:outline-none hover:text-gray-700 font- inline-flex items-center hover:shadow-lg hover:-translate-y-1 border-darkGrey border-opacity-25 hover:border-opacity-0 transition duration-300 ease-in-out transform tracking-wide">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="paper-airplane w-6 h-6 transform rotate-45 mr-2"><path strokeinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    Say Hello
                    </a>
            </div>

            <div className='bottom-0 absolute my-6 flex justify-between w-full'>
                <div className='opacity-75'>
                    Sushant Chitrakar © 2020
                </div>
                <div>
                    <span className='mx-2 hover:text-gray-600 items-center'>
                        <Tooltip {...tootipProps} title='Facebook'>
                            <a
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                duration={700}
                                href='https://www.facebook.com/SuS.Chitrakar'
                                className='text-black cursor-pointer'
                            >
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="code footer-icons"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                        </Tooltip>
                    </span>
                    <span className='mx-2 hover:text-gray-600 items-center'>
                        <Tooltip {...tootipProps} title='Instagram'>
                            <a
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                href='https://www.instagram.com/sus.chtre/?hl=en'
                                duration={700}
                                className='text-black cursor-pointer'
                            >
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="code footer-icons"><g stroke-linejoin="round" stroke-linecap="round" strokeWidth={1} fill="none" stroke="currentColor" class="nc-icon-wrapper"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></g></svg>
                            </a>
                        </Tooltip>
                    </span>
                    <span className='mx-2 hover:text-gray-600 items-center'>
                        <Tooltip {...tootipProps} title='LinkedIn'>
                            <a
                                activeClass="active"
                                to="works"
                                spy={true}
                                smooth={true}
                                duration={700}
                                href='https://www.linkedin.com/in/sushant-chitrakar/'
                                className='text-black cursor-pointer'
                            >
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="code footer-icons"><g stroke-linejoin="round" stroke-linecap="round" fill="none" stroke="currentColor" class="nc-icon-wrapper"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></g></svg>
                            </a>
                        </Tooltip>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Contact;