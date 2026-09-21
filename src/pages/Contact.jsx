import { useState } from 'react'
import {
  FaWhatsapp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaMedal,
  FaPencilAlt,
  FaTruck,
  FaAward,
} from 'react-icons/fa'
import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'
import heroBgImg from '../assets/contact/hero-bg.png'

const inputClass =
  'font-[inherit] w-full px-4 py-3 rounded border border-gold/30 bg-navy text-cream placeholder:text-muted focus:outline-none focus:border-gold'

const whyChooseUs = [
  {
    icon: <FaMedal />,
    title: 'Premium Quality',
    description: 'Meticulously crafted with high-purity gold and silver wire threads (bullion) on fine wool felt and silk.',
  },
  {
    icon: <FaPencilAlt />,
    title: 'Custom Designs',
    description: 'We synthesize your digital artwork, coats of arms, or custom regiment drawings into precise physical patterns.',
  },
  {
    icon: <FaTruck />,
    title: 'Global Shipping',
    description: 'Insured, secured, and priority shipping to military installations, ministries, or private fashion houses worldwide.',
  },
  {
    icon: <FaAward />,
    title: 'Expert Craftsmanship',
    description: 'Over 35 years of master zardozi lineage, bringing extreme physical relief and strict protocol accuracy.',
  },
]

const btnGold =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const formData = new FormData(form)
    formData.append('access_key', siteConfig.web3formsAccessKey)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with ${siteConfig.brandName} for custom embroidery orders and enquiries.`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBgImg})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,6,10,0.75)_0%,rgba(6,6,10,0.55)_42%,rgba(6,6,10,0.3)_58%,rgba(6,6,10,0.1)_75%)]" />
        <div className="relative mx-auto max-w-300 px-6 flex aspect-1728/594 min-h-64 items-center">
          <h1 className="font-serif text-[clamp(2.4rem,4.2vw,3.6rem)] text-gold-light">Contact Us</h1>
        </div>
      </section>

      {/* Make an Inquiry */}
      <section className="bg-navy py-18">
        <div className="mx-auto max-w-175 px-6">
          <h2 className="text-center font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-cream mb-3">
            Make an <span className="text-gold">Inquiry</span>
          </h2>
          <p className="text-center text-muted mb-10">
            We&apos;re here to help. Reach out and our team will respond within one business day.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input type="text" name="name" placeholder="Your Name *" required className={inputClass} />
              <input type="email" name="email" placeholder="Email Address *" required className={inputClass} />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input type="tel" name="mobile" placeholder="Mobile Number *" required className={inputClass} />
              <input type="text" name="inquiry_type" placeholder="Inquiry Type" className={inputClass} />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project or enquiry..."
              className={inputClass}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`${btnGold} justify-center disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              <FaPaperPlane /> {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {status === 'sent' && (
              <p className="text-emerald-400 text-center">Message sent! We&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
            )}
          </form>

          <div className="grid grid-cols-1 gap-8 mt-14 sm:grid-cols-3">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gold text-[0.7rem] tracking-widest uppercase mb-1">Our Location</p>
                <p className="text-cream font-semibold mb-1">Factory Address</p>
                <p className="text-muted text-sm">{siteConfig.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center shrink-0">
                <FaClock />
              </div>
              <div>
                <p className="text-gold text-[0.7rem] tracking-widest uppercase mb-1">Opening Hours</p>
                <p className="text-cream mb-1">
                  Mon – Sun: <span className="text-gold">9am – 10pm</span>
                </p>
                <p className="text-muted text-sm">Sunday: Open</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gold text-[0.7rem] tracking-widest uppercase mb-1">Contact</p>
                <p className="text-muted text-sm mb-1">{siteConfig.phoneNumbers.join(', ')}</p>
                <p className="text-muted text-sm mb-1">{siteConfig.contactEmail}</p>
                <p className="text-muted text-sm">www.thehandembroidery.com</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              className="inline-flex items-center gap-2 bg-[#25d366] text-white px-5 py-2.5 rounded font-semibold no-underline"
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-3">
              Why Choose The Hand Embroidery?
            </h2>
            <p className="text-muted max-w-[60ch] mx-auto">
              Uncompromised standards, generation-proven craftsmanship, and seamless global
              fulfillment.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div className="border border-gold/25 rounded bg-navy p-7" key={item.title}>
                <div className="w-12 h-12 rounded-full border border-gold text-gold text-lg flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="text-gold font-serif text-[1.05rem] mb-3">{item.title}</h4>
                <p className="text-[0.88rem] leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
