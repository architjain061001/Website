import React from "react";
import './Education.css'
import { Box } from "@mui/system";
import tufts from '../../Images/tufts.webp';
import emory from '../../Images/Emory.jpg';


import Cplus from '../../Images/Skills/c++.svg';
import C from '../../Images/Skills/C.png';
import java from '../../Images/Skills/java.png';
import python from '../../Images/Skills/python.png';
import swift from '../../Images/Skills/swift.png';
import javascript from '../../Images/Skills/javascript.png';
import css from '../../Images/Skills/css.png';
import react from '../../Images/Skills/react.png';



export default function Education() {
    return (        
        <div className='educationbackground'>
            <h1 className='edutitle'>Education</h1>
            <Box className='educomponent'>
                <div className="wrapper">
                    <div className='left-wrapper'>
                        <h1 className='name1'>Tufts University</h1>
                        <h2 className='name2'> Bachelors in Computer Science </h2>
                        <h3 className='name3'>
                            May 2020 - May 2023	     
                        </h3>
                        <p className='name3'>
                            Major GPA: 3.81   		     
                        </p>
                        <p className='content'>
                            Dean’s List: Fall ‘20, Spring ‘21, Fall ‘22, Spring ‘22
                        </p>
                        <p className='content'>
                            Relevant Courses: Machine Structures and Assembly-language Programming, 
                            Programming Languages, Algorithms, Machine Learning, Intro to Software and Developer Tooling, 
                            Data Structures, Computation Theory, Linear Algebra, Discrete Mathematics, 
                            Entrepreneurship & Business Planning, Entrepreneurial Marketing, Entrepreneurial Finance 
                        </p>
                        <p className='content'>
                            Activities and societies: JumboCode (Coding Projects for non-profits around the country), 
                            Tufts Association for South Asians (Cultural organisation at Tufts),
                            Tamasha (Fusion-Dance group)    
                        </p>
                        <br />
                    </div>
                    <div className='right-wrapper'>
                        <img src={tufts} alt="" className="schoolimg" />
                    </div>
                </div>
            </Box>
            <br />
            <Box className='educomponent'>
                <div className="wrapper">
                    <div className='left-wrapper'>
                        <h1 className='name1'>Emory University</h1>
                        <h2 className='name2'> Bachelors in Computer Science </h2>
                        <h3 className='name3'>
                            August 2019 - May 2020	     
                        </h3>
                        <p className='name3'>
                            Cumulative GPA: 3.85		     
                        </p>
                        <p className='content'>
                            Relevant Courses: Intermediate Microeconomics, Calculus 2, Intro to Macro, Financial Accounting
                        </p>
                        <p className='content'>
                            Activities and societies: Sigma Beta Rho (Fraternity), Project Shine of Emory University (Volunteer Organization),
                            Volunteer Emory (Volunteer Organization)    
                        </p>
                        <br />
                    </div>
                    <div className='right-wrapper'>
                        <img src={emory} alt="" className="schoolimg" />
                    </div>
                </div>
            </Box>
            <br />
            <Box className='educomponent'> 
                <h1 className='name1'>Tufts University</h1>
                <h2 className='name2'> Bachelors in Computer Science </h2>
                <p className='content'>
                    Major GPA: 3.81, Dean’s List: Fall ‘20, Spring ‘21, Fall ‘22, Spring ‘22		     
                    
                </p>
                <p className='content'>
                    Relevant Courses: Machine Structures and Assembly-language Programming, 
                    Programming Languages, Algorithms, Machine Learning, Intro to Software and Developer Tooling, 
                    Data Structures, Computation Theory, Linear Algebra, Discrete Mathematics, 
                    Entrepreneurship & Business Planning, Entrepreneurial Marketing, Entrepreneurial Finance 
                </p>
                <br />
            </Box>
            <br />
            <h1 className='edutitle'>Programming Languages</h1>
            <div className='skills'>
                <div>
                    <img src={Cplus} alt="" className="langimg" /> 
                    <p className="langimgtext"> C++ </p>        
                </div>
                <div>
                    <img src={C} alt="" className="langimg" /> 
                    <p className="langimgtext"> C </p>        
                </div>
                <div>
                    <img src={java} alt="" className="langimg" /> 
                    <p className="langimgtext"> Java </p>        
                </div>
                <div>
                    <img src={python} alt="" className="langimg" /> 
                    <p className="langimgtext"> Python </p>        
                </div>
                <div>
                    <img src={swift} alt="" className="langimg" /> 
                    <p className="langimgtext"> Swift </p>        
                </div>
                <div>
                    <img src={javascript} alt="" className="langimg" /> 
                    <p className="langimgtext"> Javascript </p>        
                </div>
                <div>
                    <img src={css} alt="" className="langimg" /> 
                    <p className="langimgtext"> CSS </p>        
                </div>
                <div>
                    <img src={react} alt="" className="langimg" /> 
                    <p className="langimgtext"> React </p>        
                </div>
            </div>
            <br />
                {/* accessToken: 'IGQVJXYlY4akFfRzFjaTVhSGtlazNYQVJkUEpiRnFBM2pEemFQTnh2UDlJWURUTTQtRzZANMDgybGczNWpER0tEQmM3YUtRZAUwtY3ZAMVXBsd0lBa1FaOFAyeDJBRXpsYmI0bmlfYWNSR25URkgwZAV9zcgZDZD', */}
        </div>
    )
}