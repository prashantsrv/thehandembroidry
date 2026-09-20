import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  const { social, contactEmail, phoneNumbers, address, brandName } = siteConfig

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="brand">
            <img src={logo} alt={brandName} className="brand-crest" />
            <span className="brand-text">
              <span className="brand-line1">THE HAND</span>
              <span className="brand-line2">EMBROIDERY</span>
            </span>
          </div>
          <p>
            Hand embroidery created with infinite patience, extreme precision, and the
            noble legacy of zardozi. Proudly serving militaries, academic institutions,
            and fashion ateliers around the globe.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery &amp; Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p className="contact-row">
            <FaEnvelope /> {contactEmail}
          </p>
          <p className="contact-row">
            <FaPhoneAlt /> {phoneNumbers.join(', ')}
          </p>
          <p className="contact-row">
            <FaMapMarkerAlt /> {address}
          </p>
          <div className="social-icons">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer-watermark" aria-hidden="true">
        {brandName.toUpperCase()}
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved. Crafted with
        peerless devotion in India.
      </div>
    </footer>
  )
}
