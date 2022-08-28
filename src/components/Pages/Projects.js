import React, { useState } from "react";
import './Projects.css'

import compression from '../../Images/Proj-Img/compression.webp'
import calculator from '../../Images/Proj-Img/calculator.png'
import splendor from '../../Images/Proj-Img/splendor.jpeg'
import Reveal from '../../Images/Proj-Img/Reveal.png'
import TASA from '../../Images/Proj-Img/Culture Week.png'
import Ramadan from '../../Images/Proj-Img/Ramadan.png'
import Multibagger from '../../Images/Proj-Img/Multibagger.png'
import Thumbnail3 from '../../Images/Proj-Img/Thumbnail3.png'
import Logo from '../../Images/Proj-Img/Logo1.png'

export default function Projects() {
    function ProjectDetails(props) {
        return <div className= {imageView ? 'project-detailed-view' : 'project-detailed-view-closed'}>                    
            <i className="fa-solid fa-x" onClick={closeImageView}/>
            <i className="fa-solid fa-arrow-left"/>
            <i className="fa-solid fa-arrow-right"/>
            <h1 className='project-detailed-title'> {props.title} </h1>
            <div className='project-detailed-laptop-view'>
                <div className='project-detailed-sec'>
                    <div className='project-detailed-attribute-sec'>
                        <i className="fa-solid fa-building"/>
                        <h1 className='project-detailed-attribute-title'> Client: </h1>
                        <h1 className='project-detailed-attribute-desc'> {props.client} </h1>
                    </div>
                    
                    <div className='project-detailed-attribute-sec'>
                        <i className="fa-solid fa-microchip"></i>
                        <h1 className='project-detailed-attribute-title'> Technologies: </h1>
                        <h1 className='project-detailed-attribute-desc'> {props.technologies} </h1>
                    </div>
                    
                    <div className='project-detailed-attribute-sec'>
                        <i className="fa-solid fa-file"/>
                        <h1 className='project-detailed-attribute-title'> Description: </h1>
                        <p className='project-detailed-attribute-desc'> 
                            {props.desc}
                        </p>
                    </div>
                </div>
                <img src={props.img} alt="" className='project-detailed-image' />
            </div>
        </div>   
    } 
    
    const [imageView, setView] = useState(false);
    const openImageView = () => {
        setView(true);
    }
    const closeImageView = () => setView(false);

    const [projInfo] = useState([
        {title: "Machine Artihmetic", desc: "Lossy image compressor", src: compression, id: 1},
        {title: "RPN Calculator", desc: "Calculator implemented using Stack", src: calculator, id: 2},
        {title: "Splendor", desc: "Classic board game Splendor ", src: splendor, id: 3},
        {title: "TASA Big Little Event", desc: "Annual TASA event", src: Reveal, id: 4},
        {title: "TASA Culture Week", desc: "Annual culture week event", src: TASA, id: 5},
        {title: "TASA Ramadan", desc: "Graphic for Ramadan", src: Ramadan, id: 6},
        {title: "SquarExchange Logo", desc: "Logo design for EdTech company", src: Logo, id: 7},
        {title: "SquarExchange Analysis", desc: "Informational graphic", src: Multibagger, id: 8},
        {title: "SquarExchange Advertisement", desc: "Advertisement graphic", src: Thumbnail3, id: 9},
    ])
    
    return (
        <>
            <div className='projects-page'>
                <h1 className='projects-header'>Projects</h1>
                <h3 className='projects-sub-header'>Below are few of my projects, contact me to see more</h3>

                <div className='project-grid'>
                    {projInfo.map((proj) =>
                        <div className='project-layout' key={proj.id} >
                            <div className='project-layout-inner'>
                                <img src={proj.src} alt="" className="proj-img" onClick={openImageView}/>
                                <div className='project-layout-bottom'>
                                    <h1 className='project-title'> {proj.title} </h1>
                                    <h1 className='project-desc'> {proj.desc} </h1>
                                </div>
                            </div>
                            <h3 className='proj-text'>Click to view more</h3> 
                        </div>  
                    )}
                </div>
                <ProjectDetails title="Machine Artihmetic" client="Tufts University" technologies="C"
                                desc="Designed a lossy image compressor that reduces the image size 
                                    to at least half of its original size."
                                img={compression}/>
            </div>
        </>
    )
}




{/* <div className={compressionView ? 'project-compression-blur-sec' : 'no-blur'}
                                        onClick={closeCompression}/>
                        <div className={compressionView ? 'project-compression-info-sec' : 'none'}>
                            <img src={compression} alt="" className='project-info-img' />
                            <i className="fa-solid fa-x" 
                               onClick={closeCompression}/>
                            <div className='project-info-text'>
                                <div className='project-info-attribute'>
                                    <h1 className='project-info-title'> Project Name: </h1>
                                    <h1 className='project-info-title-desc'> Machine Artihmetic </h1>
                                </div>
                                <div className='project-info-attribute'>
                                    <h1 className='project-info-title'> Client: </h1>
                                    <h1 className='project-info-title-desc'> Tufts University </h1>
                                </div>
                                <div className='project-info-attribute'>
                                    <h1 className='project-info-title'> Technologies: </h1>
                                    <h1 className='project-info-title-desc'> C </h1>
                                </div>
                                <div className='project-info-attribute'>
                                    <h1 className='project-info-title'> Description: </h1>
                                    <p className='project-info-title-desc'> 
                                        Designed a lossy image compressor that 
                                        reduces the image size to at least 
                                        half of its original size.   
                                    </p>
                                </div>
                            </div>
                        </div> */}



        //                 <div className={CalculatorView ? 'project-calculator-blur-sec' : 'no-blur'}
        //                 onClick={closeCalculator}/>
        // <div className={CalculatorView ? 'project-calculator-info-sec' : 'none'}>
        //     <img src={calculator} alt="" className='project-info-img' />
        //     <i className="fa-solid fa-x" 
        //        onClick={closeCalculator}/>
        //     <div className='project-info-text'>
        //         <div className='project-info-attribute'>
        //             <h1 className='project-info-title'> Project Name: </h1>
        //             <h1 className='project-info-title-desc'> RPN Calculator </h1>
        //         </div>
        //         <div className='project-info-attribute'>
        //             <h1 className='project-info-title'> Client: </h1>
        //             <h1 className='project-info-title-desc'> Tufts University </h1>
        //         </div>
        //         <div className='project-info-attribute'>
        //             <h1 className='project-info-title'> Technologies: </h1>
        //             <h1 className='project-info-title-desc'> C++ </h1>
        //         </div>
        //         <div className='project-info-attribute'>
        //             <h1 className='project-info-title'> Description: </h1>
        //             <p className='project-info-title-desc'> 
        //                 Implemented a calculator that uses stack operations
        //                 to perform artihmetic operations and hold data 
        //                 of the intermediate values to be used for further
        //                 calculations  
        //             </p>
        //         </div>
        //     </div>
        // </div>

//         <div className={SplendorView ? 'project-splendor-blur-sec' : 'no-blur'}
//         onClick={closeSplendor}/>
// <div className={SplendorView ? 'project-splendor-info-sec' : 'none'}>
// <img src={splendor} alt="" className='project-info-img' />
// <i className="fa-solid fa-x" 
// onClick={closeSplendor}/>
// <div className='project-info-text'>
// <div className='project-info-attribute'>
//     <h1 className='project-info-title'> Project Name: </h1>
//     <h1 className='project-info-title-desc'> Splendor </h1>
// </div>
// <div className='project-info-attribute'>
//     <h1 className='project-info-title'> Client: </h1>
//     <h1 className='project-info-title-desc'> Tufts University </h1>
// </div>
// <div className='project-info-attribute'>
//     <h1 className='project-info-title'> Technologies: </h1>
//     <h1 className='project-info-title-desc'> C++ </h1>
// </div>
// <div className='project-info-attribute'>
//     <h1 className='project-info-title'> Description: </h1>
//     <p className='project-info-title-desc'> 
//         Implemented the back-end implementation 
//         for the classic board game splendor using 
//         C++
//     </p>
// </div>
// </div>
// </div>


{/* <div className={TASA1 ? 'project-TASA1-blur-sec' : 'no-blur'}
onClick={closeTASA1}/>
<div className={TASA1 ? 'project-TASA1-info-sec' : 'none'}>
<img src={Bingo} alt="" className='project-info-img' />
<i className="fa-solid fa-x" 
onClick={closeTASA1}/>
<div className='project-info-text'>
<div className='project-info-attribute'>
<h1 className='project-info-title'> Project Name: </h1>
<h1 className='project-info-title-desc'> TASA Big Little Event </h1>
</div>
<div className='project-info-attribute'>
<h1 className='project-info-title'> Client: </h1>
<h1 className='project-info-title-desc'> Tufts Association of South Asians </h1>
</div>
<div className='project-info-attribute'>
<h1 className='project-info-title'> Technologies: </h1>
<h1 className='project-info-title-desc'> Adobe Photoshop </h1>
</div>
<div className='project-info-attribute'>
<h1 className='project-info-title'> Description: </h1>
<h1 className='project-info-title-desc'> TASA Event Graphic </h1>
</div>
</div>
</div> */}