import React from 'react';

export const Outline = (title, description) => {
    return (
        <div className='outline'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}