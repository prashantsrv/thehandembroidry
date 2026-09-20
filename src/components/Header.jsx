import { NavLink } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import logo from '../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <>
      <div className="announce-bar">
        {siteConfig.brandName} is a trusted <strong>manufacturer</strong> and{' '}
        <strong>supplier</strong> of premium hand embroidery <strong>badges</strong>,
        combining traditional craftsmanship and exceptional quality for{' '}
        <strong>clients worldwide</strong>.
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <img src={logo} alt={siteConfig.brandName} className="brand-crest" />
            <span className="brand-text">
              <span className="brand-line1">THE HAND</span>
              <span className="brand-line2">EMBROIDERY</span>
            </span>
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery &amp; Portfolio</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>
          <NavLink to="/contact" className="btn btn-gold enquire-btn">
            Enquire Now
          </NavLink>
        </div>
      </header>
    </>
  )
}
