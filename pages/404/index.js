import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import NextLayout from '../../components/layout'
const DynamicHead = dynamic(() => import('../../components/head'))

import notFound from '../../public/assets/MessyDoodle.svg'
import homeIcon from '../../public/assets/icons/home-2.svg'



const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <div className='h-screen flex justify-center items-center flex-col'>
                <img src={notFound} alt="Not Found" className='w-1/4 xl:w-1/2 sm:w-3/4'/>
                <div className="w-1/2 xl:w-3/4 h-auto mx-auto flex p-6 items-center bg-bgDark rounded-lg shadow-md font-body mt-16 text-white hover:shadow-xl justify-between flex-wrap">
                    <span>Sorry! The page you are looking for is unavailabe.😥</span>
                    <Link href='/'>
                        <button class="sm:mt-3 transition duration-500 ease-in-out font-semibold bg-white text-bgDark py-1 px-2 border border-white rounded transform hover:scale-105">
                            <img src={homeIcon} alt="Home"/>
                        </button>
                    </Link>
                </div>
            </div>
        </NextLayout>
    );
};

export default index;