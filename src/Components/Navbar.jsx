import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='navbar-container'>

        <p className='name'>Lakhan</p>

        <div
  className="menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</div>
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>

      </div>
    </>
  )
}

export default Navbar