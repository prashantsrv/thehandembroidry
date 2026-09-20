import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import logo from '../assets/logo.png'

export default function Footer() {
  const { social, contactEmail, phoneNumbers, address, brandName } = siteConfig

  return (
    <footer className="bg-ink border-t border-gold/15 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-300 px-6 py-12 pb-10 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt={brandName} className="w-10 h-10 object-contain shrink-0" />
            <span className="flex flex-col leading-[1.1]">
              <span className="font-serif text-[1rem] font-bold text-cream">THE HAND</span>
              <span className="text-[0.6rem] tracking-[0.18em] text-gold">EMBROIDERY</span>
            </span>
          </div>
          <p className="text-[0.85rem] leading-relaxed text-muted">
            Hand embroidery created with infinite patience, extreme precision, and the
            noble legacy of zardozi. Proudly serving militaries, academic institutions,
            and fashion ateliers around the globe.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="text-gold text-xs tracking-widest uppercase mb-1.5">Quick Links</h4>
          <Link to="/" className="text-muted text-[0.9rem] no-underline hover:text-gold">
            Home
          </Link>
          <Link to="/services" className="text-muted text-[0.9rem] no-underline hover:text-gold">
            Services
          </Link>
          <Link to="/gallery" className="text-muted text-[0.9rem] no-underline hover:text-gold">
            Gallery &amp; Portfolio
          </Link>
          <Link to="/about" className="text-muted text-[0.9rem] no-underline hover:text-gold">
            About Us
          </Link>
          <Link to="/contact" className="text-muted text-[0.9rem] no-underline hover:text-gold">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="text-gold text-xs tracking-widest uppercase mb-1.5">Get In Touch</h4>
          <p className="flex items-start gap-2.5 text-[0.85rem] text-muted">
            <FaEnvelope className="mt-0.5" /> {contactEmail}
          </p>
          <p className="flex items-start gap-2.5 text-[0.85rem] text-muted">
            <FaPhoneAlt className="mt-0.5" /> {phoneNumbers.join(', ')}
          </p>
          <p className="flex items-start gap-2.5 text-[0.85rem] text-muted">
            <FaMapMarkerAlt className="mt-0.5" /> {address}
          </p>
          <div className="flex gap-3 mt-2">
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center"
              >
                <FaInstagram />
              </a>
            )}
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center"
              >
                <FaFacebookF />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative z-10 text-center font-serif font-bold text-[clamp(2.5rem,9vw,6rem)] leading-none whitespace-nowrap overflow-hidden pb-2"
        style={{ color: 'rgba(212, 165, 55, 0.08)' }}
      >
        {brandName.toUpperCase()}
      </div>

      <div className="relative z-10 text-center text-[0.8rem] text-muted px-6 py-5 border-t border-white/8">
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved. Crafted with
        peerless devotion in India.
      </div>
    </footer>
  )
}
