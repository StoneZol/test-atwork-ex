import React from 'react';
import './HeaderStyle.css'
import { Logo, Bell, Like } from '../Icons/Icons';

const Header = ({user}) => {
    return (
        <header>
            <div className='HeaderAll'>
                <div className='Logo'>
                    <Logo/>
                </div>
                <div className='registeredMenu'>
                    <div className='registeredMenu-Solid'>
                    {user ?(<><Like/><Bell/></>):(<></>)}
                    </div>
                    <div className='NameFoto'>
                    {user ? (<><img src="https://avatars.githubusercontent.com/u/61286515?v=4" alt=""/>
                         <span>{user.name}</span></>):(<span>Войти</span>)}
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
