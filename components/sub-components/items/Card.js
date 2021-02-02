import React from 'react';

import githubIcon from '../../../public/assets/github.svg'
import Badge from './Badge';

const Card = ({ item }) => {
    const { title, desc, github, external, tech } = item

    return (
        <div className='w-1/4 bg-white max-w-full h-64 md:w-2/4 xl:w-4/12 sm:w-10/12 rounded overflow-hidden m-4 mt-4 p-4 border-r border-l border-b border-darkGrey border-opacity-25 border-t hover:border-opacity-0 hover:shadow-lg transition ease-in-out duration-300 hover:-translate-y-1 transform'>
            <div className='flex justify-between items-center'>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="folder w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>                <span className='flex'>
                    <a type='button' href={github} className='opacity-50 hover:opacity-100' target='_blank'>
                        <img src={githubIcon} alt='Github' className="w-4 h-4 mr-4"></img>
                    </a>
                    <a type='button' href={external} className=' text-black opacity-50 hover:opacity-100 ' target='_blank'>
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="external-link w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </span>
            </div>
            <div className='my-10 cursor-default'>
                <h4 className='font-medium'>
                    {title}
                </h4>
                <p className='text-xs text-darkGrey mt-2'>
                    {desc}
                </p>
            </div>

            <div className='mt-12 flex flex-wrap absolute bottom-0 mb-6 sm:mb-2'>
                {tech.map((item,i) => (
                    <Badge item={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Card;