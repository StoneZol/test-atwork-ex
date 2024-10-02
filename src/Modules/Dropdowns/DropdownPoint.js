import React from 'react';

const DropdownPoint = ({text, func}) => {
    return (
        <div className='DropDown-Point__Box' onClick={func}>
            <span className='Dropdown-Point'>
                {text}
            </span>
        </div>
    );
}

export default DropdownPoint;
