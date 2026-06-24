import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='foot-sec'>
        <div>
            <h1 className='foot-name'>Lakhan</h1>
            <p className='foot-desc'>Building modern web applications clean design, efficient code and seamless user experiences.</p>
            <div className='icons'>
                <a href="https://github.com/LakhanTekchandani/" target='_blank' rel="noreferrer" className='git-icon'><FaGithub/></a>
                <a href="https://www.linkedin.com/in/lakhan-tekchandani-8b8558343/" target='_blank' rel="noreferrer" className='linked-icon'><FaLinkedin/></a>
                <a href="mailto:lakhantekchandani400@gmail.com" className='mail-icon'><FaEnvelope/></a>
            </div>
        </div>
        <div>
            <h1>Quick Links</h1>
        </div>
        <div>
            <h1>Let's Contact</h1>
        </div>
    </div>
  )
}

export default Footer