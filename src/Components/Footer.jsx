import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
        <div className='foot-main'>
           <div  className='foot-sec'>
             <div className='first-cont'>
                <h1 className='foot-name'>Lakhan</h1>
                <p className='foot-desc'>Building modern web applications clean design, efficient code and seamless user experiences.</p>
                <div className='icons'>
                    <a href="https://github.com/LakhanTekchandani/" target='_blank' rel="noreferrer" className='git-icon'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/lakhan-tekchandani-8b8558343/" target='_blank' rel="noreferrer" className='linked-icon'><FaLinkedin /></a>
                    <a href="mailto:lakhantekchandani400@gmail.com" className='mail-icon'><FaEnvelope /></a>
                </div>
            </div>
            <div>
                <h1 className='links'>Quick Links</h1>
                <div className='all-links'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/about" className='link'>About</Link>
                    <Link to="/projects" className='link'>Projects</Link>
                    <Link to="/contact" className='link'>Contact</Link>
                    <Link to="/resume" className='link'>Resume</Link>
                </div>
            </div>
            <div>
                <h1 className='links'>Let's Contact</h1>
                <div className='all-links1'>
                    <a href="mailto:lakhantekchandani400@gmail.com" className='link1'>lakhantekchandani400@gmail.com</a>
                </div>
            </div>
           </div>
            <div className='copy-right'>
              <div><p className='copy-text'>@ 2026 Lakhan Tekchandani.</p></div>
              <div><p className='copy-text'>Crafted with React, Framer Motion & Modern Web Technologies. </p></div>
            </div>
        </div>
    )
}

export default Footer