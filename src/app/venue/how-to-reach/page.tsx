import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { Plane, Train, Bus, Car } from 'lucide-react'

const modes = [
  {
    icon: <Plane size={24} />,
    title: 'By Air',
    color: 'from-calm-400 to-calm-600',
    content: [
      'Madurai International Airport (IXM) is well connected to major Indian cities including Chennai, Bengaluru, Mumbai, Delhi, and Hyderabad.',
      'International connections are available via Chennai or Bengaluru.',
      'The airport is approximately 12 km from the city centre.',
      'Taxis and app-based cabs (Ola, Uber) are readily available from the airport.',
    ],
  },
  {
    icon: <Train size={24} />,
    title: 'By Rail',
    color: 'from-teal-400 to-teal-600',
    content: [
      'Madurai Junction is one of the major railway stations in Tamil Nadu and is well connected to all major cities.',
      'Key trains: Pandian Express (Chennai), Nellai Express (Mumbai), Vaigai Express (Chennai Central).',
      'The railway station is centrally located in the city.',
      'Pre-paid auto-rickshaws and taxis are available at the station.',
    ],
  },
  {
    icon: <Bus size={24} />,
    title: 'By Bus',
    color: 'from-sage-400 to-sage-600',
    content: [
      'Madurai is excellently connected by road to all major cities in South India.',
      'Tamil Nadu State Transport Corporation (TNSTC) runs regular services.',
      'Private luxury bus services are available from Chennai, Bengaluru, Coimbatore, and Trichy.',
      'The main bus terminus (Mattuthavani) is about 5 km from the city centre.',
    ],
  },
  {
    icon: <Car size={24} />,
    title: 'By Road',
    color: 'from-lavender-400 to-lavender-600',
    content: [
      'Madurai is connected by National Highway NH-38, NH-44, and NH-83.',
      'Distance from Chennai: ~460 km (approx. 7 hours drive).',
      'Distance from Bengaluru: ~380 km (approx. 6 hours drive).',
      'Distance from Coimbatore: ~160 km (approx. 2.5 hours drive).',
    ],
  },
]

export default function HowToReachPage() {
  return (
    <>
      <PageHero
        title="How to Reach Madurai"
        subtitle="Multiple convenient travel options to get you to the Temple City for ANCIPS 2026."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Travel' }, { label: 'How to Reach' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-4xl">
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {modes.map((mode) => (
                <div key={mode.title} className="p-7 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-lg hover:shadow-teal-900/10 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center text-white mb-5`}>
                    {mode.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-teal-800 mb-4">{mode.title}</h3>
                  <ul className="space-y-2.5">
                    {mode.content.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-body text-teal-700 leading-relaxed">
                        <span className="text-teal-400 font-bold flex-shrink-0 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-teal-100 shadow-xl shadow-teal-900/10 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125308.63574609!2d77.9731!3d9.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63833!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Madurai Map"
              />
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
