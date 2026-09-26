import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({ type: "", message: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {

        await emailjs.send(
    "service_8nl9mzh",
    "template_sfc6mgo",
    {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
    },
    "cHx8PhAXuUkkiXLin"
);

        setStatus({
            type: "success",
            message: "Message sent successfully!"
        });

        setFormData({
            name:"",
            email:"",
            subject:"",
            message:""
        });

    } catch (error) {
        console.error(error); 
        setStatus({
            type:"error",
            message:"Something went wrong. Please try again."
        });

    } finally {

        setIsSubmitting(false);

    }
};

  // Animations configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page-container">
        {/* Header Section */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="contact-subtitle">Let's Get In Touch</p>
          <h1 className="contact-title">
            Have a <span className="highlight">Project</span> in Mind?
          </h1>
          <p className="contact-description">
            I'm always open to discussing new opportunities, collaborations or just a friendly hello.
          </p>
        </motion.div>

        {/* Glowing border separator */}
        <motion.div 
          className="contact-separator"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        {/* Content Section */}
        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Send Me a Message Card */}
          <motion.div className="contact-card" variants={itemVariants}>
            <h2 className="card-title">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  className="form-control"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div className="contact-card" variants={itemVariants}>
            <h2 className="card-title">Contact Information</h2>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <FaEnvelope />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Email</span>
                  <a href="mailto:lakhantekchandani400@gmail.com" className="info-value">
                    lakhantekchandani400@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Location</span>
                  <span className="info-value">India</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <FaPaperPlane />
                </div>
                <div className="info-text-box">
                  <span className="info-label">Response Time</span>
                  <span className="info-value">I usually reply within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="social-container">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-icons-row">
                <a 
                  href="https://github.com/LakhanTekchandani/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/lakhan-tekchandani-8b8558343/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-circle-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:lakhantekchandani400@gmail.com" 
                  className="social-circle-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;