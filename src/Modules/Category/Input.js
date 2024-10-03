import React,{useState} from 'react';
import './InputStyle.css'

const Input = ({value, route, }) => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(true)
    }

    return (
        <div className={`category-input ${active? 'category--active' : ''}`} onClick={handleClick}><span>{value}</span></div>
    );
}

export default Input;

