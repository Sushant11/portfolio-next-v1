import React from 'react';

const Badge = ({ item }) => {
    return (
        <span className='text-xs rounded-lg bg-softGrey px-2 py-1 mr-1 my-1 opacity-75 cursor-default hover:bg-opacity-50 hover:opacity-100'>{item}</span>
    );
};

export default Badge;