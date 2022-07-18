import React from "react";
import './Projects.css'

import Multibagger from '../../Images/Proj-Img/Multibagger.png'
import Thumbnail3 from '../../Images/Proj-Img/Thumbnail3.png'
import Logo from '../../Images/Proj-Img/Logo1.png'
import TASA from '../../Images/Proj-Img/Culture Week.png'
import Bingo from '../../Images/Proj-Img/Reveal.png'
import Movie from '../../Images/Proj-Img/Ramadan.png'

export default function Projects() {
    return (
        <>
            <div className='projects-page'>
                <h1 className='projects-header'>Projects</h1>
                <h3 className='projects-sub-header'>Below are few of my projects, contact me to see more</h3>
                <div className='project-grid'>
                    <div className='project-layout'>
                        <div className='project-layout-inner'>
                            <img src={Bingo} alt="" className="proj-img" />
                        </div>
                        <h3 className='proj-text'>Click to view more</h3>
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