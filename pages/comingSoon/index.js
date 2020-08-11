import React from 'react'
import { Row, Col } from 'antd'
import dynamic from 'next/dynamic'

import NextLayout from '../../components/layout'

const DynamicHead = dynamic(() => import('../../components/head'))

const pageLayout = {
    xs: { span: 23, offset: 1 },
    sm: { span: 20, offset: 2 },
    md: { span: 18, offset: 4 },
    lg: { span: 14, offset: 6 },
    xl: { span: 12, offset: 6 },
}

const contentLayout = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 12 },
    lg: { span: 12 },
    xl: { span: 12 },
}

const index = () => {
    return (
        <NextLayout>
            <DynamicHead />
            <Row>
                <Col {...pageLayout}>
                    <Row className='loading-content'>
                        <Col {...contentLayout}>
                            <h1>
                                Coming Soon!
                                </h1>
                        </Col>
                        <Col {...contentLayout}><img src='/SitReadingDoodle.svg' alt='Sit Reading'></img></Col>
                    </Row>
                </Col>
            </Row>
        </NextLayout>
    );
};

export default index;