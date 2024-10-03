import React, {useState} from 'react';
import './UserCardStyle.css'
import {More} from '../Icons/Icons';
import Dropdown from '../Dropdowns/Dropdown';
import Dropdown2 from '../Dropdowns/Dropdown2';
import { useNavigate } from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';
import {userDelete, userArhivated, userAdd} from '../../redux/sliceUsers';
import { setActiveDropdown, cleanActiveDropdown } from '../../redux/sliceDropdown';

const UserCard = ({user, arhiv}) => {
    const dispatch = useDispatch();
    const activeDropdownID = useSelector((state)=> state.dropdown.activeDropdownID)

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/user/${user.username}`);
        dispatch(cleanActiveDropdown())
      };

    const handleShowDropdown = () => {
        if (activeDropdownID === user.id){
            dispatch(cleanActiveDropdown());
        } else {
            dispatch(setActiveDropdown(user.id))
        }
    }

    const handleArchive = () => {
        dispatch(userArhivated(user.id))
        dispatch(cleanActiveDropdown())
    }

    const handleDelete = () => {
        dispatch(userDelete(user.id))
        dispatch(cleanActiveDropdown())
    }

    const handleActivate = () => {
        dispatch(userAdd(user.id))
        dispatch(cleanActiveDropdown())
    }

    return (
        <div
            className={`Card ${arhiv
                ? 'Card--archived'
                : ''}`}>
            <img src="https://picsum.photos/id/237/400/400" alt="" loading='lazy'/> {/* <img src="https://avatars.githubusercontent.com/u/61286515?v=4" alt=""/> */}
            <div className='Information'>
                <div className='UserInfo'>
                    <div className='User'>
                        <span className='UserName'>{user.username}</span>
                        <span className={`${activeDropdownID===user.id ? 'MoreActiv': ''}`} onClick={handleShowDropdown}><More/></span>
                    </div>
                    <span className='Company'>{user.company.name}</span>
                </div>
                <span className='City'>{user.address.city}</span>
            </div>
            {
                activeDropdownID === user.id
                    ? (
                        arhiv
                            ? (<Dropdown2 onActivate={handleActivate}/>)
                            : (<Dropdown onNavigate={handleEdit} onArchive={handleArchive} onDelete={handleDelete}/>)
                    )
                    : (<></>)
            }
        </div>
    );
}

export default UserCard;
