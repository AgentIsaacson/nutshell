import React from 'react';

export const Outline = (title, description, link) => {
    return (
        <div className='outline'>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link}>Send {title} a Nutshell Here</a>
        </div>
    );
}