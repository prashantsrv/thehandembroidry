import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-20 w-14 h-14 rounded-full bg-[#25d366] text-white text-2xl flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 transition-transform"
    >
      <FaWhatsapp />
    </a>
  )
}
