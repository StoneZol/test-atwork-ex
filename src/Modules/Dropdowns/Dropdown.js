import React from 'react';
import DropdownPoint from './DropdownPoint';
import './Dropdown.css'

const Dropdown = () => {
    return (
        <div className='Dropdown'>
            <DropdownPoint text={'Редактировать'}/>
            <DropdownPoint text={'Архивировать'}/>
            <DropdownPoint text={'Скрыть'}/>
        </div>
    );
}

export default Dropdown;
