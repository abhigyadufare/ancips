import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

const places = [
  {
    name: 'Meenakshi Amman Temple',
    desc: 'One of the most important temples in India, featuring 14 majestic gopurams (gateway towers) adorned with thousands of colorful sculptures. A must-visit spiritual and architectural marvel.',
    img: 'venue_01',
    tags: ['Heritage', 'Spiritual', 'Architecture'],
  },
  {
    name: 'Thirumalai Nayakkar Palace',
    desc: 'A magnificent 17th-century palace built by King Thirumalai Nayak, showcasing a blend of Dravidian and Islamic architectural styles with grand pillars and a beautiful courtyard.',
    img: 'venue_02',
    tags: ['Heritage', 'History', 'Architecture'],
  },
  {
    name: 'Keeladi Museum',
    desc: 'The Keeladi excavation site has revealed a rich Sangam-age urban civilization. The museum displays artifacts that offer a remarkable window into ancient Tamil culture.',
    img: 'Keeladi-Museum',
    tags: ['Museum', 'History', 'Culture'],
  },
  {
    name: 'Gandhi Memorial Museum',
    desc: 'A moving museum dedicated to Mahatma Gandhi, built on the spot where he stayed during his visits to Madurai. Houses a rare collection of photographs and personal belongings.',
    img: 'venue_04',
    tags: ['Museum', 'History'],
  },
  {
    name: 'Vandiyur Mariamman Teppakulam',
    desc: 'One of the largest temple tanks in India, this vast square tank with a central island shrine is particularly magnificent during the Teppam (float) festival.',
    img: 'venue_05',
    tags: ['Heritage', 'Nature'],
  },
  {
    name: 'Alagar Kovil',
    desc: 'A picturesque temple complex dedicated to Lord Vishnu, nestled in the Alagar Hills about 20 km from the city, offering scenic views and serene natural surroundings.',
    img: 'venue_06',
    tags: ['Spiritual', 'Nature', 'Trekking'],
  },
]

export default function PlacesPage() {
  return (
    <>
      <PageHero
        title="Places to Visit"
        subtitle="Explore the incredible heritage, culture, and natural beauty of Madurai during your stay."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Travel' }, { label: 'Places to Visit' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {places.map((place) => (
                <div
                  key={place.name}
                  className="rounded-2xl overflow-hidden bg-white border border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="aspect-video overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://ancips2027.com/assets/img/blog/${place.img}.png`}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-teal-800 mb-2">{place.name}</h3>
                    <p className="text-sm text-teal-600 font-body leading-relaxed mb-4">{place.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {place.tags.map((tag) => (
                        <span key={tag} className="text-xs font-accent bg-teal-50 text-teal-600 border border-teal-100 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
