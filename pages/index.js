import React from 'react'
import NextLayout from '../components/layout'
import dynamic from 'next/dynamic'

const DynamicHead = dynamic(() => import('../components/head'))
const DynamiNav = dynamic(() => import('../components/navigation'))
const DynamiBody = dynamic(() => import('../components/main'))
const DynamiFooter = dynamic(() => import('../components/footer'))


const Home = () => {
  return (
    <NextLayout>
      <DynamicHead />
      <div className='site-header'>
        <DynamiNav />
      </div>

      {/* <div className='site-body'>
        <DynamiBody/>
      </div> */}

      {/* <div className='site-footer'>
        <DynamiFooter />
      </div> */}
    </NextLayout>
  );
};

export default Home;