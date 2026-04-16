import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

export default function PastPresidentPage() {
  return (
    <>
      <PageHero
        title="Immediate Past President – IPS"
        subtitle="A message from the Immediate Past President of the Indian Psychiatric Society."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }, { label: 'Imm. Past President IPS' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="relative p-8 md:p-12 rounded-3xl bg-white border border-teal-100 shadow-xl shadow-teal-900/5">
              <div className="absolute top-8 left-10 text-8xl font-display text-teal-50 leading-none select-none">"</div>
              <div className="relative z-10 space-y-5 text-teal-700 font-body leading-relaxed text-base md:text-lg pt-8">
                <p>
                  It is with great pride and enthusiasm that I congratulate the organising committee of <strong className="text-teal-800">ANCIPS 2026</strong> for choosing the culturally and historically rich city of Madurai as the venue.
                </p>
                <p>
                  Over the years, ANCIPS has evolved into one of the most respected psychiatric conferences in Asia. Each year it provides a platform for meaningful exchange of knowledge, cutting-edge research, and the forging of lasting professional bonds.
                </p>
                <p>
                  The theme <strong className="text-teal-800">Psychiatry 3.0</strong> is particularly timely. As artificial intelligence, digital therapeutics, and precision medicine reshape healthcare, psychiatry must be at the forefront of this transformation — grounded in our humanistic traditions yet embracing innovation fearlessly.
                </p>
                <p>
                  I extend my best wishes to the entire organising team and look forward to the grand success of ANCIPS 2026.
                </p>
              </div>
              <div className="absolute bottom-8 right-10 text-8xl font-display text-teal-50 leading-none select-none rotate-180">"</div>
              <div className="mt-8 pt-6 border-t border-teal-50">
                <p className="font-display text-xl font-bold text-teal-800">Immediate Past President, Indian Psychiatric Society</p>
                <p className="text-sm text-teal-500 font-accent mt-1">ANCIPS 2026</p>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
