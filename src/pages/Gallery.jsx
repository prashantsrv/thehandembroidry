import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import heroLionsImg from '../assets/gallery/hero-lions.webp'
import heroJenkinsImg from '../assets/gallery/hero-jenkins.webp'
import ctaBgImg from '../assets/gallery/cta-bg.webp'
import lionChain from '../assets/gallery/grid/lion-chain.webp'
import jbMonogram from '../assets/gallery/grid/jb-monogram.webp'
import shield315 from '../assets/gallery/grid/shield-31-5.webp'
import heraldicCrest from '../assets/gallery/grid/heraldic-crest.webp'
import griffinWings from '../assets/gallery/grid/griffin-wings.webp'
import equestrianKnight from '../assets/gallery/grid/equestrian-knight.webp'
import silverACrest from '../assets/gallery/grid/silver-a-crest.webp'
import chanelParis from '../assets/gallery/grid/chanel-paris.webp'
import ralphLaurenCrest from '../assets/gallery/grid/ralph-lauren-crest.webp'
import sunflowerEmblem from '../assets/gallery/grid/sunflower-emblem.webp'
import royalCrownCrest from '../assets/gallery/grid/royal-crown-crest.webp'
import italiaShield from '../assets/gallery/grid/italia-shield.webp'
import dhWreathCrest from '../assets/gallery/grid/dh-wreath-crest.webp'
import mMonogram from '../assets/gallery/grid/m-monogram.webp'
import spiderPatch from '../assets/gallery/grid/spider-patch.webp'
import balmainCrest from '../assets/gallery/grid/balmain-crest.webp'
import eagleFleurShield from '../assets/gallery/grid/eagle-fleur-shield.webp'
import mangataBeeHeart from '../assets/gallery/grid/mangata-bee-heart.webp'
import perfectGentlemanCrest from '../assets/gallery/grid/perfect-gentleman-crest.webp'
import circularMonogram from '../assets/gallery/grid/circular-monogram.webp'
import bjWreathCrest from '../assets/gallery/grid/bj-wreath-crest.webp'
import featherBrooch from '../assets/gallery/grid/feather-brooch.webp'
import birdsOnBranch from '../assets/gallery/grid/birds-on-branch.webp'
import parrotPatches from '../assets/gallery/grid/parrot-patches.webp'
import biharPoliceBadges from '../assets/gallery/grid/bihar-police-badges.webp'
import fdLfyCrest from '../assets/gallery/grid/fd-lfy-crest.webp'
import mothPatch from '../assets/gallery/grid/moth-patch.webp'
import goldPlumeBadge from '../assets/gallery/grid/gold-plume-badge.webp'
import squirrelPatch from '../assets/gallery/grid/squirrel-patch.webp'
import badgeCollection from '../assets/gallery/grid/badge-collection.webp'
import embroideredLady from '../assets/gallery/grid/embroidered-lady.webp'
import balmainPhoenix from '../assets/gallery/grid/balmain-phoenix.webp'
import rjCrest from '../assets/gallery/grid/rj-crest.webp'
import classicAnchorCrest from '../assets/gallery/grid/classic-anchor-crest.webp'
import balmain1946 from '../assets/gallery/grid/balmain-1946.webp'
import craShield from '../assets/gallery/grid/cra-shield.webp'

const gallery = [
  { img: lionChain, title: 'Lion Chain Badge' },
  { img: jbMonogram, title: 'JB Monogram' },
  { img: shield315, title: '31/5 Shield' },
  { img: heraldicCrest, title: 'Heraldic Crest' },
  { img: griffinWings, title: 'Griffin Wings' },
  { img: equestrianKnight, title: 'Equestrian Knight' },
  { img: silverACrest, title: 'Silver A Crest' },
  { img: chanelParis, title: 'Chanel Paris Badge' },
  { img: ralphLaurenCrest, title: 'Ralph Lauren Crest' },
  { img: sunflowerEmblem, title: 'Sunflower Emblem' },
  { img: royalCrownCrest, title: 'Royal Crown Crest' },
  { img: italiaShield, title: 'Italia Shield' },
  { img: dhWreathCrest, title: 'DH Wreath Crest' },
  { img: mMonogram, title: 'M Monogram' },
  { img: spiderPatch, title: 'Spider Patch' },
  { img: balmainCrest, title: 'Balmain Crest' },
  { img: eagleFleurShield, title: 'Eagle Fleur Shield' },
  { img: mangataBeeHeart, title: 'Mangata Bee Heart' },
  { img: perfectGentlemanCrest, title: 'Perfect Gentleman Crest' },
  { img: circularMonogram, title: 'Circular Monogram Badge' },
  { img: bjWreathCrest, title: 'BJ Wreath Crest' },
  { img: featherBrooch, title: 'Feather Brooch' },
  { img: birdsOnBranch, title: 'Birds on Branch' },
  { img: parrotPatches, title: 'Parrot Patches' },
  { img: biharPoliceBadges, title: 'Bihar Police Badges' },
  { img: fdLfyCrest, title: 'FD LFY Crest' },
  { img: mothPatch, title: 'Moth Patch' },
  { img: goldPlumeBadge, title: 'Gold Plume Badge' },
  { img: squirrelPatch, title: 'Squirrel Patch' },
  { img: badgeCollection, title: 'Badge Collection' },
  { img: embroideredLady, title: 'Embroidered Lady' },
  { img: balmainPhoenix, title: 'Balmain Phoenix Crest' },
  { img: rjCrest, title: 'RJ Crest' },
  { img: classicAnchorCrest, title: 'Classic Anchor Crest' },
  { img: balmain1946, title: 'Balmain 1946 Crest' },
  { img: craShield, title: 'CRA Shield' },
]

const btnGold =
  'inline-flex items-center gap-2 rounded px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-[#1a1305] bg-gold hover:bg-gold-light transition-colors whitespace-nowrap'
const cardOutline = 'border border-gold/35 rounded'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery & Portfolio"
        description="Premium hand embroidery patches — explore The Hand Embroidery's gallery of bespoke bullion badges, crests, and monograms."
      />

      {/* Hero */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6 grid grid-cols-1 gap-10 items-center lg:grid-cols-[220px_1fr_220px]">
          <img
            src={heroLionsImg}
            alt="Lions International hand-embroidered badge"
            className="w-40 mx-auto aspect-square object-contain lg:w-full"
          />
          <div className="text-center">
            <h1 className="font-serif text-[clamp(2rem,3.4vw,2.8rem)] leading-[1.15] text-cream mb-5">
              Premium Hand Embroidery Patches
            </h1>
            <p className="leading-relaxed text-muted max-w-[50ch] mx-auto mb-7">
              A curated collection of our finest bullion work — heraldic crests, fashion-house
              monograms, and bespoke commissions hand-stitched with gold and silver wire.
            </p>
            <Link to="/contact" className={btnGold}>
              Request Custom Design
            </Link>
          </div>
          <img
            src={heroJenkinsImg}
            alt="Jenkins Cup champion hand-embroidered badge"
            className="w-40 mx-auto aspect-square object-contain lg:w-full"
          />
        </div>
      </section>

      {/* Our Gallery */}
      <section className="bg-ink py-18">
        <div className="mx-auto max-w-300 px-6">
          <h2 className="text-center font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] text-cream mb-10">
            Our Gallery
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {gallery.map((item, i) => (
              <div className={`${cardOutline} bg-navy overflow-hidden`} key={`${item.title}-${i}`}>
                <img loading="lazy" src={item.img} alt={item.title} className="w-full aspect-square object-contain p-1.5 sm:p-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-ink bg-cover bg-center py-18"
        style={{ backgroundImage: `url(${ctaBgImg})` }}
      >
        <div className="mx-auto max-w-175 px-6 text-center">
          <h2 className="font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] text-cream mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="leading-relaxed text-muted mb-7">
            Contact our private commission desk today. We offer digital pattern drafting,
            pre-production sampling, and custom packaging shipped secure and waterproof
            worldwide.
          </p>
          <Link to="/contact" className={btnGold}>
            Request Custom Design
          </Link>
        </div>
      </section>
    </>
  )
}
