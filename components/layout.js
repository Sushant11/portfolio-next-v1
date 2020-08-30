import React, { Fragment } from 'react';

const NextLayout = ({ children }) => {
    return (
        <Fragment>
            <div className='antialiased w-8/12 xl:w-3/4 lg:w-11/12 md:w-auto mx-auto px-2 tap-highlight'>
                {children}
            </div>
        </Fragment>
    );
};

export default NextLayout;