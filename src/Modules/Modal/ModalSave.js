import React from 'react';
import { ChekedIcon, Exit } from '../Icons/Icons';
import './ModalStyle.css'
const ModalSave = ({show}) => {
    return (
        <div className='Modal'>
            <div className='Modal-Checked-box'>
                <span className='ChekedIcon'><ChekedIcon/></span>
                <span>Изменения сохранены!</span>
                <span className='FixExit'><Exit/></span>
            </div>
            
        </div>
    );
}

export default ModalSave;
