import React, {useState} from 'react';
import UserCard from '../User/UserCard';
import {Loader} from '../Icons/Icons';

const Active = ({name, data, arhiv}) => {
    const [activeDropdown, setActiveDropdown] = useState(null)
    return (
        <div className='Active'>
            <div className='ActiveName'>
                <span>{name}</span>
            </div>
            <div className='ActiveCards'>
                {
                    !data
                        ? (<Loader/>)
                        : (
                            !arhiv
                                ? (data.map((item) => {
                                    return <UserCard 
                                        key={item.id} 
                                        user={item} 
                                        activeDropdown={activeDropdown} 
                                        setActiveDropdown={setActiveDropdown}/>
                                }))
                                : (data.map((item) => {
                                    if (data == []) {
                                        return null
                                    }
                                    return <UserCard
                                        key={item.id}
                                        user={item}
                                        arhiv={true}
                                        activeDropdown={activeDropdown}
                                        setActiveDropdown={setActiveDropdown}/>;
                                }))
                        )
                }
            </div>
        </div>
    );
}

export default Active;
