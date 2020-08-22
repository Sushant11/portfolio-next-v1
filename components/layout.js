import React from 'react';

const NextLayout = ({ children }) => {
    return (
        <div className='antialiased w-3/5 xl:w-3/4 lg:w-11/12 md:w-auto mx-auto px-2 tap-highlight'>
            {children}
        </div>
    );
};

export default NextLayout;