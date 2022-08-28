import React from "react";
import "./ContactMe.css"
import contactImg from '../../Images/ContactPic.png'
import Copyright from '../Copyright'

export default function ContactMe() {
    return (
    <>
        <div className='contact-page-1'>
            <div className='contact-left-column'>
                <img src={contactImg} alt="" className='contact-img' />
            </div>
            <div className='contact-right-column'>
                <h1 className='contact-title'>Contact Me</h1>
                <h3 className='contact-desc'>
                    You can contact me through these social media links below.
                    I am a Software Developer, Web Developer, Graphic Designer,
                    Audio/Video Editor, and Author. I can discuss any questions 
                    you may have regarding this.  
                </h3>
                <div class="social-container">
                    <a href="https://github.com/architjain061001/"
                        target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/archit-jain-8135821aa/"
                        target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/architrjain"
                        target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <a href = 'https://drive.google.com/file/d/1wb9FZVAGiuFQho7doYXT1UY_YZSgGanL/view?usp=sharing//'
                target="_blank"
                rel="noreferrer">
                    <button className='resume'>View Resume</button>
                </a>
            </div>
        </div>
            <h1 className='inTouch'>Get in Touch</h1>
        <div className='contact-page-2'>
            <div className='contact-left-column-2'>                
                <div className='icon-section'>
                    <i className="fa-solid fa-phone" />
                    <a className="icon-text"
                    href="tel:+17815186948">  
                            <p>+1 781-518-6948</p>
                    </a>        
                    <a className="icon-text"
                    href="tel:+919833384587">  
                            <p>+91 9833384587</p>
                    </a> 
                </div>
                <div className='icon-section'>
                    <i className="fa-solid fa-envelope" />
                    <a className="icon-text"
                    href="mailto:architjain061001@gmail.com"
                    target="_blank"
                    rel="noreferrer">  
                            <p>architjain061001@gmail.com</p>
                    </a>        
                    <a className="icon-text"
                    href="mailto:archit.jain@tufts.edu"
                    target="_blank"
                    rel="noreferrer">  
                            <p>archit.jain@tufts.edu</p>
                    </a> 
                </div>
                <div className='icon-section'>
                    <i className="fa-solid fa-location-dot" />
                    <a className="icon-text"
                    href="https://goo.gl/maps/wxW2NbU79TEmDVKy7"
                    target="_blank"
                    rel="noreferrer">  
                        <p>World One, City View, Lower Parel, Mumbai, MA 400013, India</p>
                    </a>        
                </div>
            </div>
            <div className='contact-right-column-2'>
                <form action="https://formspree.io/f/myyvzzkb" method="POST">
                    <div className='name-email-field'>
                        <div class="field">
                            <label className='info-label' for="name"> Name: </label>
                            <input className='info-input' type="text" id="name" name="name" required/>
                            <small></small>
                        </div>
                        <div class="field">
                            <label className='info-label' for="email"> Email: </label>
                            <input className='info-input' type="text" id="email" name="email" required/>
                            <small></small>
                        </div>
                    </div>    
                    <div class="field">
                        <label className='info-label' for="subject">
                                Subject:
                        </label>
                        <input className='info-input' type="text" id="subject" name="subject" required/>
                        <small></small>
                    </div>
                    <div class="field">
                        <label className='info-label' for="message"> Message: </label>
                        <textarea className='message-input' type="text" name="message" resize="none" required/>
                    </div>
                    <div className='send-pos'>
                        <button type="submit" className="send"> Send </button>
                    </div>
                </form>
            </div>
        </div>
        <Copyright />
    </>      
    )
}