
import React from 'react';
import logo from '../../images/logo.png';
import Nav from '../Navigation/Nav';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo"/>
           <Nav></Nav>
        </div>
    );
};

export default Header;