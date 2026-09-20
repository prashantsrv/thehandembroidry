import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMedal, FaPencilAlt, FaTruck, FaHashtag, FaCheckCircle } from 'react-icons/fa'
import Seo from '../components/Seo'
import sovereignSealBadge from '../assets/portfolio/sovereign-seal-badge.png'
import visorCapLeaf from '../assets/portfolio/visor-cap-leaf.png'
import altarclothRestoration from '../assets/portfolio/altarcloth-restoration.png'
import baronialLibraryTapestry from '../assets/portfolio/baronial-library-tapestry.png'
import admiralShoulderEpaulettes from '../assets/portfolio/admiral-shoulder-epaulettes.png'
import heroImg from '../assets/hero.png'
import peacockImg from '../assets/peacock.png'
import customDesignImg from '../assets/regalia/custom-design.png'
import officerCapsImg from '../assets/regalia/officer-caps.png'
import shoulderBoardsImg from '../assets/regalia/shoulder-boards.png'
import bespokePatchesImg from '../assets/regalia/bespoke-patches.png'
import blackButterflyImg from '../assets/carousel/black-butterfly.png'
import dgPatch1Img from '../assets/carousel/dg-patch-1.png'
import rrPatchImg from '../assets/carousel/rr-patch.png'
import crownPatchImg from '../assets/carousel/crown-patch.png'
import bullionImg from '../assets/carousel/bullion.png'
import rlPatch1Img from '../assets/carousel/rl-patch-1.png'
import dcPatchImg from '../assets/carousel/dc-patch.png'
import butterflyImg from '../assets/carousel/butterfly.png'
import lionPatchImg from '../assets/carousel/lion-patch.png'
import hondaPatchImg from '../assets/carousel/honda-patch.png'
import dbPatchImg from '../assets/carousel/db-patch.png'
import dgPatch2Img from '../assets/carousel/dg-patch-2.png'
import militaryCapsPatchImg from '../assets/carousel/military-caps-patch.png'
import capPatch1Img from '../assets/carousel/cap-patch-1.png'
import parisPatchImg from '../assets/carousel/paris-patch.png'
import capPatch2Img from '../assets/carousel/cap-patch-2.png'
import dragonPatchImg from '../assets/carousel/dragon-patch.png'
import rlPatch2Img from '../assets/carousel/rl-patch-2.png'

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
    img: customDesignImg,
    title: 'Custom Design',
    description:
      'We create custom hand-embroidered badges, logos, patches, with fine detailing, premium threads, and an elegant finish.',
  },
  {
    img: officerCapsImg,
    title: 'Officer Caps',
    description:
      'We make formal officer caps for military, police, naval, airline, and other uniformed officers, symbolizing authority, discipline, and professionalism.',
  },
  {
    img: shoulderBoardsImg,
    title: 'Shoulder Boards',
    description:
      'Shoulder boards are crafted from quality fabrics and often feature embroidered insignias, woven patterns, or metallic threads in various elegant styles.',
  },
  {
    img: bespokePatchesImg,
    title: 'Bespoke Patches',
    description:
      'Precision custom patches, crests, and bullion decorations tailored to airline, yacht, and royal clubs.',
  },
]

const customEmbroidery = [
  { img: blackButterflyImg, title: 'Black Butterfly Hand Embroidery' },
  { img: dgPatch1Img, title: 'DG Patch Hand Embroidery' },
  { img: rrPatchImg, title: 'RR Patch Hand Embroidery' },
  { img: crownPatchImg, title: 'Crown Patch Hand Embroidery' },
  { img: bullionImg, title: 'Bullion Hand Embroidery' },
  { img: rlPatch1Img, title: 'RL Patch Hand Embroidery' },
  { img: dcPatchImg, title: 'DC Patch Hand Embroidery' },
  { img: butterflyImg, title: 'Butterfly Hand Embroidery' },
  { img: lionPatchImg, title: 'Lion Patch Hand Embroidery' },
  { img: hondaPatchImg, title: 'Honda Patch Hand Embroidery' },
  { img: dbPatchImg, title: 'DB Patch Hand Embroidery' },
  { img: dgPatch2Img, title: 'DG Patch Hand Embroidery' },
  { img: militaryCapsPatchImg, title: 'Military Caps Patch Hand Embroidery' },
  { img: capPatch1Img, title: 'Cap Patch Hand Embroidery' },
  { img: parisPatchImg, title: 'Paris Patch Hand Embroidery' },
  { img: capPatch2Img, title: 'Cap Patch Hand Embroidery' },
  { img: dragonPatchImg, title: 'Dragon Patch Hand Embroidery' },
  { img: rlPatch2Img, title: 'RL Patch Hand Embroidery' },
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

const btnGold =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap'
const btnOutline =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-gold border border-gold hover:bg-gold/10 transition-colors whitespace-nowrap'
const cardOutline = 'border border-gold/35 rounded'
const eyebrow = 'flex items-center gap-3 text-gold text-xs font-semibold uppercase tracking-[0.12em] mb-3'
const sectionHeading = 'text-center font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-3'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All Works')
  const carouselRef = useRef(null)
  const carouselPaused = useRef(false)

  const filtered =
    activeCategory === 'All Works'
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory)

  useEffect(() => {
    let frameId
    const pxPerFrame = 0.6

    function tick() {
      const el = carouselRef.current
      if (el && !carouselPaused.current) {
        const maxScroll = el.scrollWidth - el.clientWidth
        if (el.scrollLeft >= maxScroll - 1) {
          el.scrollLeft = 0
        } else {
          el.scrollLeft += pxPerFrame
        }
      }
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <Seo
        title="Home"
        description="The Hand Embroidery — manufacturer and supplier of premium hand-embroidered bullion badges, military insignia, officer caps and bespoke regalia."
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,6,10,1)_0%,rgba(6,6,10,1)_46%,rgba(6,6,10,0.55)_62%,rgba(6,6,10,0.12)_78%)]" />
        <div className="relative mx-auto max-w-300 px-6 flex min-h-[480px] items-center py-16 sm:min-h-[560px] sm:py-24">
          <div className="max-w-xl">
            <h1 className="font-serif text-[clamp(2.2rem,3.6vw,3.2rem)] leading-[1.15] text-cream mb-5">
              Crafting Legacies in <span className="text-gold">Gold Bullion</span> &amp; Fine Silk
            </h1>
            <p className="text-[1.02rem] leading-relaxed text-muted max-w-[46ch] mb-8">
              We design and manufacture elite hand-embroidered bullion badges, military
              insignia, company logos, officer caps, religious patches, and shoulder
              boards for luxury fashion houses — engineered to precise regulations,
              detailed with timeless mastery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className={btnGold}>
                Request Bespoke Quote
              </Link>
              <Link to="/gallery" className={btnOutline}>
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-navy border-b border-gold/15 py-6">
        <div className="mx-auto max-w-300 px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-gold border-gold text-[#1a1305]'
                  : 'border-gold/35 text-muted hover:border-gold hover:text-cream'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {filtered.map((item) => (
            <article
              key={item.title}
              className={`${cardOutline} bg-navy overflow-hidden flex flex-col col-span-1 ${
                item.large ? 'sm:col-span-2 lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <img src={item.img} alt={item.title} className="w-full aspect-[7/5] object-cover" />
              <div className="p-6 pt-5">
                <p className="text-gold text-[0.72rem] font-bold tracking-wider mb-2">
                  {item.category.toUpperCase()}
                  {item.featured && <span className="text-gold-light"> &bull; FEATURED</span>}
                </p>
                <h3 className="font-serif text-[1.15rem] text-cream mb-2">{item.title}</h3>
                <p className="text-[0.88rem] leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Peacock feature */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <img
            src={peacockImg}
            alt="Peacock hand-embroidered elegance"
            className="w-full aspect-square object-cover rounded border border-gold/20"
          />
          <div>
            <p className={eyebrow}>
              <FaMedal /> The Peacock Masterpiece Series
            </p>
            <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-4">
              The Art of Peacock Hand-Embroidered Elegance
            </h2>
            <p className="leading-relaxed text-muted mb-7">
              A magnificent peacock brought to life through delicate hand embroidery,
              intricate golden threadwork, and vibrant detailing. Every stitch reflects
              exceptional craftsmanship, patience, and timeless artistry — transforming
              fine fabric into a luxurious masterpiece.
            </p>
            <div className="grid grid-cols-1 gap-5 mb-8 pb-8 border-b border-gold/15 sm:grid-cols-3">
              <div>
                <p className="text-gold text-[0.7rem] tracking-wider uppercase mb-1.5">Client / Estate</p>
                <p className="text-[0.92rem] leading-tight text-cream">The Royal Commission At Dubai</p>
              </div>
              <div>
                <p className="text-gold text-[0.7rem] tracking-wider uppercase mb-1.5">Atelier Hours</p>
                <p className="text-[0.92rem] leading-tight text-cream">340 Hours Hand-Stitching</p>
              </div>
              <div>
                <p className="text-gold text-[0.7rem] tracking-wider uppercase mb-1.5">Materials Used</p>
                <p className="text-[0.92rem] leading-tight text-cream">Zari Gold Wire, Real Pearls</p>
              </div>
            </div>
            <Link to="/contact" className={btnGold}>
              Request Design
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Manufactured Regalia */}
      <section className="bg-navy py-18">
        <div className="mx-auto max-w-300 px-6">
          <h2 className={sectionHeading}>Custom Manufactured Regalia</h2>
          <p className="text-center max-w-[60ch] mx-auto mb-10 leading-relaxed text-muted">
            Every product is meticulously crafted by hand with premium wire and fine wool
            felt, compliant with international military and institutional protocols.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {regaliaCategories.map((item) => (
              <div className={`${cardOutline} bg-ink overflow-hidden`} key={item.title}>
                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover" />
                <div className="p-5">
                  <h4 className="text-gold text-[0.85rem] tracking-wide mb-2">{item.title.toUpperCase()}</h4>
                  <p className="text-[0.85rem] leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Custom Embroidery carousel */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <h2 className={`${sectionHeading} text-gold`}>Our Custom Embroidery</h2>
          <div className="mb-10 mt-10">
            <div
              ref={carouselRef}
              onMouseEnter={() => (carouselPaused.current = true)}
              onMouseLeave={() => (carouselPaused.current = false)}
              className="flex gap-6 overflow-x-auto scrollbar-none"
            >
              {customEmbroidery.map((item, i) => (
                <div className="shrink-0 w-[260px] text-center" key={`${item.title}-${i}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded border border-gold/30 mb-3.5"
                  />
                  <p className="text-cream font-semibold text-[0.95rem]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Link to="/gallery" className={btnGold}>
              See All Design
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <h2 className={sectionHeading}>Meticulous Handcrafted Milestones</h2>
          <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div className={`${cardOutline} bg-navy p-7`} key={m.n}>
                <p className="font-serif text-[2rem] text-gold mb-3">{m.n}</p>
                <h4 className="text-cream text-[1rem] mb-2.5">{m.title}</h4>
                <p className="text-[0.85rem] leading-relaxed text-muted">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Creativity */}
      <section className="bg-navy py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <div>
            <p className={eyebrow}>Our Commitment</p>
            <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-5">
              Quality, Creativity &amp; Attention to Detail
            </h2>
            <p className="leading-relaxed text-muted">
              We are committed to quality, creativity, and attention to detail. Every
              project is approached with care, from selecting suitable fabrics and
              threads to completing the final finishing touches. We continuously explore
              new patterns, techniques, and ideas while respecting the traditional
              foundations of embroidery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              src={ph(400, 500, 'Thread Spools')}
              alt="Colorful thread spools"
              className="w-full h-full self-end object-cover rounded border border-gold/20"
            />
            <img
              src={ph(400, 500, 'Gold Wire Coils')}
              alt="Gold bullion wire coils"
              className="w-full h-full object-cover rounded border border-gold/20"
            />
          </div>
        </div>
      </section>

      {/* Master Stitch */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-2">
          <div>
            <p className={eyebrow}>Our Heritage</p>
            <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-5">The Master Stitch</h2>
            <p className="leading-relaxed text-muted mb-7">
              We preserve the rigorous traditional techniques of hand embroidery. Using
              pure gold and silver wire threads (bullion), we hand-layer every
              millimeter to form highly dimensional, sculptural insignias.
            </p>
            <ol className="flex flex-col gap-6">
              {heritagePoints.map((point, i) => (
                <li key={point.title} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full border border-gold text-gold font-serif font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-cream text-[0.95rem] mb-1">{point.title}</h4>
                    <p className="text-[0.85rem] leading-relaxed text-muted">{point.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              src={ph(340, 260, 'Hand Stitching Process')}
              alt="Artisan hand-stitching bullion wire"
              className="w-full h-full object-cover rounded border border-gold/20"
            />
            <img
              src={ph(340, 260, 'Beaded Neckline')}
              alt="Beaded embroidery neckline"
              className="w-full h-full object-cover rounded border border-gold/20"
            />
            <img
              className="col-span-2 w-full h-full object-cover rounded border border-gold/20"
              src={ph(700, 220, 'Embroidered Trim')}
              alt="Hand-embroidered fabric trim"
            />
          </div>
        </div>
      </section>

      {/* Unrivalled standards */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <h2 className={sectionHeading}>Unrivalled Standards of Global Supply</h2>
          <div className="grid grid-cols-1 gap-6 mt-10 mb-14 sm:grid-cols-3">
            {globalSupply.map((item) => (
              <div className={`${cardOutline} bg-navy p-8 text-center`} key={item.title}>
                <div className="w-14 h-14 rounded-full border border-gold text-gold text-xl flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h4 className="text-cream text-[1.05rem] mb-3">{item.title}</h4>
                <p className="text-[0.88rem] leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-gold mb-1.5">{stat.value}</p>
                <p className="text-[0.72rem] tracking-wide text-muted">{stat.label.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-8 items-center text-center lg:grid-cols-[220px_1fr_220px] lg:text-left">
          <img
            className="hidden lg:block w-full aspect-square object-contain opacity-90"
            src={ph(220, 220, 'Bicycle Brooch')}
            alt="Decorative bullion bicycle brooch"
          />
          <div className="text-center">
            <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-4">
              Looking for Something Truly Unique?
            </h2>
            <p className="max-w-[46ch] mx-auto mb-7 leading-relaxed text-muted">
              We collaborate closely to transform your ideas into hand-embroidered
              artwork — designed, stitched, and finished with care.
            </p>
            <Link to="/contact" className={btnGold}>
              Request A Custom Design
            </Link>
          </div>
          <img
            className="hidden lg:block w-full aspect-square object-contain opacity-90"
            src={ph(220, 220, 'Gold Patch')}
            alt="Decorative gold embroidered patch"
          />
        </div>
      </section>

      {/* What we need */}
      <section className="bg-ink py-18 pb-14">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center mb-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-2">
              What We Need From You
            </h2>
            <p className="text-muted mb-6">We&apos;ll start fastest when you share:</p>
            <ul className="flex flex-col gap-4">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-[0.95rem] text-cream">
                  <FaCheckCircle className="text-gold mt-0.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={ph(500, 500, 'Reference Photo Example')}
            alt="Reference sizing photo example"
            className="w-full aspect-square object-cover rounded border border-gold/20"
          />
        </div>
        <div className="flex justify-center">
          <Link to="/contact" className={btnGold}>
            Request A Custom Design
          </Link>
        </div>
      </section>
    </>
  )
}
