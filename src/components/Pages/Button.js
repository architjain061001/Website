import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
    return (
        <Link to='contact-me'>
            <button className='btn'>Contact Me</button>
        </Link>
    )
}