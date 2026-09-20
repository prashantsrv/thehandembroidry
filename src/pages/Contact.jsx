import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'
import './Contact.css'

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
      <section className="container contact-page">
        <h1>Contact Us</h1>
        <p>Have a question or want to place a custom order? Send us a message.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="form-note success">Message sent! We'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-note error">Something went wrong. Please try again.</p>
          )}
        </form>

        <a
          className="whatsapp-btn"
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </section>
    </>
  )
}
