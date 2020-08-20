import React from 'react'
import dynamic from 'next/dynamic'

import NextLayout from '../../components/layout'

const DynamicHead = dynamic(() => import('../../components/head'))


const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl font-body">
                <div class="flex-shrink-0">
                    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
                </div>
                <div class="ml-6 pt-1">
                    <h4 class="text-xl text-gray-900 leading-tight">ChitChat</h4>
                    <p class="text-base text-gray-600 leading-normal">You have a new message!</p>
                </div>
            </div>
        </NextLayout>
    );
};

export default index;