import React from "react";
import "./ContactMe.css"
import contactImg from '../../Images/dp.PNG'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faFacebook,
    faInstagram,
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";


export default function ContactMe() {
    return (
        <div className='contact-page'>
            <div className='contact-left-column'>
                <img src={contactImg} alt="" className='contact-img' />
            </div>
            <div className='contact-right-column'>
                <h1 className='contact-title'>Contact Me</h1>
                <br />
                <h3 className='contact-desc'>
                    You can contact me through these social media links below.
                    I am a Software Developer, Web Developer, Graphic Designer,
                    Audio/Video Editor, and Author. I can discuss any questions 
                    you may have regarding this.  
                </h3>
                <div class="social-container">
                    <a href="https://github.com/architjain061001/"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://twitter.com/architjain38"
                        className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>
                    <a href="https://www.linkedin.com/in/archit-jain-8135821aa/"
                        className="linkedln social">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a href="https://www.facebook.com/architrjain/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>
                    <a href="https://www.instagram.com/architrjain"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                </div>
                <a href = 'https://drive.google.com/file/d/1wb9FZVAGiuFQho7doYXT1UY_YZSgGanL/view?usp=sharing//'
                   className='resume-container'>
                    <button className='resume'>View Resume</button>
                </a>
            </div>
        </div>  
    )
}