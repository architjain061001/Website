import React from "react";
import "./AboutMe.css"
import Copyright from '../Copyright'
import dp from '../../Images/dp.jpeg'
import test1 from '../../Images/test-1.jpeg'
import test2 from '../../Images/test-2.png'

function AboutMe() {
    return (
      <>
        <div className="about-page">  
          <div className="about-left-section">
              <h2 className="intro">Hello, I'm</h2>
              <h1 className="name">Archit Jain</h1>
              <div class="about-social-container">
                    <a className='social-object'
                       href="https://github.com/architjain061001/">
                      <i class="fa-brands fa-github"></i>
                      <h3 className='object-name'>Github</h3>
                    </a>
                    <a className='social-object'
                       href="https://twitter.com/architjain38">
                      <i class="fa-brands fa-twitter"></i>
                      <h3 className='object-name'>Twitter</h3>
                    </a>
                    <a className='social-object'
                       href="https://www.linkedin.com/in/archit-jain-8135821aa/">
                      <i class="fa-brands fa-linkedin"></i>
                      <h3 className='object-name'>LinkedIn</h3>
                    </a>
                    <a className='social-object'
                       href="https://www.facebook.com/architrjain/">
                      <i class="fa-brands fa-facebook"></i>
                      <h3 className='object-name'>Facebook</h3>
                    </a>
                    <a className='social-object'
                       href="https://www.instagram.com/architrjain">
                      <i class="fa-brands fa-instagram"></i>
                      <h3 className='object-name'>Instagram</h3>
                    </a>
                </div>
          </div>
          <div className="about-right-section">
            <img src={dp} alt="" className="about-img" />
          </div>        
        </div>
        <div className='service-page'>
          <h1 className='service-page-subtitle'>Services I can offer</h1>
          <h1 className='service-page-title'>My Services</h1>
          <div className='services'>
            <div className='service-sec'>
              <i className="fa-solid fa-terminal"></i>
              <h1 className='service-title'> Programming </h1>
              <p className='service-desc'> 
                With months of software experience and pursuing it as a major
                I could help you code various forms of projects in 8 different
                programming languages
              </p>
            </div>

            <div className='service-sec'>
              <i className="fa-brands fa-css3-alt"></i>
              <h1 className='service-title'> Web Design </h1>
              <p className='service-desc'> 
                You have a stunning personality? So, why not portray it through your 
                website? With my skill in graphic design and personal projects I could
                help you sketch a website for all your services 
              </p>
            </div>
            
            <div className='service-sec'>
              <i className="fa-solid fa-share-nodes"></i>
              <h1 className='service-title'> Digital Marketing </h1>
              <p className='service-desc'> 
                With experience in three marketing internships, I could help 
                you find the secret formula to achieve your target audience goals  
              </p>
            </div>
            
            <div className='service-sec'>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <h1 className='service-title'> Graphic Design </h1>
              <p className='service-desc'> 
                Need graphics to market your business? I could help construct 
                some stunning designs for your services 
              </p>
            </div>
            
            <div className='service-sec'>
              <i className="fa-solid fa-clapperboard"></i>
              <h1 className='service-title'> Audio-Video Compostion </h1>
              <p className='service-desc'> 
                Want to give your users an experience before they try your 
                product? I can help compose videos that will explain your 
                idea within minutes to your user
              </p>
            </div>
            
          </div>
        </div>
        <div className='testimonials'>
          <h2 className='test-sub-title'> What my employers think </h2>
          <h1 className='test-title'> Testimonials </h1>
          <div className='testimonials-section'>
              <div className='testimonial-block'>
                  <div className='name-role-img'>
                    <div className='test-img-sec'>
                      <img img src={test1} alt="" className="test-img" />
                    </div>
                    <div className='name-role'>
                      <h3 className='test-name'>Abhay Valsangkar</h3>
                      <h3 className='test-role'>Director, Alter Ego Learning</h3>
                    </div>
                  </div>
                  <p className='test-desc'>
                  We found him as a pleasant and charming personality. He was 
                  honest, hardworking, and carried out his duties much to our 
                  satisfaction. We believe him to be an excellent and flexible 
                  choice for anyone. His Association with our company was very 
                  fruitful and we wish him good luck for all future endeavors 
                  and would like to recommend him to any prospective Employer.
                  </p>
              </div>
              <div className='testimonial-block'>
              <div className='name-role-img'>
                    <div className='test-img-sec'>
                      <img img src={test2} alt="" className="test-img" />
                    </div>
                    <div className='name-role'>
                      <h3 className='test-name'>Vividh Raurale</h3>
                      <h3 className='test-role'>Manager, Rossari Biotech Ltd.</h3>
                    </div>
                  </div>
                  <p className='test-desc'>
                  He is hardworking and has worked diligently. He was able to understand the
                  requirements of his job roles and responsibilities. He mingles well with the
                  people around and completes the work on a timely basis.
                  </p>
              </div>
          </div>
        </div>
        <Copyright />
      </>  
    );
};

export default AboutMe;