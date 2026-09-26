import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Photo from '../Images/Photo.png'
import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaBootstrap,
   FaMusic,
  FaPaintBrush,
  FaLaptopCode,
} from 'react-icons/fa'
import { GiCricketBat } from "react-icons/gi";


import {
  SiExpress, SiMongodb, SiTailwindcss,
  SiFramer, SiPostman
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdLocationOn } from 'react-icons/md'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' }
  })
}

const About = () => {
  const techStack = [
    { icon: <FaHtml5 />, color: '#E34F26', name: 'HTML5' },
    { icon: <FaCss3Alt />, color: '#1572B6', name: 'CSS3' },
    { icon: <FaJs />, color: '#F7DF1E', name: 'JavaScript' },
    { icon: <FaReact />, color: '#61DAFB', name: 'React' },
    { icon: <FaNodeJs />, color: '#339933', name: 'Node.js' },
    { icon: <SiExpress />, color: '#61DAFB', name: 'Express' },
    { icon: <SiMongodb />, color: '#4DB33D', name: 'MongoDB' },
    { icon: <SiTailwindcss />, color: '#38B2AC', name: 'Tailwind' },
    { icon: <FaBootstrap />, color: '#7952B3', name: 'Bootstrap' },
    { icon: <SiFramer />, color: '#00C49A', name: 'Framer' },
    { icon: <FaGitAlt />, color: '#F05032', name: 'Git' },
    { icon: <FaGithub />, color: '#ffffff', name: 'GitHub' },
    { icon: <SiPostman />, color: '#FF6B35', name: 'Postman' },
    { icon: <VscVscode />, color: 'rgb(3,187,248)', name: 'VS Code' },
  ]

  const journey = [
    {
      period: '2024 – Present',
      title: 'Dr. Virendra Swaroop Institute of Computer Studies',
      subtitle: 'B.Sc. Computer Science',
      active: true,
    },
    {
      period: '2023 – 2024',
      title: 'N.L. Memorial Public School',
      subtitle: 'Intermediate',
      active: false,
    },
    {
      period: 'Schooling',
      title: 'N.L. Memorial Public School',
      subtitle: 'High School',
      active: false,
    },
  ]

 const interests = [
  {
    icon: <GiCricketBat />,
    label: 'Cricket',
    desc: 'My biggest passion',
  },
  {
    icon: <FaMusic />,
    label: 'Music',
    desc: 'Headphones in, world out',
  },
  {
    icon: <FaPaintBrush />,
    label: 'Drawing',
    desc: 'Creative sketching',
  },
  {
    icon: <FaLaptopCode />,
    label: 'Learning',
    desc: 'Always improving',
  },
];

  return (
    <>
      <Navbar />
      <div className='about-page'>

        {/* ── SECTION 1 : HERO ── */}
        <section className='about-hero'>
          <motion.div
            className='about-hero-left'
            variants={fadeUp}
            initial='hidden'
            animate='show'
          >
            <p className='about-label'>ABOUT ME</p>
            <h1 className='about-title'>
              Who <span className='about-accent'>I Am</span>
            </h1>
            <p className='about-bio'>
              I'm a passionate full-stack developer who loves turning ideas
              into real-world digital experiences. I enjoy building clean,
              user-focused applications and constantly learning new
              technologies to grow and create impact.
            </p>

            {/* Stats */}
            <div className='about-stats'>
              {[
                { value: '2+', label: 'Projects Completed', icon: '🚀' },
                { value: '</>', label: 'Full Stack', sub: 'MERN Developer', icon: null },
                { value: '∞', label: 'Always Learning', icon: '🧠' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className='about-stat-card'
                  variants={fadeUp}
                  initial='hidden'
                  animate='show'
                  custom={i * 0.2 + 0.4}
                >
                  <span className='about-stat-value'>{s.value}</span>
                  <span className='about-stat-label'>{s.label}</span>
                  {s.sub && <span className='about-stat-sub'>{s.sub}</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className='about-hero-right'
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className='about-profile-card'>
              <img src={Photo} alt='Lakhan' className='about-profile-img' />
              <div className='about-profile-info'>
                <p className='about-profile-name'>Lakhan</p>
                <p className='about-profile-role'>Full Stack Developer</p>
                <p className='about-profile-location'>
                  <MdLocationOn style={{ verticalAlign: 'middle' }} /> India
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── SECTION 2 : JOURNEY ── */}
        <section className='about-section'>
          <motion.div
            className='about-section-header'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className='about-label'>EDUCATION</p>
            <h2 className='about-section-title'>My Journey</h2>
            <p className='about-section-desc'>
              The academic path that shaped my skills and passion for technology.
            </p>
          </motion.div>

          <div className='about-timeline'>
            {journey.map((item, i) => (
              <motion.div
                key={i}
                className={`about-timeline-item ${item.active ? 'active' : ''}`}
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className='about-timeline-dot' />
                <div className='about-timeline-content'>
                  <span className='about-timeline-period'>{item.period}</span>
                  <h3 className='about-timeline-title'>{item.title}</h3>
                  <p className='about-timeline-sub'>{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3 : BEYOND THE CODE ── */}
        <section className='about-section'>
          <motion.div
            className='about-section-header'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className='about-label'>INTERESTS</p>
            <h2 className='about-section-title'>Beyond the Code</h2>
            <p className='about-section-desc'>
              Beyond the code, I'm passionate about{' '}
              <span className='about-highlight'>playing cricket</span>, enjoy{' '}
              <span className='about-highlight'>listening to music</span>{' '}
              <em>(headphones in, world out)</em>, love{' '}
              <span className='about-highlight'>drawing creative sketches</span>, and I'm
              always excited about{' '}
              <span className='about-highlight'>learning new technologies</span> that help me
              grow as a developer and as a person.
            </p>
          </motion.div>

          <div className='about-interests-grid'>
            {interests.map((item, i) => (
              <motion.div
                key={i}
                className='about-interest-card'
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className='about-interest-icon'>{item.icon}</div>
                <h4 className='about-interest-label'>{item.label}</h4>
                <p className='about-interest-desc'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4 : TECH STACK ── */}
        <section className='about-section'>
          <motion.div
            className='about-section-header'
            variants={fadeUp}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className='about-label'>SKILLS</p>
            <h2 className='about-section-title'>Tech I Work With</h2>
            <p className='about-section-desc'>
              The tools and technologies I use every day to build powerful applications.
            </p>
          </motion.div>

          <div className='about-tech-grid'>
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className='about-tech-card'
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
                custom={i * 0.05}
                whileHover={{ scale: 1.1, y: -6 }}
              >
                <span className='about-tech-icon' style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <span className='about-tech-name'>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default About