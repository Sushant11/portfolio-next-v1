import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import NextLayout from '../../components/layout'
const DynamicHead = dynamic(() => import('../../components/head'))

import logoSC from '../../public/assets/SC.svg'
import notFound from '../../public/assets/MessyDoodle.svg'

const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <div className='h-screen flex justify-center items-center flex-col relative'>
                <img src={notFound} alt="Not Found" className='w-1/4 xl:w-1/2 sm:w-3/4'/>
                <div className='mx-auto font-semibold text-3xl mt-4'>Page Not Found.</div>
                <Link href='/'>
                        <button class="mt-2 transition duration-500 ease-in-out py-1 px-2 rounded transform hover:scale-110 focus:outline-none">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="arrow-circle-left w-8 h-8"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" /></svg>
                        </button>
                    </Link>
                    <img src={logoSC} alt='Sushant Chitrakar' className='absolute top-0 pt-12 w-10' />
            </div>
        </NextLayout>
    );
};

export default index;