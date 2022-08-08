import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css' 

function Navbar() {
    
    var lastScrollTop; 
    var navbar = document.querySelector('.navbar'); 

    window.addEventListener('scroll', function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){ 
            navbar.style.top='-10vh';
        }
        else{
            navbar.style.top='0vh';
        }
        lastScrollTop = scrollTop; 
    });
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'> 
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    &lt; Archit Jain /&gt;
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/profile' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
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
                <li className='nav-item'>
                    <Link to='/publications' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Publications
                    </Link>
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