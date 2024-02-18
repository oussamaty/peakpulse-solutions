import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/icons/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='#landing-section'>Home</a></li>
                <li className='nav-item'><a href='#about-section'>About</a></li>
                <li className='nav-item'><a href='#services-section'>Our Services</a></li>
                <li className='nav-item'><a href='#contact-section'>Contact Us</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#000000' }} />) : (<FaBars size={30} style={{ color: '#000000' }} />)}
            </div>
        </div>
    );
};

export default Navbar;
