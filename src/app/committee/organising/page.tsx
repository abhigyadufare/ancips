import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

const committee = [
  { name: 'Dr K Ramakrishnan', role: 'Organising Chairman', img: 'K Ramakrishnan' },
  { name: 'Dr T. Kumanan', role: 'Co-Chairperson', img: 'T Kumanan' },
  { name: 'Dr Panneer Selvan C', role: 'Co-Chairperson', img: 'Panneer Selvan C' },
  { name: 'Dr R Sabrin Sonjeev Ross', role: 'Organizing Secretary', img: 'R Sabrin Sanjeev Ross' },
  { name: 'Dr Siva Ilango T', role: 'Joint Organising Secretary', img: 'Siva Ilango' },
  { name: 'Dr Arun Kumar', role: 'Hon Treasurer', img: 'Arunkumar N' },
  { name: 'Dr Sathyamoorthy', role: 'Joint Hon Treasurer', img: 'Sathyamoorthy' },
  { name: 'Dr Sivasailam', role: 'Joint Hon Treasurer', img: 'Sivasailam' },
  { name: 'Dr M Suresh Kumar', role: 'Scientific Chairperson', img: 'M Suresh Kumar' },
  { name: 'Dr Sugadev', role: 'Scientific Co-Chairperson', img: 'Sugadev' },
]

export default function OrganisingCommitteePage() {
  return (
    <>
      <PageHero
        title="Organising Committee"
        subtitle="Meet the dedicated team driving ANCIPS 2026."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Committee' }, { label: 'Organising Committee' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {committee.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center gap-4 p-5 rounded-2xl bg-white border border-teal-100 shadow-sm hover:shadow-lg hover:shadow-teal-900/10 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-teal-50 border-2 border-teal-100 group-hover:border-teal-400 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://ancips2027.com/assets/img/ancips-img/${member.img}.png`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-accent font-semibold text-teal-800 text-sm leading-tight">{member.name}</p>
                    <p className="text-xs text-teal-500 font-body mt-1 leading-snug">{member.role}</p>
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
