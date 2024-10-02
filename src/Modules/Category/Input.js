import React from 'react';
import './InputStyle.css'

const Input = ({placeholder, value}) => {
    return (
        <input
            type="input"
            className="category-input"
            placeholder={placeholder}
            value={value}/>
    );
}

export default Input;

