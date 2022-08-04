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
import splendor from '../../Images/Proj-Img/splendor.jpeg'

export default function Projects() {
    const [imageView, setView] = useState(false);
    const openImageView = () => setView(true)
    const closeImageView = () => setView(false);
    
    return (
        <>
            <div className='projects-page'>
                <h1 className='projects-header'>Projects</h1>
                <h3 className='projects-sub-header'>Below are few of my projects, contact me to see more</h3>
                <div className='project-grid'>
                    
                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openImageView}>
                            <img src={compression} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>

                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openImageView}>
                            <img src={calculator} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>
                    
                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openImageView}>
                            <img src={splendor} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>

                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openImageView}>
                            <img src={Bingo} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>

                    <div className='project-layout'>
                        <div className='project-layout-inner'
                             onClick={openImageView}>
                            <img src={TASA} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
                    </div>

                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Movie} alt="" className="proj-img" />
                            <div className='project-layout-bottom'>
                                <h1 className='project-title'> Machine Artihmetic </h1>
                                <h1 className='project-desc'> Lossy Image Compressor </h1>
                            </div>
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

                <div className={imageView? 'blur' : 'no-blur'} onClick={closeImageView}/>

                <div className={imageView? 'project-detailed-view' : 'project-detailed-view-closed'}>   
                    <i className="fa-solid fa-x" onClick={closeImageView}/>
                    <i className="fa-solid fa-arrow-left"/>
                    <i className="fa-solid fa-arrow-right"/>
                    <h1 className='project-detailed-title'> Machine Artihmetic </h1>
                    <div className='project-detailed-laptop-view'>
                        <div className='project-detailed-sec'>
                            <div className='project-detailed-attribute-sec'>
                                <i className="fa-solid fa-building"/>
                                <h1 className='project-detailed-attribute-title'> Client: </h1>
                                <h1 className='project-detailed-attribute-desc'> Tufts University </h1>
                            </div>
                            
                            <div className='project-detailed-attribute-sec'>
                                <i className="fa-solid fa-microchip"></i>
                                <h1 className='project-detailed-attribute-title'> Technologies: </h1>
                                <h1 className='project-detailed-attribute-desc'> C </h1>
                            </div>
                            
                            <div className='project-detailed-attribute-sec'>
                                <i className="fa-solid fa-file"/>
                                <h1 className='project-detailed-attribute-title'> Description: </h1>
                                <p className='project-detailed-attribute-desc'> 
                                    Designed a lossy image compressor that 
                                    reduces the image size to at least 
                                    half of its original size.  
                                </p>
                            </div>
                        </div>
                        <img src={compression} alt="" className='project-detailed-image' />
                    </div>
                </div>
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

{/* <div className={TASA2 ? 'project-TASA2-blur-sec' : 'no-blur'}
onClick={closeTASA2}/>
<div className={TASA2 ? 'project-TASA2-info-sec' : 'none'}>
<img src={TASA} alt="" className='project-info-img' />
<i className="fa-solid fa-x" 
onClick={closeTASA2}/>
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