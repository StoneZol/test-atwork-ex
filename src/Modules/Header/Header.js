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
                    <Like/><Bell/>
                    </div>
                    <div className='NameFoto'>
                        <img src="https://picsum.photos/id/237/200/300" alt="" />
                        <span>Ivan224</span>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
