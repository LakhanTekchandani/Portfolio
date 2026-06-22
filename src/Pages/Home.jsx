import React from 'react'
import Photo from '../Images/Photo.png'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const roles = [
    "MERN Applications",
    "Modern Websites",
    "Full Stack Products",
    "Scalable Backends"
  ]
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
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
            <div className="sub-heading-container">

              <p className="static-text">
                I Build,
              </p>

              <AnimatePresence mode="wait">

                <motion.p
                  key={roles[currentRole]}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="sub-heading"
                >
                  {roles[currentRole]}
                </motion.p>

              </AnimatePresence>

            </div>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='description'
            >
              Building responsive and scalable web applications
              using <br /> React, Node.js, Express and MongoDB.
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