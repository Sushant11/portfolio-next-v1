import React from 'react';

const NextLayout = ({children}) => {
    return (
        <div className='antialiased w-7/12 lg:w-11/12 md:w-auto mx-auto px-2'>
            {children}
        </div>
    );
};

export default NextLayout;