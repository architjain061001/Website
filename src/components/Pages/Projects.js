import React, { useState } from "react";
import './Projects.css'

import Multibagger from '../../Images/Proj-Img/Multibagger.png'
import Thumbnail3 from '../../Images/Proj-Img/Thumbnail3.png'
import Logo from '../../Images/Proj-Img/Logo1.png'
import TASA from '../../Images/Proj-Img/Culture Week.png'
import Bingo from '../../Images/Proj-Img/Reveal.png'
import Movie from '../../Images/Proj-Img/Ramadan.png'
import compression from '../../Images/Proj-Img/compression.webp'
import calculator from '../../Images/Proj-Img/calculator.png'

export default function Projects() {
    const [compressionView, setcompressionView] = useState(false);
    const openCompression = () => setcompressionView(true)
    const closeCompression = () => setcompressionView(false);
    
    const [CalculatorView, setCalculatorView] = useState(false);
    const openCalculator = () => setCalculatorView(true)
    const closeCalculator = () => setCalculatorView(false);
    
    const [click, setClick] = useState(false);
    const openProject = () => setClick(true)
    const closeProject = () => setClick(false);
    
    return (
        <>
            <div className='projects-page'>
                <h1 className='projects-header'>Projects</h1>
                <h3 className='projects-sub-header'>Below are few of my projects, contact me to see more</h3>
                <div className='project-grid'>
                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openCompression}>
                            <img src={compression} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                        <div className={compressionView ? 'project-compression-blur-sec' : 'no-blur'}
                                        onClick={closeCompression}/>
                        <div className={compressionView ? 'project-compression-info-sec' : 'none'}>
                            <img src={compression} alt="" className='project-info-img' />
                            <i className="fa-solid fa-x" 
                               onClick={closeCompression}/>
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
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    
                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openCalculator}>
                            <img src={calculator} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                        <div className={CalculatorView ? 'project-calculator-blur-sec' : 'no-blur'}
                                        onClick={closeCalculator}/>
                        <div className={CalculatorView ? 'project-calculator-info-sec' : 'none'}>
                            <img src={calculator} alt="" className='project-info-img' />
                            <i className="fa-solid fa-x" 
                               onClick={closeCalculator}/>
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
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    
                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openProject}>
                            <img src={Bingo} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                        <div className={click ? 'project-blur-sec' : 'no-blur'}
                                        onClick={closeProject}/>
                        <div className={click ? 'project-info-sec' : 'none'}>
                            <img src={Bingo} alt="" className='project-info-img' />
                            <i className="fa-solid fa-x" 
                               onClick={closeProject}/>
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
                        </div>
                    </div>

                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={TASA} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Movie} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Logo} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Multibagger} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Thumbnail3} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                </div>
            </div>
        </>
    )
}