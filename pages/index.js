import React from 'react'
import NextLayout from '../components/layout'
import dynamic from 'next/dynamic'

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const DynamicHead = dynamic(() => import('../components/head'))
const DynamiNav = dynamic(() => import('../components/nav'))
const DynamiBody = dynamic(() => import('../components/main'))
const DynamiFooter = dynamic(() => import('../components/footer'))


const Home = () => {
  return (
    <NextLayout>
      <DynamicHead />
      <Header className='site-header'>
        <DynamiNav />
      </Header>

      <Content className='site-body'>
        <DynamiBody/>
      </Content>

      <Footer className='site-footer'>
        <DynamiFooter />
      </Footer>
    </NextLayout>
  );
};

export default Home;