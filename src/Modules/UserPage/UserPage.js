import React from 'react';
import HeadTitle from './head-title';
import UserForm from './UserForm';
import './UserPageStyle.css'
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const navigate = useNavigate();
    const handleRoute = () => {
        navigate(`/`);
      };
    return (
        <div className='UserPage'>
        <HeadTitle route={handleRoute}/>
        <UserForm/>
        </div>
    );
}

export default UserPage;
