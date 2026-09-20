import Seo from '../components/Seo'

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
      <section className="bg-ink py-16">
        <div className="mx-auto max-w-300 px-6">
          <h1 className="text-center font-serif text-[clamp(1.8rem,3vw,2.4rem)] text-cream mb-10">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div className="border border-gold/35 rounded bg-navy p-6" key={service.title}>
                <h3 className="font-serif text-[1.1rem] text-gold mb-2">{service.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
