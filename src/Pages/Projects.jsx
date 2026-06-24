import React from 'react'
import Navbar from '../Components/Navbar'
import projects from '../Data/projectsData'
import ProjectCard from '../Components/ProjectCard'
import {motion} from 'framer-motion'



const Projects = () => {
  return (
    <div>
      <Navbar/>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.5}} className='pro-sec1'>
        <h1 className='pro-head'><i>All</i> Projects</h1>
         <p className='pro-para'>
          A collection of web applications, landing pages and <br />
          full stack products I've built.
        </p>
      </motion.div>
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.5}} className="pro-sec2">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </motion.div>
    </div>
  )
}

export default Projects