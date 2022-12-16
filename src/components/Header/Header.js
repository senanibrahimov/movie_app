import React from 'react';
import './Header.css';
import logo from './logo.png'

export function Header (){
    return(
        <div className='main'>
            <div className='heading'>
                <div className='logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <h2>Cinema City</h2>
            </div>
        </div>
    );
}