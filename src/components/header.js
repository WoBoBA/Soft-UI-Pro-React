import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink large">
            Soft UI Design System
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1 large">
              Home
            </Link>
            <span className="header-text large">Profile</span>
            <span className="header-text1 large">Coming Soon</span>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
            </div>
            <div data-type="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink2 large">
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink3 large">
              Home
            </Link>
            <span className="header-text2 large">Profile</span>
            <span className="header-text3 large">Coming Soon</span>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

export default Header
