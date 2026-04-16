import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const venueImages = [
  { src: 'venue_03', alt: 'Conference Venue Main Hall' },
  { src: 'venue_01', alt: 'Venue Interior 1' },
  { src: 'venue_02', alt: 'Venue Interior 2' },
  { src: 'venue_04', alt: 'Venue Space 4' },
  { src: 'venue_05', alt: 'Venue Space 5' },
  { src: 'venue_06', alt: 'Venue Space 6' },
  { src: 'venue_07', alt: 'Venue Space 7' },
  { src: 'Keeladi-Museum', alt: 'Keeladi Museum' },
]

export default function VenuePage() {
  return (
    <>
      <PageHero
        title="About Venue"
        subtitle="Discover the historic and culturally vibrant city of Madurai, Tamil Nadu."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Travel' }, { label: 'About Venue' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            {/* About Madurai */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div>
                <h2 className="font-display text-4xl font-bold text-teal-800 mb-4">Madurai — The Temple City</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-lavender-400 rounded-full mb-6" />
                <div className="space-y-4 text-teal-700 font-body leading-relaxed">
                  <p>
                    <strong className="text-teal-800">Madurai</strong> is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple.
                  </p>
                  <p>
                    Covered in bright carvings of Hindu gods, the Dravidian-style temple is a major pilgrimage site. Millions attend the processions and ceremonies of April's Chithirai Festival celebrating Meenakshi and Lord Vishnu.
                  </p>
                  <p>
                    Madurai, one of the oldest living cities in the world, is renowned for its rich heritage, spiritual legacy, and warm hospitality — making it the perfect host for ANCIPS 2026.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Ancient City', 'Tamil Heritage', 'Spiritual Legacy', 'Warm Hospitality', 'Vaigai River'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-accent font-medium bg-teal-100 text-teal-700 border border-teal-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://maps.app.goo.gl/DSihMKpTVQwHCkBk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 btn-primary text-sm"
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> View on Google Maps <ExternalLink size={13} />
                  </span>
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/15 aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ancips2027.com/assets/img/blog/venue_03.png"
                  alt="Conference Venue"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="font-display text-3xl font-bold text-teal-800 mb-8 text-center">Venue Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {venueImages.map((img) => (
                  <div key={img.src} className="rounded-2xl overflow-hidden aspect-square group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://ancips2027.com/assets/img/blog/${img.src}.png`}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-pages nav */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Link
                href="/venue/places"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-accent font-medium hover:bg-teal-50 transition-colors"
              >
                Places to Visit
              </Link>
              <Link
                href="/venue/how-to-reach"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-accent font-medium hover:bg-teal-50 transition-colors"
              >
                How to Reach Madurai
              </Link>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
