import React from 'react';
import './UserPageStyle.css'
import { BackReturn } from '../Icons/Icons';

const HeadTitle = ({route}) => {
    return (
        <div className='head-title' onClick={route}>
            <BackReturn/>
            <span>Назад</span>
        </div>
    );
}

export default HeadTitle;
