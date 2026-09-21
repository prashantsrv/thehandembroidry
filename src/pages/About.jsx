import { Link } from 'react-router-dom'
import { FaPalette, FaScroll, FaShippingFast, FaGem } from 'react-icons/fa'
import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'
import heroBgImg from '../assets/about/hero-bg.png'
import storytellingImg from '../assets/about/storytelling.png'
import floralMonogramImg from '../assets/about/floral-monogram.png'
import peacockFramedImg from '../assets/about/peacock-framed.png'

const differentiators = [
  {
    icon: <FaPalette />,
    title: 'Handmade Character',
    description:
      'The slight variations in every single stitch make each emblem and panel a unique piece of textile sculpture that machine manufacturing simply cannot replicate.',
  },
  {
    icon: <FaScroll />,
    title: 'Traditional Techniques',
    description:
      'We maintain living proficiency in Zardozi, Aari, bullion wire stitching, monogramming, and complex goldwork padding, carrying forward ancient country crafts.',
  },
  {
    icon: <FaShippingFast />,
    title: 'Export Ready & Certified',
    description:
      'Proactively serving militaries, academic institutions, fashion designers, and corporate offices globally with secure, insured waterproof courier shipping.',
  },
  {
    icon: <FaGem />,
    title: 'Obsessive Finishes',
    description:
      'From initial fabric density curation to certified high-purity gold wire selection, our rigorous multi-stage quality control ensures flawless execution.',
  },
]

const btnGold =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap'
const btnOutline =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-gold border border-gold hover:bg-gold/10 transition-colors whitespace-nowrap'
const eyebrow = 'flex items-center gap-3 text-gold text-xs font-semibold uppercase tracking-widest mb-3'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`Learn more about ${siteConfig.brandName} and our handcrafted embroidery journey.`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBgImg})` }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,6,10,0.55),rgba(6,6,10,0.75))]" />
        <div className="relative mx-auto max-w-300 px-6 min-h-120 flex flex-col justify-center text-center">
          <h1 className="font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] text-cream mb-6">About Us</h1>
          <p className="leading-relaxed text-cream/90 max-w-[70ch] mx-auto mb-8">
            Welcome to The Hand Embroidery, a creative destination where traditional craftsmanship
            meets modern design. At thehandembroidery.com, we celebrate the beauty of handmade
            embroidery and the skilled hands behind every stitch. Each design is created with
            patience, precision, and a deep appreciation for the timeless art of needlework.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/gallery" className={btnGold}>
              Explore Our Work
            </Link>
            <Link to="/contact" className={btnOutline}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Art of Storytelling Through Thread */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-5">
              The Art of Storytelling Through Thread
            </h2>
            <p className="leading-relaxed text-muted mb-5">
              Hand embroidery is more than decoration—it is a form of storytelling. Every thread,
              pattern, and texture comes together to create something personal and meaningful. Our
              work is inspired by traditional embroidery techniques, contemporary styles, nature,
              culture, and everyday beauty. We focus on creating designs that bring warmth,
              elegance, and individuality to every piece.
            </p>
            <p className="italic text-gold-light text-sm">— Crafted Stitch by Passion Stitch</p>
          </div>
          <img
            src={storytellingImg}
            alt="Artisan examining gold embroidery with a magnifying glass"
            className="w-full aspect-4/3 object-cover rounded border border-gold/20"
          />
        </div>
      </section>

      {/* The Special Character of Handmade */}
      <section className="bg-navy py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <img
            src={floralMonogramImg}
            alt="Colorful floral hand embroidery with a gold monogram"
            className="w-full aspect-4/3 object-cover rounded border border-gold/20"
          />
          <div>
            <p className={eyebrow}>What Makes Us Unique</p>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-5">
              The Special Character of Handmade
            </h2>
            <p className="leading-relaxed text-muted">
              At The Hand Embroidery, we believe that handmade products carry a special character
              that machine-made items cannot replicate. The slight variations in every stitch make
              each creation unique. Every detailed floral pattern and customized name, from
              decorative artwork to personalized gifts, is carefully embroidered to reflect
              creativity and craftsmanship. Our goal is to make the art of hand embroidery
              accessible to people who appreciate thoughtful design and authentic handmade work.
              Whether you are looking for a special gift, a customized embroidery piece,
              inspiration for your next project, or something beautiful for your home, we aim to
              offer creations that feel personal and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-175 px-6">
          <div className="border border-gold/25 rounded p-10 text-center">
            <p className={`${eyebrow} justify-center`}>Our Mission</p>
            <h2 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] text-cream mb-5">
              Making Hand Embroidery Accessible
            </h2>
            <p className="leading-relaxed text-muted">
              Our goal is to make the art of hand embroidery accessible to people who appreciate
              thoughtful design and authentic handmade work. Whether you are looking for a special
              gift, a customised embroidery piece, inspiration for your next project, or something
              beautiful for your home, we aim to offer creations that feel personal and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <div className="text-center mb-12">
            <p className={`${eyebrow} justify-center`}>Atelier Values</p>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-2">
            <div>
              <p className="leading-relaxed text-muted mb-4">
                At The Hand Embroidery, we believe that handmade products carry a special character
                that machine-made items cannot replicate.
              </p>
              <p className="leading-relaxed text-muted">
                The slight variations in every single stitch make each emblem and panel a unique
                piece of textile sculpture that machine manufacturing simply cannot replicate.
              </p>
            </div>
            <div className="border border-gold/25 rounded p-8">
              <h3 className="text-gold font-serif text-lg mb-3">Thoughtful Masterpieces</h3>
              <p className="leading-relaxed text-muted mb-6">
                Whether you are looking for a special gift, a customized embroidery piece,
                inspiration for your next project, or something beautiful for your home, we aim to
                offer creations that feel personal and memorable.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="font-serif text-2xl text-gold mb-1">250+</p>
                  <p className="text-[0.7rem] tracking-wide text-muted uppercase">Custom Designs</p>
                </div>
                <div>
                  <p className="font-serif text-2xl text-gold mb-1">100%</p>
                  <p className="text-[0.7rem] tracking-wide text-muted uppercase">Hand-Stitched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <div className="text-center mb-12">
            <p className={`${eyebrow} justify-center`}>Distinctive Excellence</p>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div className="border border-gold/25 rounded bg-navy p-7" key={item.title}>
                <div className="w-12 h-12 rounded-full border border-gold text-gold text-lg flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h4 className="text-cream text-[1.05rem] mb-3">{item.title}</h4>
                <p className="text-[0.88rem] leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sacred Mission */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <img
            src={peacockFramedImg}
            alt="Framed gold peacock hand embroidery on red velvet"
            className="w-full aspect-4/5 object-cover rounded border border-gold/20"
          />
          <div>
            <p className={eyebrow}>Our Sacred Mission</p>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-5">
              Preserving Traditional Skills While <span className="text-gold">Pioneering New Methods</span>
            </h2>
            <p className="leading-relaxed text-muted">
              Our ultimate goal is to make the beautiful heritage of authentic hand embroidery
              accessible to people and institutions who appreciate thoughtful design and genuine
              artisan craft. We remain committed to peerless quality, endless creativity, and
              obsessive attention to detail. Every commission from a defense force, global luxury
              fashion house, or academic registry supports our cooperative of master embroiderers
              in Uttar Pradesh, maintaining a dignified trade and keeping a magnificent legacy
              alive.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-ink py-18 pb-20">
        <div className="mx-auto max-w-175 px-6 text-center">
          <p className="leading-relaxed text-muted mb-8">
            Thank you for visiting thehandembroidery.com and supporting handmade artistry. Your
            appreciation allows us to continue creating meaningful designs, preserving traditional
            skills, and sharing the beauty of hand embroidery—one stitch at a time.
          </p>
          <Link to="/contact" className={btnGold}>
            Request Samples
          </Link>
        </div>
      </section>
    </>
  )
}
