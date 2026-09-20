import Seo from '../components/Seo'
import { siteConfig } from '../siteConfig'
import './About.css'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description={`Learn more about ${siteConfig.brandName} and our handcrafted embroidery journey.`}
      />
      <section className="container about-page">
        <h1>About {siteConfig.brandName}</h1>
        <p>
          {siteConfig.brandName} started with a passion for keeping the art of
          hand embroidery alive. Every stitch is made with care, blending
          traditional craftsmanship with contemporary designs.
        </p>
        <p>
          We take pride in creating pieces that are unique, meaningful, and
          made to last — a small piece of handmade art in every order.
        </p>
      </section>
    </>
  )
}
