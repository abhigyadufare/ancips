import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

const officeBearers = [
  { title: 'President', name: 'To be announced' },
  { title: 'President Elect', name: 'To be announced' },
  { title: 'Immediate Past President', name: 'To be announced' },
  { title: 'Honorary General Secretary', name: 'To be announced' },
  { title: 'Honorary Joint Secretary', name: 'To be announced' },
  { title: 'Honorary Treasurer', name: 'To be announced' },
  { title: 'Honorary Joint Treasurer', name: 'To be announced' },
  { title: 'Editor, Indian Journal of Psychiatry', name: 'To be announced' },
]

export default function OfficeBearersPage() {
  return (
    <>
      <PageHero
        title="Office Bearers"
        subtitle="The office bearers of the Indian Psychiatric Society for the current term."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Committee' }, { label: 'Office Bearers' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-4xl">
          <Section>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {officeBearers.map((bearer, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-teal-100 shadow-sm hover:shadow-md hover:shadow-teal-900/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-accent font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-xs font-accent uppercase tracking-widest text-teal-400 mb-1">{bearer.title}</p>
                    <p className="font-display text-lg font-semibold text-teal-800">{bearer.name}</p>
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
