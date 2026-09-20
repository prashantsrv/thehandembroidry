import { NavLink } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import logo from '../assets/logo.png'

const navLinkClass = ({ isActive }) =>
  `text-[0.9rem] font-medium ${isActive ? 'text-gold' : 'text-cream'}`

export default function Header() {
  return (
    <>
      <div className="bg-gold text-[#1a1305] text-center text-[0.8rem] px-4 py-2">
        {siteConfig.brandName} is a trusted <strong>manufacturer</strong> and{' '}
        <strong>supplier</strong> of premium hand embroidery <strong>badges</strong>,
        combining traditional craftsmanship and exceptional quality for{' '}
        <strong>clients worldwide</strong>.
      </div>
      <header className="bg-navy border-b border-gold/15 sticky top-0 z-10">
        <div className="mx-auto max-w-300 px-6 py-4 flex items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-3 no-underline">
            <img src={logo} alt={siteConfig.brandName} className="w-11 h-11 object-contain shrink-0" />
            <span className="flex flex-col leading-[1.1]">
              <span className="font-serif text-[1.1rem] font-bold text-cream">THE HAND</span>
              <span className="text-[0.65rem] tracking-[0.18em] text-gold">EMBROIDERY</span>
            </span>
          </NavLink>
          <nav className="hidden md:flex flex-1 justify-center flex-wrap gap-7">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={navLinkClass}>
              Gallery &amp; Portfolio
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Enquire Now
          </NavLink>
        </div>
      </header>
    </>
  )
}
