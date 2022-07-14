import React from "react";
import './Profile.css'
import Copyright from '../Copyright'
import ProgressBar from 'react-bootstrap/ProgressBar';
import profileImg from '../../Images/dp.jpeg'


export default function Profile() {
    return (        
        <div className='profile-page'>
            <div className='personal-attribute'>
                <h1 className='profile-header'>Profile</h1>
                <div className='personal-attribute-col'>
                    <div className='personal-column'>
                        <img src={profileImg} alt="" className='personal-img' />
                        
                    </div>
                    <div className='attribute-column'>
                        <div className='attribute'>   
                            <i className="fa-solid fa-laptop-code"/>
                            <h1 className='attribute-time'>10+</h1>
                            <h3 className='attribute-name'>Months of SWE Experience</h3>
                        </div>
                        <div className='attribute'>   
                            <i className="fa-solid fa-square-poll-vertical"/>
                            <h1 className='attribute-time'>2+</h1>
                            <h3 className='attribute-name'>Years of Marketing Experience</h3>
                        </div>
                        <div className='attribute'>   
                            <i className="fa-solid fa-code"/>
                            <h1 className='attribute-time'>8</h1>
                            <h3 className='attribute-name'>Programming Languages</h3>
                        </div>
                        <div className='attribute'>   
                            <i class="fa-solid fa-book"/>
                            <h1 className='attribute-time'>3</h1>
                            <h3 className='attribute-name'>Published Anthologies</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='edu-exp-column'>
                <div className='edu-column'>
                    <h1 className='edu-exp-title'>Education</h1>
                    
                     <div className='school'>
                        <div className='school-icon-name'>
                            <div className='school-icon-cover'>
                                <i className="fa-solid fa-user-graduate" />
                            </div>
                            <h2 className='school-name'>Tufts University</h2>
                        </div>
                        <div className='school-info'>
                            <div className='school-time-border'>
                                <p className='school-time'>2020-2023</p>
                            </div>
                            <h3 className='school-degree'>B.S in Computer Science / Major GPA: 3.81</h3>
                            <h3 className='school-degree'>Dean's List: Fall '20, Spring '21, Fall '21, Spring '22</h3>
                            <p className='school-desc'>
                                Activities and societies: JumboCode (Coding Projects for Non-profits), 
                                Tufts Association for South Asians (Cultural organisation),
                                Tamasha (Bollywood Fusion-Dance group)  
                            </p>
                            <p className='school-desc'>
                                Relevant Courses: Machine Structures and Assembly-language Programming, 
                                Programming Languages, Algorithms, Machine Learning, Intro to Software and Developer Tooling, 
                                Data Structures, Computation Theory, Linear Algebra, Discrete Mathematics, 
                                Entrepreneurship: Business Planning, Marketing, Finance  
                            </p>
                        </div>  
                    </div>

                     <div className='school'>
                        <div className='school-icon-name'>
                            <div className='school-icon-cover'>
                                <i className="fa-solid fa-user-graduate" />
                            </div>
                            <h2 className='school-name'>Emory University</h2>
                        </div>
                        <div className='school-info'>
                            <div className='school-time-border'>
                                <p className='school-time'>2019-2020</p>
                            </div>
                            <h3 className='school-degree'>Cumulative GPA: 3.85</h3>
                            <p className='school-desc'>
                                Activities and societies: Sigma Beta Rho (Fraternity), Project Shine of Emory University (Volunteer Organization),
                                Volunteer Emory (Volunteer Organization)     
                            </p>
                            <p className='school-desc'>
                                Relevant Courses: Intermediate Microeconomics, Calculus 2, Financial Accounting
                            </p>
                        </div>  
                    </div>

                    <div className='school'>
                        <div className='school-icon-name'>
                            <div className='school-icon-cover'>
                                <i className="fa-solid fa-user-graduate" />
                            </div>
                            <h2 className='school-name'>D.Y. Patil International School	</h2>
                        </div>
                        <div className='school-info'>
                            <div className='school-time-border'>
                                <p className='school-time'>2009-2019</p>
                            </div>
                            <h3 className='school-degree'>IB Diploma Programme, Cambridge IGCSE, Cambridge Checkpoint </h3>
                            <p className='school-desc'>
                                Activities and societies: DYMUN (Co-chair of the press), 
                                Inter-house Dramatics Competition (Supporting Actor and Audio-Visual Director), 
                                Infinity (Represented my school in the nationwide math competition)  
                            </p>
                            <p className='school-desc'>
                                Relevant Courses: Math HL, Computer Science HL, Economics HL
                            </p>
                        </div>  
                    </div>

                    <div className='school'>
                        <div className='school-icon-name'>
                            <div className='school-icon-cover'>
                                <i class="fa-solid fa-certificate"/>
                            </div>
                            <h2 className='school-name'>Certifications</h2>
                        </div>
                        <div className='school-info'>
                            <div className='school-time-border'>
                                <p className='school-time'>Until Present</p>
                            </div>
                            <p className='school-desc'>
                                Certificate of Excellence as the 'strategist' 
                                in the Digital Marketing Internship at Alter 
                                Ego Learning, 2020
                            </p>
                            <p className='school-desc'>
                                Learn Swift by CodeAcademy
                            </p>
                            <p className='school-desc'>
                                Sketching at Udemy
                            </p>
                        </div>  
                    </div>

                </div>
                <div className='exp-column'>
                    <h1 className='edu-exp-title'>Experience</h1>
                    <div className='company'>
                        <div className='company-icon-name'>
                            <div className='company-icon-cover'>
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h2 className='company-name'>Vidmob Inc.</h2>
                        </div>
                        <div className='company-info'>
                            <div className='company-time-border'>
                                <p className='company-time'>Jun 2022 - Aug 2022</p>
                            </div>
                            <h3 className='company-role'> Software Engineering Intern </h3>
                            <p className='company-desc'>
                                Software Engineer at Vidmob where I worked with a team 
                                to help innovate, improve, and maintain 
                                their flagship product "Agile Creative Studio” through full stack 
                                development using essential tools such as Redux, Javascript, 
                                CSS, SQL, and AWS.
                            </p>
                        </div>  
                    </div>
                    <div className='company'>
                        <div className='company-icon-name'>
                            <div className='company-icon-cover'>
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h2 className='company-name'>Tufts JumboCode</h2>
                        </div>
                        <div className='company-info'>
                            <div className='company-time-border'>
                                <p className='company-time'>Sep 2021 - May 2022</p>
                            </div>
                            <h3 className='company-role'> Student Developer </h3>
                            <p className='company-desc'>
                                Student developer at JumboCode, a volunteer organization, where I 
                                worked with a team of 10 students to develop a website for a 
                                non-profit organization – Bergen Family Center – to help organize their events
                            </p>
                        </div>  
                    </div>
                    <div className='company'>
                        <div className='company-icon-name'>
                            <div className='company-icon-cover'>
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h2 className='company-name'>Tufts College Community Research Center </h2>
                        </div>
                        <div className='company-info'>
                            <div className='company-time-border'>
                                <p className='company-time'>Sep 2021 - Dec 2021</p>
                            </div>
                            <h3 className='company-role'> Student Consultant </h3>
                            <p className='company-desc'>
                                Worked and coordinated with a team of 5 students 
                                to implement a marketing campaign and a comprehensive 
                                marketing plan for an organization that focuses on providing grants 
                                and opportunities for community based participatory research to Tufts 
                                students
                            </p>
                        </div>  
                    </div>
                    <div className='company'>
                        <div className='company-icon-name'>
                            <div className='company-icon-cover'>
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h2 className='company-name'>Rossari Biotech Ltd.</h2>
                        </div>
                        <div className='company-info'>
                            <div className='company-time-border'>
                                <p className='company-time'>Jun 2021 - Jul 2021</p>
                            </div>
                            <h3 className='company-role'> Marketing Intern </h3>
                            <p className='company-desc'>
                                Marketing Intern at a Biotech organization where I
                                conducted surveys, directed market research, 
                                analyzed product performance, and devised 
                                reports about the company’s brand image, 
                                performance, and customer feedback
                            </p>
                        </div>  
                    </div>
                    <div className='company'>
                        <div className='company-icon-name'>
                            <div className='company-icon-cover'>
                                <i class="fa-solid fa-briefcase"></i>
                            </div>
                            <h2 className='company-name'>SquarExchange</h2>
                        </div>
                        <div className='company-info'>
                            <div className='company-time-border'>
                                <p className='company-time'>Jun 2020 - Aug 2020</p>
                            </div>
                            <h3 className='company-role'> Marketing Director </h3>
                            <p className='company-desc'>
                                Delegated and coordinated tasks with the marketing team, 
                                Devised marketing strategies, designed logos and graphics, 
                                Produced marketing videos, and edited online lessons to 
                                help establish an EdTech Startup
                            </p>
                        </div>  
                    </div>
                </div>
            </div>
            <h1 className='skills-title'>Skills</h1>
            <div className='skills'>
                <div className='skill-sec'>
                    <h3 className='skill-name'>C++</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' 
                                     now='90' label='90%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>C</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='85' label='85%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>Java</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='70' label='70%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>Python</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='60' label='60%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>Swift</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='60' label='60%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>Javascript</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='80' label='80%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>CSS</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='80' label='80%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>HTML</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='80' label='80%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>React</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='70' label='70%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>Photoshop</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='70' label='70%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>FCPX</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='70' label='70%' max='100'/>      
                    </div>
                </div>    
                <div className='skill-sec'>
                    <h3 className='skill-name'>MS Office</h3>
                    <div className='skill-level'>
                        <ProgressBar className='skill-level' now='90' label='90%' max='100'/>      
                    </div>
                </div>    

            </div>
                {/* accessToken: 'IGQVJXYlY4akFfRzFjaTVhSGtlazNYQVJkUEpiRnFBM2pEemFQTnh2UDlJWURUTTQtRzZANMDgybGczNWpER0tEQmM3YUtRZAUwtY3ZAMVXBsd0lBa1FaOFAyeDJBRXpsYmI0bmlfYWNSR25URkgwZAV9zcgZDZD', */}
        <Copyright />
        </div>
    )
}