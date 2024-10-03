import React from 'react';
import DropdownPoint from './DropdownPoint';
import './Dropdown.css'

const Dropdown = ({onNavigate,onArchive, onDelete}) => {
    return (
        <div className='Dropdown'>
            <DropdownPoint text={'Редактировать'}func={onNavigate} />
            <DropdownPoint text={'Архивировать'} func={onArchive}/>
            <DropdownPoint text={'Скрыть'} func={onDelete}/>
        </div>
    );
}

export default Dropdown;
