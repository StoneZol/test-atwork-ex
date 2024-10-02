import React from 'react';
import './ButtonStyle.css'

const Button = ({text, func}) => {
    return (
        <button className='button' onClick={func}>{text}</button>
    );
}

export default Button;
