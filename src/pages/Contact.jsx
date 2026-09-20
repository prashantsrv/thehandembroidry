import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'

const inputClass =
  'font-[inherit] px-3 py-2.5 rounded border border-gold/35 bg-navy text-cream placeholder:text-muted focus:outline-none focus:border-gold'

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
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-125 px-6">
          <h1 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-cream mb-2">Contact Us</h1>
          <p className="text-muted">Have a question or want to place a custom order? Send us a message.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <label className="flex flex-col gap-1.5 font-semibold text-cream">
              Name
              <input type="text" name="name" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 font-semibold text-cream">
              Email
              <input type="email" name="email" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 font-semibold text-cream">
              Message
              <textarea name="message" rows="5" required className={inputClass} />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="text-emerald-400">Message sent! We&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>

          <a
            className="inline-flex items-center gap-2 mt-6 bg-[#25d366] text-white px-5 py-2.5 rounded font-semibold no-underline"
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
