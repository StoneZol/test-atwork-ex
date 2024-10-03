import React from 'react';
import DropdownPoint from './DropdownPoint';
import './Dropdown.css'

const Dropdown2 = ({onActivate}) => {
    return (
        <div className='Dropdown'>
            <DropdownPoint text={'Активировать'} func={onActivate}/>
        </div>
    );
}

export default Dropdown2;
