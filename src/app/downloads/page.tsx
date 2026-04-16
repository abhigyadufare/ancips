import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { Download, FileText, BookOpen, ExternalLink } from 'lucide-react'

const downloads = [
  {
    title: 'Registration Form',
    desc: 'Offline registration form for ANCIPS 2026. Fill and email to info@ancips2027.com with payment proof.',
    icon: <FileText size={22} />,
    href: 'https://ancips2027.com/assets/doc/ANCIPS 2027_REGISTRATION FORM_16-03-2026.pdf',
    color: 'from-teal-400 to-teal-600',
    size: 'PDF',
    label: 'Download Form',
  },
  {
    title: 'Conference Brochure',
    desc: 'Full conference brochure with programme details, registration information, and venue guide.',
    icon: <BookOpen size={22} />,
    href: 'https://ancips2027.com/assets/doc/ancips-brochure.pdf',
    color: 'from-lavender-400 to-lavender-600',
    size: 'PDF',
    label: 'Download Brochure',
  },
]

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        title="Downloads"
        subtitle="Access all official documents and resources for ANCIPS 2026."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {downloads.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 rounded-3xl bg-white border border-teal-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-accent uppercase tracking-widest text-teal-400 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {item.size}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-teal-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-teal-600 font-body leading-relaxed mb-5">{item.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-accent font-semibold text-teal-600 group-hover:text-teal-800 transition-colors">
                    <Download size={14} /> {item.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Register CTA */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-teal-800 to-teal-950 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-3">Ready to Register?</h3>
              <p className="text-teal-300 font-body text-sm mb-6 max-w-md mx-auto">
                Register online for the fastest confirmation, or use the offline form above.
              </p>
              <a
                href="https://registration.ancips2027.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-800 px-7 py-3 rounded-full font-accent font-semibold hover:bg-teal-50 transition-colors"
              >
                Register Online <ExternalLink size={14} />
              </a>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
