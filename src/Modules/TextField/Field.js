import React, {useState} from 'react';
import './FieldStyle.css'
import {Exit} from '../Icons/Icons';

const Field = ({placeholder, value, label}) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }
    return (
        <div className='TextField'>
            <label className='TextField-Label'>{label}</label>
            <div className='TextField-Input__Box'>
                <input
                    className='TextField-Input'
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}/>
                {isFocused && <Exit/>}
            </div>
        </div>
    );
}

export default Field;
