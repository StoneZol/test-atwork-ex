import React from 'react';
import './PageStyle.css'
import Active from './Active';

const Page = () => {
    const users = [
        {
          id:'1',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }, {id:'2',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }, {id:'3',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }, {id:'4',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }, {id:'5',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }, {id:'6',
            name: 'КаменьЗол',
            company: 'HouseLTD',
            city: 'Новороссийск'
        }
    ]
    return (
        <div className='ActivePage'>
            <Active name={'Активные'}data={users}/>

        </div>
    );
}

export default Page;
