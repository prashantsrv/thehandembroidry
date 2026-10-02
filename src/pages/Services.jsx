import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import heroBadgeImg from '../assets/services/hero-badge.webp'
import legacyCrestImg from '../assets/services/legacy-crest.webp'
import timelinesBgImg from '../assets/services/timelines-bg.webp'
import fashion1Img from '../assets/services/fashion-1.webp'
import fashion2Img from '../assets/services/fashion-2.webp'
import fashion3Img from '../assets/services/fashion-3.webp'
import honeyFitzImg from '../assets/services/gallery/honey-fitz.webp'
import coutureBridalImg from '../assets/services/gallery/couture-bridal.webp'
import butterflyHangingImg from '../assets/services/gallery/butterfly-hanging.webp'
import lion1Img from '../assets/services/gallery/lion-1.webp'
import peacockImg from '../assets/services/gallery/peacock.webp'
import owlBridalImg from '../assets/services/gallery/owl-bridal.webp'
import crownCapImg from '../assets/services/gallery/crown-cap.webp'
import letterImg from '../assets/services/gallery/letter.webp'
import potentia1Img from '../assets/services/gallery/potentia-1.webp'
import crown1Img from '../assets/services/gallery/crown-1.webp'
import butterfly1Img from '../assets/services/gallery/butterfly-1.webp'
import lion2Img from '../assets/services/gallery/lion-2.webp'
import potentia2Img from '../assets/services/gallery/potentia-2.webp'
import crown2Img from '../assets/services/gallery/crown-2.webp'
import butterfly2Img from '../assets/services/gallery/butterfly-2.webp'
import lion3Img from '../assets/services/gallery/lion-3.webp'

const gallery = [
  { img: honeyFitzImg, title: 'Honey Fitz Hand Embroidery' },
  { img: coutureBridalImg, title: 'Couture & Bridal Embroidery' },
  { img: butterflyHangingImg, title: 'Butterfly Hanging Embroidery' },
  { img: lion1Img, title: 'Lion Hand Embroidery' },
  { img: peacockImg, title: 'Peacock Hand Embroidery' },
  { img: owlBridalImg, title: 'Owl Bridal Embroidery' },
  { img: crownCapImg, title: 'Crown Cap Hand Embroidery' },
  { img: letterImg, title: 'Letter Hand Embroidery' },
  { img: potentia1Img, title: 'Potentia Hand Embroidery' },
  { img: crown1Img, title: 'Crown Hand Embroidery' },
  { img: butterfly1Img, title: 'Butterfly Hand Embroidery' },
  { img: lion2Img, title: 'Lion Hand Embroidery' },
  { img: potentia2Img, title: 'Potentia Hand Embroidery' },
  { img: crown2Img, title: 'Crown Hand Embroidery' },
  { img: butterfly2Img, title: 'Butterfly Hand Embroidery' },
  { img: lion3Img, title: 'Lion Hand Embroidery' },
]

const fashionDress = [
  {
    img: fashion1Img,
    title: 'Bespoke Hand Embroidery',
    description: 'Custom-designed motifs brought to life with precision, fine detailing, and skilled craftsmanship.',
  },
  {
    img: fashion2Img,
    title: 'Bespoke Hand Embroidery',
    description: 'Premium hand embroidery using beads, sequins, metallic threads, and traditional techniques for a refined finish.',
  },
  {
    img: fashion3Img,
    title: 'Fashion Hand Embroidery',
    description: 'Every piece is expertly embroidered by skilled artisans, blending identity, heritage, pride, and professionalism with lasting elegance.',
  },
]

const timelines = [
  { stage: 'Sample Development', timeframe: '1–5 days' },
  { stage: 'Bulk Production', timeframe: '10–35 days depending on volume' },
  { stage: 'Quality Control & Packing', timeframe: '1–4 days' },
  { stage: 'Shipping / Export Dispatch', timeframe: '5–8 days' },
]

const btnGold =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap'
const cardOutline = 'border border-gold/35 rounded'
const eyebrow = 'flex items-center gap-3 text-gold text-xs font-semibold uppercase tracking-widest mb-3'
const sectionHeading = 'text-center font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-3'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Custom badges & bullion emblems — hand-embroidered military insignia, heraldic crests, and bespoke regalia for luxury houses and institutions worldwide."
      />

      {/* Hero */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-10 items-center lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.15] text-cream mb-5">
              Custom Badges &amp; Bullion Emblems
            </h1>
            <p className="leading-relaxed text-muted max-w-[50ch] mb-7">
              We draft, spin, and hand-craft custom wire emblems, military style badges, heraldic
              crests, and exquisite ceremonial insignia for luxury houses, sovereign states, and
              prestigious institutions worldwide.
            </p>
            <Link to="/contact" className={btnGold}>
              Request A Quote
            </Link>
          </div>
          <img
            src={heroBadgeImg}
            alt="Custom bullion badge hand-embroidered on jacket"
            className="relative top-4 mx-auto w-full aspect-1056/907 object-cover rounded border border-gold/20"
          />
        </div>
      </section>

      {/* Crafted by Hand, Trusted Worldwide */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-14 items-center lg:grid-cols-[1fr_1.3fr]">
          <div className="bg-ink rounded border border-gold/20 p-6">
            <img loading="lazy"
              src={legacyCrestImg}
              alt="Beaded crown and bee hand embroidery"
              className="w-full h-auto object-contain"
            />
          </div>
          <div>
            <p className={eyebrow}>Our Legacy</p>
            <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-5">
              Crafted by Hand, Trusted Worldwide
            </h2>
            <p className="italic text-gold-light leading-relaxed mb-5 max-w-[52ch]">
              &ldquo;Every stitch is an act of preservation, carrying the lineage of goldwork
              forward to modern institutions.&rdquo;
            </p>
            <p className="leading-relaxed text-muted mb-4 max-w-[56ch]">
              Based in Ghaziabad, India, this historic epicentre of master embroiderers, The
              Hand Embroidery atelier comprises generational artisans. We fuse age-old zardozi
              techniques with stringent international quality standards to deliver robust,
              high-fidelity bullion emblems that withstand the rigors of ceremonial and field
              deployment.
            </p>
            <p className="leading-relaxed text-muted max-w-[56ch]">
              From our digital drafting boards to the final burnish of wire embroidery, we
              maintain full chain-of-custody control, ensuring premium materials, non-tarnish
              wire, and impeccable finish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Signature Collection */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <p className={`${eyebrow} justify-center`}>The Gallery</p>
          <h2 className={sectionHeading}>Our Signature Collection</h2>
          <div className="grid grid-cols-2 gap-6 mt-10 mb-10 sm:grid-cols-4">
            {gallery.map((item, i) => (
              <div className={`${cardOutline} bg-navy overflow-hidden`} key={`${item.title}-${i}`}>
                <img loading="lazy" src={item.img} alt={item.title} className="w-full aspect-square object-cover" />
                <p className="text-cream text-center text-[0.85rem] font-semibold py-3 px-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/contact" className={btnGold}>
              Request A Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Fashion Dress */}
      <section className="bg-navy py-18">
        <div className="mx-auto max-w-250 px-6">
          <h2 className="text-center font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream tracking-wide mb-10">
            Fashion Dress
          </h2>
          <div className="grid grid-cols-1 gap-6 mx-auto max-w-sm sm:max-w-none sm:grid-cols-3">
            {fashionDress.map((item, i) => (
              <div className={`${cardOutline} bg-ink overflow-hidden`} key={i}>
                <img loading="lazy" src={item.img} alt={item.title} className="w-full aspect-4/5 object-cover" />
                <div className="p-5">
                  <h4 className="text-gold text-[0.8rem] tracking-wide mb-2">{item.title.toUpperCase()}</h4>
                  <p className="text-[0.85rem] leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-175 px-6 text-center">
          <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="leading-relaxed text-muted mb-7">
            Contact our export desk today to request a physical sample kit of our gold purl
            stitching, or submit your design for an obligation-free digital proof.
          </p>
          <Link to="/contact" className={btnGold}>
            Request A Quote
          </Link>
        </div>
      </section>

      {/* Timelines to Confirm */}
      <section
        className="bg-ink bg-cover bg-center py-18 pb-20"
        style={{ backgroundImage: `url(${timelinesBgImg})` }}
      >
        <div className="mx-auto max-w-175 px-6">
          <h2 className="text-center font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-10">
            Timelines to Confirm
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gold/30">
                <th className="text-left text-gold text-xs tracking-widest uppercase font-semibold py-3">
                  Stage
                </th>
                <th className="text-left text-gold text-xs tracking-widest uppercase font-semibold py-3">
                  Typical Timeframe (Approx.)
                </th>
              </tr>
            </thead>
            <tbody>
              {timelines.map((row) => (
                <tr key={row.stage} className="border-b border-white/10">
                  <td className="py-4 text-cream text-[0.95rem]">{row.stage}</td>
                  <td className="py-4 text-muted text-[0.95rem]">{row.timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
