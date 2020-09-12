import React, { Fragment } from 'react';

import Intro from './sub-components/Intro';
import Works from './sub-components/Works';
import Experience from './sub-components/Experience';
import Contact from './sub-components/Contact';
import GoTop from './sub-components/BackToTop';

const main = () => {
    return (
        <Fragment>
            <Intro />
            <Works />
            <Experience />
            <Contact />
            <GoTop/>
        </Fragment>
    );
};

export default main;