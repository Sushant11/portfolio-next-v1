import React from 'react'
import dynamic from 'next/dynamic'

import NextLayout from '../../components/layout'

const DynamicHead = dynamic(() => import('../../components/head'))


const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <div>Coming Soon</div>       
        </NextLayout>
    );
};

export default index;