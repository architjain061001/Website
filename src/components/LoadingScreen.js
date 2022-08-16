import React from 'react'
import './LoadingScreen.css'
import { HashLoader } from 'react-spinners';


export function LoadingScreen() {    
    return (
        <div className='LoadingScreen'>
            <HashLoader size={120} color={"#417dc1"} className="hash-loader"/> 
            <h3 className='text'>
                &lt; Archit Jain /&gt;
            </h3>
        </div>
    )
}

export default LoadingScreen;