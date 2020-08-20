import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import NextLayout from '../../components/layout'
const DynamicHead = dynamic(() => import('../../components/head'))

import notFound from '../../public/assets/MessyDoodle.svg'


const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <div className='h-screen flex justify-center items-center flex-col'>
                <img src={notFound} alt="Not Found" className='w-1/4' />
                <div className="w-1/3 h-auto mx-auto flex p-6 items-center bg-bgDark rounded-lg shadow-md font-body mt-16 text-white hover:shadow-xl justify-between">
                    <span>Sorry! The page you are looking for is unavailabe.😥</span>
                    <Link href='/'>
                        <button class="transition duration-500 ease-in-out font-semibold bg-white text-bgDark py-2 px-4 border border-white rounded transform hover:scale-105">
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </NextLayout>
    );
};

export default index;