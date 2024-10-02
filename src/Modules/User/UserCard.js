import React, {useState} from 'react' ;
import './UserCardStyle.css'
import {More} from '../Icons/Icons';
import Dropdown from '../Dropdowns/Dropdown';
import Dropdown2 from '../Dropdowns/Dropdown2';

const UserCard = ({user, arhiv}) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const handleShowDropdown = () => {
        setShowDropdown(!showDropdown)
    }
    return (
        <div className={`Card ${arhiv ? 'Card--archived' : ''}`}>
            {/* <img src="https://picsum.photos/id/237/400/400" alt=""/> */}
            <img src="https://avatars.githubusercontent.com/u/61286515?v=4" alt=""/>
            <div className='Information'>
                <div className='UserInfo'>
                    <div className='User'>
                        <span className='UserName'>{user.name}</span><span onClick={handleShowDropdown}><More/></span>
                    </div>
                    <span className='Company'>{user.company}</span>
                </div>
                <span className='City'>{user.city}</span>
            </div>
            {showDropdown ? (arhiv ? (<Dropdown2/>):(<Dropdown/>)):(<></>)}
        </div>
    );
}

export default UserCard;
