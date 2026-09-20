import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaChevronLeft,
  FaChevronRight,
  FaMedal,
  FaPencilAlt,
  FaTruck,
  FaHashtag,
  FaCheckCircle,
} from 'react-icons/fa'
import Seo from '../components/Seo'
import sovereignSealBadge from '../assets/portfolio/sovereign-seal-badge.png'
import visorCapLeaf from '../assets/portfolio/visor-cap-leaf.png'
import altarclothRestoration from '../assets/portfolio/altarcloth-restoration.png'
import baronialLibraryTapestry from '../assets/portfolio/baronial-library-tapestry.png'
import admiralShoulderEpaulettes from '../assets/portfolio/admiral-shoulder-epaulettes.png'
import './Home.css'

const ph = (w, h, text, bg = '1a2338', fg = 'd4a537') =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}&font=playfair-display`

const categories = [
  'All Works',
  'Custom Badges',
  'Institutional Textiles',
  'Ceremonial Regalia',
  'Uniform Insignia',
  'Military Patches',
  'Bespoke Commissions',
  'Historical Restoration',
]

const portfolio = [
  {
    img: sovereignSealBadge,
    category: 'Heraldic Insignia',
    title: 'The Sovereign Seal Badge',
    description:
      'Bespoke sovereign military standard emblem hand-stitched with certified high-purity gold wire on dark velvet background.',
  },
  {
    img: visorCapLeaf,
    category: 'Ceremonial Regalia',
    featured: true,
    title: 'Visor Cap Leaf Embellishment',
    description:
      'Custom gold leaf regalia crafted for the Supreme Command ceremonial officer caps, compliant with high dimensional standards.',
  },
  {
    img: altarclothRestoration,
    category: 'Historical Restoration',
    title: 'Cathedral Altarcloth Restoration',
    description:
      'Meticulous restoration of 18th-century liturgical goldwork. Preserved historical threads stabilized with organic linen weave.',
  },
  {
    img: baronialLibraryTapestry,
    category: 'Bespoke Commissions',
    title: 'The Baronial Library Tapestry',
    description:
      'An imposing bespoke family banner featuring the ancestral lion rampant. Hand-drawn, padded with traditional card stuffing, and stitched on custom dyed royal blue velvet.',
    large: true,
  },
  {
    img: admiralShoulderEpaulettes,
    category: 'Institutional Textiles',
    title: 'Grand Admiral Shoulder Epaulettes',
    description:
      'Peerless shoulder boards utilizing double-twisted gold purl wire and meticulously hand-woven star insignias. Created to rigorous ministerial protocols.',
    large: true,
  },
]

const regaliaCategories = [
  {
    img: ph(500, 500, 'Custom Design'),
    title: 'Custom Design',
    description:
      'We create custom hand-embroidered badges, logos, patches, with fine detailing, premium threads, and an elegant finish.',
  },
  {
    img: ph(500, 500, 'Officer Caps'),
    title: 'Officer Caps',
    description:
      'We make formal officer caps for military, police, naval, airline, and other uniformed officers, symbolizing authority, discipline, and professionalism.',
  },
  {
    img: ph(500, 500, 'Shoulder Boards'),
    title: 'Shoulder Boards',
    description:
      'Shoulder boards are crafted from quality fabrics and often feature embroidered insignias, woven patterns, or metallic threads in various elegant styles.',
  },
  {
    img: ph(500, 500, 'Bespoke Patches'),
    title: 'Bespoke Patches',
    description:
      'Precision custom patches, crests, and bullion decorations tailored to airline, yacht, and royal clubs.',
  },
]

const customEmbroidery = [
  { img: ph(400, 400, 'Bullion'), title: 'Bullion Hand Embroidery' },
  { img: ph(400, 400, 'Paris Patch'), title: 'Paris Patch Hand Embroidery' },
  { img: ph(400, 400, 'DC Patch'), title: 'DC Patch Hand Embroidery' },
  { img: ph(400, 400, 'RL Patch'), title: 'RL Patch Hand Embroidery' },
]

const milestones = [
  {
    n: '01',
    title: 'Design Consultation',
    description: 'Detailed discussion or digital drafting based on your crest, arms, or design ideas.',
  },
  {
    n: '02',
    title: 'Pattern Drafting',
    description: 'Transposing artwork on to fabric layers, setting stitch directions for maximum shimmer.',
  },
  {
    n: '03',
    title: 'Hand Stitching',
    description: 'Patient wire-stretching and framing by our artisan masters in our private studio.',
  },
  {
    n: '04',
    title: 'Quality & Delivery',
    description: 'Triple-inspected under high lighting, secure waterproof packing, shipped globally.',
  },
]

const heritagePoints = [
  {
    title: 'Genuine Gold & Silver Bullion',
    description: 'Using genuine wire coils rather than synthetic substitutes for incomparable luster and lifetime durability.',
  },
  {
    title: 'Sculptural Layering',
    description: 'Our artisans use traditional card stuffing methods to lift the embroidery, creating a distinguished 3D relief.',
  },
  {
    title: 'Strict Quality Control',
    description: 'Every badge undergoes a rigorous stitch-by-stitch inspection to meet rigorous military regulations.',
  },
]

const globalSupply = [
  {
    icon: <FaPencilAlt />,
    title: 'Bespoke Sculpting',
    description: 'Every coat of arms and emblem is customized to your direct design drawing before manufacturing begins.',
  },
  {
    icon: <FaTruck />,
    title: 'Global Secured Logistics',
    description: 'Secured insured shipping with leading partners to any military installation, fashion house, or embassy worldwide.',
  },
  {
    icon: <FaHashtag />,
    title: 'No Minimum Quantity',
    description: 'Whether you need a single sovereign standard visor cap or 5,000 regiment badges, we service your demand with exact fidelity.',
  },
]

const stats = [
  { value: '40+', label: 'Years Master Stitching' },
  { value: '140k+', label: 'Emblems Delivered' },
  { value: '98.8%', label: 'Repeat Client Rate' },
  { value: '25+', label: 'Countries Served' },
]

const requirements = [
  'Reference images / artwork file (PNG/SVG/PDF)',
  'Size (in cm/inches) + placement (cap/chest/sleeve/patch)',
  'Quantity (estimate is fine)',
  'Fabric type (cotton/satin/velvet/leather etc.)',
  'Deadline + shipping location',
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Works')
  const carouselRef = useRef(null)

  const filtered =
    activeCategory === 'All Works'
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory)

  function scrollCarousel(dir) {
    const el = carouselRef.current
    if (!el) return
    el.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <>
      <Seo
        title="Home"
        description="The Hand Embroidery — manufacturer and supplier of premium hand-embroidered bullion badges, military insignia, officer caps and bespoke regalia."
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              Crafting Legacies in <span className="gold">Gold Bullion</span> &amp; Fine Silk
            </h1>
            <p>
              We design and manufacture elite hand-embroidered bullion badges, military
              insignia, company logos, officer caps, religious patches, and shoulder
              boards for luxury fashion houses — engineered to precise regulations,
              detailed with timeless mastery.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-gold">
                Request Bespoke Quote
              </Link>
              <Link to="/gallery" className="btn btn-outline">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="section-navy category-bar">
        <div className="container category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section-black portfolio-section">
        <div className="container portfolio-grid">
          {filtered.map((item) => (
            <article
              key={item.title}
              className={`portfolio-card card-outline ${item.large ? 'span-2' : ''}`}
            >
              <img src={item.img} alt={item.title} />
              <div className="portfolio-card-body">
                <p className="portfolio-category">
                  {item.category.toUpperCase()}
                  {item.featured && <span className="featured-dot"> &bull; FEATURED</span>}
                </p>
                <h3>{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Peacock feature */}
      <section className="section-black peacock-section">
        <div className="container peacock-inner">
          <img src={ph(700, 700, 'Peacock Embroidery', '0a0f1a', '2fae6b')} alt="Peacock hand-embroidered elegance" />
          <div className="peacock-copy">
            <p className="eyebrow align-left">
              <FaMedal /> The Peacock Masterpiece Series
            </p>
            <h2>The Art of Peacock Hand-Embroidered Elegance</h2>
            <p>
              A magnificent peacock brought to life through delicate hand embroidery,
              intricate golden threadwork, and vibrant detailing. Every stitch reflects
              exceptional craftsmanship, patience, and timeless artistry — transforming
              fine fabric into a luxurious masterpiece.
            </p>
            <div className="peacock-meta">
              <div>
                <p className="meta-label">Client / Estate</p>
                <p className="meta-value">The Royal Commission At Dubai</p>
              </div>
              <div>
                <p className="meta-label">Atelier Hours</p>
                <p className="meta-value">340 Hours Hand-Stitching</p>
              </div>
              <div>
                <p className="meta-label">Materials Used</p>
                <p className="meta-value">Zari Gold Wire, Real Pearls</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-gold">
              Request Design
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Manufactured Regalia */}
      <section className="section-navy regalia-section">
        <div className="container">
          <h2 className="section-heading">Custom Manufactured Regalia</h2>
          <p className="section-subheading">
            Every product is meticulously crafted by hand with premium wire and fine wool
            felt, compliant with international military and institutional protocols.
          </p>
          <div className="regalia-grid">
            {regaliaCategories.map((item) => (
              <div className="regalia-card card-outline" key={item.title}>
                <img src={item.img} alt={item.title} />
                <div className="regalia-card-body">
                  <h4>{item.title.toUpperCase()}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Custom Embroidery carousel */}
      <section className="section-black">
        <div className="container carousel-section">
          <h2 className="section-heading gold-heading">Our Custom Embroidery</h2>
          <div className="carousel-wrap">
            <button className="carousel-arrow left" onClick={() => scrollCarousel(-1)} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <div className="carousel-track" ref={carouselRef}>
              {customEmbroidery.map((item) => (
                <div className="carousel-card" key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <button className="carousel-arrow right" onClick={() => scrollCarousel(1)} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
          <div className="center-btn">
            <Link to="/gallery" className="btn btn-gold">
              See All Design
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-black milestones-section">
        <div className="container">
          <h2 className="section-heading">Meticulous Handcrafted Milestones</h2>
          <div className="milestones-grid">
            {milestones.map((m) => (
              <div className="milestone-card card-outline" key={m.n}>
                <p className="milestone-number">{m.n}</p>
                <h4>{m.title}</h4>
                <p>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Creativity */}
      <section className="section-navy quality-section">
        <div className="container quality-inner">
          <div>
            <p className="eyebrow align-left">Our Commitment</p>
            <h2>Quality, Creativity &amp; Attention to Detail</h2>
            <p>
              We are committed to quality, creativity, and attention to detail. Every
              project is approached with care, from selecting suitable fabrics and
              threads to completing the final finishing touches. We continuously explore
              new patterns, techniques, and ideas while respecting the traditional
              foundations of embroidery.
            </p>
          </div>
          <div className="quality-images">
            <img src={ph(400, 500, 'Thread Spools')} alt="Colorful thread spools" />
            <img src={ph(400, 500, 'Gold Wire Coils')} alt="Gold bullion wire coils" />
          </div>
        </div>
      </section>

      {/* Master Stitch */}
      <section className="section-black master-section">
        <div className="container master-inner">
          <div>
            <p className="eyebrow align-left">Our Heritage</p>
            <h2>The Master Stitch</h2>
            <p>
              We preserve the rigorous traditional techniques of hand embroidery. Using
              pure gold and silver wire threads (bullion), we hand-layer every
              millimeter to form highly dimensional, sculptural insignias.
            </p>
            <ol className="heritage-list">
              {heritagePoints.map((point, i) => (
                <li key={point.title}>
                  <span className="heritage-index">{i + 1}</span>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="master-images">
            <img src={ph(340, 260, 'Hand Stitching Process')} alt="Artisan hand-stitching bullion wire" />
            <img src={ph(340, 260, 'Beaded Neckline')} alt="Beaded embroidery neckline" />
            <img className="master-image-wide" src={ph(700, 220, 'Embroidered Trim')} alt="Hand-embroidered fabric trim" />
          </div>
        </div>
      </section>

      {/* Unrivalled standards */}
      <section className="section-black supply-section">
        <div className="container">
          <h2 className="section-heading">Unrivalled Standards of Global Supply</h2>
          <div className="supply-grid">
            {globalSupply.map((item) => (
              <div className="supply-card card-outline" key={item.title}>
                <div className="supply-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-black cta-section">
        <div className="container cta-inner">
          <img className="cta-decor left" src={ph(220, 220, 'Bicycle Brooch')} alt="Decorative bullion bicycle brooch" />
          <div className="cta-copy">
            <h2>Looking for Something Truly Unique?</h2>
            <p>
              We collaborate closely to transform your ideas into hand-embroidered
              artwork — designed, stitched, and finished with care.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Request A Custom Design
            </Link>
          </div>
          <img className="cta-decor right" src={ph(220, 220, 'Gold Patch')} alt="Decorative gold embroidered patch" />
        </div>
      </section>

      {/* What we need */}
      <section className="section-black requirements-section">
        <div className="container requirements-inner">
          <div>
            <h2 className="left-heading">What We Need From You</h2>
            <p className="requirements-sub">We&apos;ll start fastest when you share:</p>
            <ul className="requirements-list">
              {requirements.map((req) => (
                <li key={req}>
                  <FaCheckCircle className="check-icon" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <img src={ph(500, 500, 'Reference Photo Example')} alt="Reference sizing photo example" />
        </div>
        <div className="center-btn">
          <Link to="/contact" className="btn btn-gold">
            Request A Custom Design
          </Link>
        </div>
      </section>
    </>
  )
}
