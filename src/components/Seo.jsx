import { useEffect } from 'react'
import { siteConfig } from '../siteConfig'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Har page apna title/description set karta hai — Google search results aur
// social share preview (WhatsApp/Facebook) dono isi se banti hai
export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.brandName}`
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
  }, [title, description])

  return null
}
