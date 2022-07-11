import React, { useState } from 'react';
import { Dropdown } from './Dropdown'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 1400) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 1400) {
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    };
    
    return (
        <>
            <nav className='navbar'> 
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    ARCHIT JAIN
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/profile' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                    >
                        Profile
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/publications' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Publications
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contact-me' 
                        className='nav-links-mobile' 
                        onClick={closeMobileMenu}>
                        Contact Me 
                    </Link>
                </li>
            </ul>
            <Link to='/contact-me'>
                <button className='contact-button'>Contact Me</button>
            </Link>
            </nav>
        </>
    );
}

export default Navbar;