import React from 'react'
import Photo from '../Images/Photo.png'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { useState } from 'react';

const Home = () => {
  const [position, setPosition] = useState({
    rotateX: 0,
    rotateY: 0,
  });
  const handleMouseLeave = () => {
  setPosition({
    rotateX: 0,
    rotateY: 0,
  });
};
const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateY = (x - rect.width / 2) / 10;
  const rotateX = -(y - rect.height / 2) / 10;

  setPosition({ rotateX, rotateY });
};
  return (
    <div>
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className='section1'>
        <Navbar />
        <motion.div className='inner-content'>
          <div className='text'>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='heading'
            >
              Hi I'm Lakhan Tekchandani
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='sub-heading'
            >
              Full Stack MERN Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='description'
            >
              Building modern web application with React,<br /> Node and Mongo DB
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} className='buttons'>
              <Link to="/projects" className='button1'>Explore Projects</Link>
              <Link to="/contact" className='button2'>Contact Me</Link>
            </motion.div>
          </div>
          <motion.div onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  animate={{
    rotateX: position.rotateX,
    rotateY: position.rotateY,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 25,
  }} className='image-container'>
            <img className='image1' src={Photo} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home