import React from 'react';
import Head from 'next/head'

const head = () => {
    return (
        <Head>
            <title>Sushant Chitrakar</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <script src='../utils/script.js'></script>
        </Head>
    );
};

export default head;