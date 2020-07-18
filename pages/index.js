import React from 'react'
import layout from '../components/layout'
import dynamic from 'next/dynamic'

const DynamicHead= dynamic(() => import('../components/head'))
const DynamiNav= dynamic(() => import('../components/nav'))
const DynamiBody= dynamic(() => import('../components/main'))
const DynamiFooter= dynamic(() => import('../components/footer'))


const Home = () => {
  return (
    <layout>
      <DynamicHead/>
      <DynamiNav/>
      <DynamiBody/>
      <DynamiFooter/>
    </layout>
  );
};

export default Home;