import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css' 

function Navbar() {
    var lastScrollTop; 
    var navbar = document.getElementById("main"); 

    window.addEventListener('load', function(){
        var location = window.location.pathname;
        if(location === "/") {
            if(navbar != null) {
                var current1 = navbar.getElementsByClassName("about-me-link");
                current1[0].className += " active";
            }
        }
        else if(location === "/profile") {
            if(navbar != null) {
                var current2 = navbar.getElementsByClassName("profile-link");
                current2[0].className += " active";
            }
        }
        else if(location === "/projects") {
            if(navbar != null) {
                var current3 = navbar.getElementsByClassName("projects-link");
                current3[0].className += " active";
            }
        }
        else if(location === "/publications") {
            if(navbar != null) {
                var current4 = navbar.getElementsByClassName("publications-link");
                current4[0].className += " active";
            }
        }
        else if(location === "/contact-me") {
            if(navbar != null) {
                var current5 = navbar.getElementsByClassName("contact-link");
                current5[0].className += " active";
            }
        }
    })

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

    if (navbar != null) {
        // Get all buttons with class="btn" inside the container
        var btns = navbar.getElementsByClassName("nav-link-fade-up");

        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        var contactbtn = navbar.getElementsByClassName("contact-button");
        contactbtn[0].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
        
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar' id="main"> 
                <Link to='/' className='navbar-logo' onClick={() => window.reload()}>
                    &lt; Archit Jain /&gt;
                </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' 
                        className='nav-links nav-link-fade-up about-me-link' 
                        onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/profile' 
                        className='nav-links nav-link-fade-up profile-link' 
                        onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/projects' 
                        className='nav-links nav-link-fade-up projects-link' 
                        onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/publications' 
                        className='nav-links nav-link-fade-up publications-link' 
                        onClick={closeMobileMenu}>
                        Publications
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-me' 
                        className='nav-links-mobile nav-link-fade-up contact-link' 
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