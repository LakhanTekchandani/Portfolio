import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <nav>
            <p className='name'>Lakhan</p>
        </nav>
        <nav className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </div>
  )
}


export default Navbar