import Seo from '../components/Seo'
import './Services.css'

const services = [
  {
    title: 'Custom Hand Embroidery',
    description: 'Personalized embroidery designs made to order, tailored to your style and occasion.',
  },
  {
    title: 'Traditional Motifs',
    description: 'Classic regional embroidery patterns crafted with authentic techniques.',
  },
  {
    title: 'Bridal & Occasion Wear',
    description: 'Intricate embroidery work for weddings, festivals, and special celebrations.',
  },
  {
    title: 'Home Decor Embroidery',
    description: 'Cushions, table linens, and wall art embroidered by hand.',
  },
]

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore our range of handcrafted embroidery services — custom designs, traditional motifs, bridal wear and home decor."
      />
      <section className="container services-page">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
