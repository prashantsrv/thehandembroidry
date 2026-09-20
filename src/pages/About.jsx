import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`Learn more about ${siteConfig.brandName} and our handcrafted embroidery journey.`}
      />
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-175 px-6">
          <h1 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-cream mb-6">
            About {siteConfig.brandName}
          </h1>
          <p className="leading-relaxed text-muted mb-4">
            {siteConfig.brandName} started with a passion for keeping the art of
            hand embroidery alive. Every stitch is made with care, blending
            traditional craftsmanship with contemporary designs.
          </p>
          <p className="leading-relaxed text-muted">
            We take pride in creating pieces that are unique, meaningful, and
            made to last — a small piece of handmade art in every order.
          </p>
        </div>
      </section>
    </>
  )
}
