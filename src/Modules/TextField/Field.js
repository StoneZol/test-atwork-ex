import React, {useState, useEffect} from 'react';
import './FieldStyle.css'
import {Exit} from '../Icons/Icons';
import { useDispatch } from 'react-redux';
import { setOriginalUser, updateUserField,resetUserEdit } from '../../redux/userEditSlice';

const Field = ({value = '', label, onChange,originalValue=''}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false)
    const dispatch = useDispatch();

    useEffect(()=>{
        setInputValue(value);
    },[setOriginalUser])

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue)
        if (onChange) {
            onChange(e.target.value);
        }
    };
    const handleReset = (e) => {
        e.preventDefault();
        setInputValue(originalValue)
        if (onChange) {
            onChange(originalValue);
        }
    };

    return (
        <div className='TextField'>
            <label className='TextField-Label'>{label}</label>
            <div className='TextField-Input__Box '                   >
                <input
                    className='TextField-Input'
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}/>   
                {isFocused && <div className='centredExit' onMouseDown={handleReset}><Exit/></div>}
            </div>
            {inputValue.length <1 && <span className='warning'>Обязательное поле!</span>}  
        </div>
    );
}

export default Field;
