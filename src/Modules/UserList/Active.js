import React ,{useEffect}from 'react';
import UserCard from '../User/UserCard';
import { Loader } from '../Icons/Icons';

const Active = ({name,data}) => {
    useEffect(() => {

    }, [data])
    return (
        <div className='Active'>
            <div className='ActiveName'>
                <span>{name}</span>
            </div>
            <div className='ActiveCards'>
                {!data? (<Loader/>)
                :(
                    data.map((item) => {
                        return <UserCard key={item.id} user={item} />;
                    })
                )
                }
            </div>
        </div>
    );
}

export default Active;
