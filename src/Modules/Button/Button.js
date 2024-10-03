import React from 'react';
import './ButtonStyle.css'

const Button = ({text, func, disable}) => {
    return (
        <button className='button'onClick={func} disabled={disable}><span>{text}</span></button>
    );
}

export default Button;
