import React from 'react';
import { Tabs, List } from 'antd';

import line from '../../public/assets/line.svg'
import experience from '../../assets/content/jobs'

import Badge from './items/Badge';

const { TabPane } = Tabs;

const Works = () => {
    return (
        <section id='exp' className=' overflow-hidden h-screen flex justify-center items-center flex-col'>
            <div className=' text-bgDark text-opacity-75 font-medium flex float-left w-full md:w-auto sm:ml-0 mb-16 md:mt-12 -mt-20 ml-8 cursor-default'>
                <span className='md:border-b'>Where I've Worked</span> <img src={line} alt="Line" className='ml-16 md:hidden' />
            </div>
            <div className='flex justify-between flex-wrap w-full md:justify-center ml-8'>
                <Tabs defaultActiveKey="0">
                    {experience.map((i, index) => (
                        <TabPane tab={i.company} key={index} style={{ height: '20rem' }} className=' w-full bg-white max-w-full job sm:w-11/12 rounded overflow-hidden mt-4 p-4 border-r border-l border-b border-darkGrey border-opacity-25 border-t hover:border-opacity-0 hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1 transform'>
                            <div className='flex justify-between items-center'>
                                <span className='flex'>
                                    <svg className="folder w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    <span className='font-medium ml-4'>
                                        {i.title}
                                    </span>
                                </span>
                                <a type='button' href={i.url} className=' text-black opacity-50 hover:opacity-100 ' target='_blank'>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="external-link w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>

                            <div className='mt-4'>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={i.work}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                title={<a href="https://ant.design">{item}</a>}
                                            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
                            <div className='mt-12 flex flex-wrap absolute bottom-0 mb-6 sm:mb-2'>
                                <Badge item={i.from} />
                            </div>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Works;