import React, { useState } from "react";
import './Projects.css'
import Copyright from "../Copyright";

import compression from '../../Images/Proj-Img/compression.png'
import calculator from '../../Images/Proj-Img/calculator.png'
import Avyrisk from '../../Images/Proj-Img/Avyrisk.png'
import Reveal from '../../Images/Proj-Img/Reveal.png'
import TASA from '../../Images/Proj-Img/Culture Week.png'
import Ramadan from '../../Images/Proj-Img/Ramadan.png'
import Multibagger from '../../Images/Proj-Img/Multibagger.png'
import Thumbnail3 from '../../Images/Proj-Img/Thumbnail3.png'
import Logo from '../../Images/Proj-Img/Logo1.png'

export default function Projects() {

    const [programmingInfo] = useState([
        {title: "AvyRisk", 
        desc: "Designed AvyRisk, an innovative app and website that empowers outdoor enthusiasts with real-time risk assessment for safer mountain adventures.", 
        src: Avyrisk, id: 1, href: "https://www.avyrisk.com/"},
        
        {title: "Machine Artihmetic", 
        desc: "Designed a lossy image compressor in C that reduces the image size to at least 1/4th of its original size.", 
        src: compression, id: 2},

        {title: "RPN Calculator", 
        desc: "Implemented a calculator in C++ that uses stack operations to perform artihmetic operations.", 
        src: calculator, id: 3},

        {title: "SquarExchange Logo", 
        desc: "Logo design for an EdTech company as a Marketing Director", 
        src: Logo, id: 7},
        
        {title: "SquarExchange Analysis", 
        desc: "Informational graphic for an EdTech company to promote its services", 
        src: Multibagger, id: 8},
        
        {title: "SquarExchange Advertisement", 
        desc: "Advertisement graphic to market the comapany's services on a large scale", 
        src: Thumbnail3, id: 9},

        {title: "TASA Big Little Event", 
        desc: "Promotional graphic for the annual event hosted by the largest south asian organization on campus", 
        src: Reveal, id: 4},
        
        {title: "TASA Culture Week", 
        desc: "Promotional graphic for the flagship annual event hosted with several other cultural organizations at Tufts", 
        src: TASA, id: 5},
        
        {title: "TASA Ramadan", 
        desc: "Promotional graphic for an annual cultural festival", 
        src: Ramadan, id: 6},
    ])
    
    return (
        <>
            <div className='projects-page'>
                <h1 className='projects-header'>Projects</h1>
                <h3 className='projects-sub-header'>Below are few of my projects, contact me to see more</h3>
                <div className='project-grid'>
                    {programmingInfo.map((proj) =>
                        <div className='project-layout' key={proj.id} >
                            <div className='project-layout-inner'>
                                <a href={proj.href} target="_blank">
                                    <img src={proj.src} alt="" className="proj-img"/>
                                </a>
                                <div className='project-layout-bottom'>
                                    <h1 className='project-title'> {proj.title} </h1>
                                    <h1 className='project-desc'> {proj.desc} </h1>
                                </div>
                            </div>
                        </div>  
                    )}
                </div>

            </div>
            <Copyright />
        </>
    )
}