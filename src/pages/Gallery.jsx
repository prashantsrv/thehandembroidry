import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import heroLionsImg from '../assets/gallery/hero-lions.png'
import heroJenkinsImg from '../assets/gallery/hero-jenkins.png'
import ctaBgImg from '../assets/gallery/cta-bg.png'
import lionChain from '../assets/gallery/grid/lion-chain.png'
import jbMonogram from '../assets/gallery/grid/jb-monogram.png'
import shield315 from '../assets/gallery/grid/shield-31-5.png'
import heraldicCrest from '../assets/gallery/grid/heraldic-crest.png'
import griffinWings from '../assets/gallery/grid/griffin-wings.png'
import equestrianKnight from '../assets/gallery/grid/equestrian-knight.png'
import silverACrest from '../assets/gallery/grid/silver-a-crest.png'
import chanelParis from '../assets/gallery/grid/chanel-paris.png'
import ralphLaurenCrest from '../assets/gallery/grid/ralph-lauren-crest.png'
import sunflowerEmblem from '../assets/gallery/grid/sunflower-emblem.png'
import royalCrownCrest from '../assets/gallery/grid/royal-crown-crest.png'
import italiaShield from '../assets/gallery/grid/italia-shield.png'
import dhWreathCrest from '../assets/gallery/grid/dh-wreath-crest.png'
import mMonogram from '../assets/gallery/grid/m-monogram.png'
import spiderPatch from '../assets/gallery/grid/spider-patch.png'
import balmainCrest from '../assets/gallery/grid/balmain-crest.png'
import eagleFleurShield from '../assets/gallery/grid/eagle-fleur-shield.png'
import mangataBeeHeart from '../assets/gallery/grid/mangata-bee-heart.png'
import perfectGentlemanCrest from '../assets/gallery/grid/perfect-gentleman-crest.png'
import circularMonogram from '../assets/gallery/grid/circular-monogram.png'
import bjWreathCrest from '../assets/gallery/grid/bj-wreath-crest.png'
import featherBrooch from '../assets/gallery/grid/feather-brooch.png'
import birdsOnBranch from '../assets/gallery/grid/birds-on-branch.png'
import parrotPatches from '../assets/gallery/grid/parrot-patches.png'
import biharPoliceBadges from '../assets/gallery/grid/bihar-police-badges.png'
import fdLfyCrest from '../assets/gallery/grid/fd-lfy-crest.png'
import mothPatch from '../assets/gallery/grid/moth-patch.png'
import goldPlumeBadge from '../assets/gallery/grid/gold-plume-badge.png'
import squirrelPatch from '../assets/gallery/grid/squirrel-patch.png'
import badgeCollection from '../assets/gallery/grid/badge-collection.png'
import embroideredLady from '../assets/gallery/grid/embroidered-lady.png'
import balmainPhoenix from '../assets/gallery/grid/balmain-phoenix.png'
import rjCrest from '../assets/gallery/grid/rj-crest.png'
import classicAnchorCrest from '../assets/gallery/grid/classic-anchor-crest.png'
import balmain1946 from '../assets/gallery/grid/balmain-1946.png'
import craShield from '../assets/gallery/grid/cra-shield.png'

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
            className="hidden lg:block w-full aspect-square object-cover rounded border border-gold/20"
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
            className="hidden lg:block w-full aspect-square object-cover rounded border border-gold/20"
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
                <img src={item.img} alt={item.title} className="w-full aspect-square object-cover" />
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
