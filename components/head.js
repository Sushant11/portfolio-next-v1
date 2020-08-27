import React from 'react';
import Head from 'next/head'

const head = () => {
    return (
        <Head>
            <title>Sushant Chitrakar</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48"></link>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
            />
            <script type='text/script' src='/static/js/script.js'></script>
        </Head>
    );
};

export default head;