import React from 'react'
import Photo from '../Images/Photo.png'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import projects from "../Data/projectsData";
import ProjectCard from "../Components/ProjectCard";
import Footer from '../Components/Footer';
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaGitAlt,FaGithub, FaBootstrap,} from "react-icons/fa";
import {SiExpress,SiMongodb,SiTailwindcss,SiFramer, SiPostman,} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Home = () => {
  const roles = [
    "MERN Applications",
    "Modern Websites",
    "Full Stack Products",
    "Scalable Backends"
  ]
  const [currentRole, setCurrentRole] = useState(0);
  const index = 0;
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
    <>
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
      <div className='section2'>
        <motion.h1 className='heading2'initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}>Some Featured Work</motion.h1>
        <motion.p className='text2'initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}>Things <i>I've Built</i></motion.p>
        <motion.p className='description2'initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}>A collection of project where I solve real problems <br /> with clean code and thoughtful design. </motion.p>
        <motion.div className="projects-grid"
        initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}>
          {projects.slice(0, 4).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>
        <motion.div className='projects' initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
    }}>
          <Link to="/projects" className='button3'>View All Projects →</Link>
        </motion.div>
      </div>
      <div className='section3'>
        <motion.h1 initial={{opactiy:0, y: 50 }} whileInView={{opactiy:1, y: 0 }} viewport={{once: true, amount: 0.2 }} transition={{duration: 0.5, delay: 0.15 }} className='tech'>Tech Stack</motion.h1>
        <motion.p className='des-3'initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: 0.15,
    }}>The tools and technologies I use to <br /> build amazing applications</motion.p>
        <div className='marquee-wrapper'>
          <motion.div className='marquee1' initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.15 }}>
            <div className='marquee-inner'>
              <div className='marquee-track'>
                <FaHtml5 style={{ color: "#E34F26" }} />
                <FaCss3Alt style={{ color: "#1572B6" }} />
                <FaJs style={{ color: "#F7DF1E" }} />
                <FaReact style={{ color: "#61DAFB" }} />
                <FaNodeJs style={{ color: "#339933" }} />
                <FaGitAlt style={{ color: "#F05032" }} />
                <FaGithub style={{ color: "white" }}/>
              </div>
              <div className='marquee-track'>
                <FaHtml5 style={{ color: "#E34F26" }} />
                <FaCss3Alt style={{ color: "#1572B6" }} />
                <FaJs style={{ color: "#F7DF1E" }} />
                <FaReact style={{ color: "#61DAFB" }} />
                <FaNodeJs style={{ color: "#339933" }} />
                <FaGitAlt style={{ color: "#F05032" }} />
                <FaGithub style={{ color: "white" }}/>
              </div>
            </div>
          </motion.div>
          <motion.div className='marquee2' initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.15 }}>
            <div className='marquee-inner2'>
              <div className='marquee-track2'>
                <SiExpress  style={{ color: "#61DAFB" }}/>
                <SiMongodb style={{ color: "#4DB33D" }}/>
                <SiTailwindcss style={{ color: "#38B2AC" }}/>
                <SiFramer style={{ color: "#00C49A" }}/>
                <SiPostman style={{ color: "#FF6B35" }}/>
                <FaBootstrap style={{ color: "#7952B3" }}/>
                <VscVscode style={{ color: "rgb(3, 187, 248)" }}/>
              </div>
              <div className='marquee-track2'>
                <SiExpress style={{ color: "#61DAFB" }}/>
                <SiMongodb style={{ color: "#4DB33D" }}/>
                <SiTailwindcss style={{ color: "#38B2AC" }}/>
                <SiFramer style={{ color: "#00C49A" }}/>
                <SiPostman style={{ color: "#FF6B35" }}/>
                <FaBootstrap style={{ color: "#7952B3" }}/>
                <VscVscode style={{ color: "rgb(3, 187, 248)" }}/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{opactiy:0, y: 50 }} whileInView={{opactiy:1, y: 0 }} viewport={{once: true, amount: 0.2 }} transition={{duration: 0.5, delay: 0.15 }} className='section4'>
                        <div className='inner-box'>
                          <h1 className='tagline'>Let's Turn Your Ideas Into Reality.</h1>
                        <p className='des-2'>Have an idea, a project or an opportunity? <br /> I'm always open to building meaningful digital experiences.</p>
                        <div className='button4'><Link className='inner-but' to="/contact" >Let's Talk →</Link></div>
                        </div>
      </motion.div>
      <Footer/>
    </div></>
    
  )
}

export default Home