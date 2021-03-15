import React, { useState, useEffect } from 'react'
import './Navbar.scss'

function Navbar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        setShow(true)
      } else setShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img
        className="nav-logo"
        src="../../images/netflix.png"
        alt="Netflix Logo"
      />
      <img className="nav-avatar" src="../../images/avatar.png" alt="" />
    </div>
  )
}

export default Navbar
