import React, {useState }from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className='navbar'>
        {!isOpen && (
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger-line" />
          <div className="hamburger-line" />
          <div className="hamburger-line" />
        </div>
        )}
        <div className={`menu-links ${isOpen ? 'open' : ''}`}>
        {isOpen && <div className="close-icon" onClick={() => setIsOpen(false)}>X</div>}
          <Link to="/UserMenu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/AdminMenu" onClick={() => setIsOpen(false)}>Admin Menu</Link>
          <Link to="/Schedule" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link to="/Login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
    </nav>
  )
}
