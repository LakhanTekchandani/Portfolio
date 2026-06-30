import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import { FaDownload, FaShieldAlt, FaFilePdf, FaSearch } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import ResumeFile from '../Resume/Lakhan_Tekchandani_Resume.pdf'
import ResumePreview from '../Images/ResumePreview.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const Resume = () => {
  const [hovered, setHovered] = useState(false)

  const stats = [
    { value: '8+', label: 'Projects Completed', icon: '🚀' },
    { value: 'MERN', label: 'Tech Stack', icon: null },
    { value: 'BCA', label: 'Current Degree', icon: null },
    { value: 'Focused', label: 'Always Learning', icon: '🎯' },
  ]

  const features = [
    {
      icon: <FaSearch />,
      color: '#a855f7',
      title: 'ATS Friendly',
      desc: 'Optimized for Applicant Tracking Systems',
    },
    {
      icon: <BsFileEarmarkPerson />,
      color: '#22d3ee',
      title: 'One Page',
      desc: 'Concise and focused on key highlights',
    },
    {
      icon: <FaFilePdf />,
      color: '#f43f5e',
      title: 'PDF Format',
      desc: 'Easy to download and share',
    },
    {
      icon: <MdWork />,
      color: '#10b981',
      title: 'Updated',
      desc: 'Last updated in June 2025',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="resume-page">

        {/* ── HERO ── */}
        <section className="resume-hero">
          <motion.div
            className="resume-hero-inner"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="resume-label">MY RESUME</span>
            <h1 className="resume-title">Resume</h1>
            <p className="resume-subtitle">
              Here's a quick overview of my skills, experience, and education.
              Download my resume to know more.
            </p>

            {/* Stat pills */}
            <div className="resume-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="resume-stat-pill"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={i * 0.15 + 0.4}
                >
                  {s.icon && <span className="resume-stat-icon">{s.icon}</span>}
                  <div className="resume-stat-text">
                    <span className="resume-stat-value">{s.value}</span>
                    <span className="resume-stat-label">{s.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="resume-main">

          {/* LEFT – PDF Preview */}
          <motion.div
            className="resume-preview-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0}
          >
            <div className="resume-preview-header">
              <BsFileEarmarkPerson className="resume-preview-header-icon" />
              <span>Resume Preview</span>
            </div>
            <div className="resume-pdf-wrapper">
              <img
    src={ResumePreview}
    alt="Resume Preview"
    className="resume-preview"
/>
            </div>
          </motion.div>

          {/* RIGHT – Download Info */}
          <motion.div
            className="resume-download-panel"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.2}
          >
            {/* Icon badge */}
            <div className="resume-badge-wrap">
              <div className="resume-badge">
                <FaFilePdf className="resume-badge-icon" />
              </div>
            </div>

            <h2 className="resume-download-title">Download My Resume</h2>
            <p className="resume-download-desc">
              Get a detailed overview of my professional background, skills,
              projects, and achievements.
            </p>

            {/* Feature list */}
            <div className="resume-features">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="resume-feature-item"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  custom={i * 0.1 + 0.3}
                >
                  <div
                    className="resume-feature-icon"
                    style={{ color: f.color, background: `${f.color}18` }}
                  >
                    {f.icon}
                  </div>
                  <div className="resume-feature-text">
                    <h4 className="resume-feature-title">{f.title}</h4>
                    <p className="resume-feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.a
              href={ResumeFile}
              download="Lakhan_Tekchandani_Resume.pdf"
              className={`resume-download-btn ${hovered ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload className="resume-btn-icon" />
              Download Resume (PDF)
            </motion.a>

            {/* Safety note */}
            <p className="resume-safety">
              <FaShieldAlt className="resume-safety-icon" />
              Your information is safe with me.
            </p>
          </motion.div>

        </section>
      </div>
      <Footer />
    </>
  )
}

export default Resume