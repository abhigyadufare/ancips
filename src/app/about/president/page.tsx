import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

export default function PresidentMessagePage() {
  return (
    <>
      <PageHero
        title="President's Message"
        subtitle="A message from the President of the Indian Psychiatric Society."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }, { label: "President's Message" }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="relative p-8 md:p-12 rounded-3xl bg-white border border-teal-100 shadow-xl shadow-teal-900/5">
              <div className="absolute top-8 left-10 text-8xl font-display text-teal-50 leading-none select-none">"</div>
              <div className="relative z-10 space-y-5 text-teal-700 font-body leading-relaxed text-base md:text-lg pt-8">
                <p>
                  Dear Colleagues, it gives me immense pleasure to invite you all to the{' '}
                  <strong className="text-teal-800">Annual National Conference of the Indian Psychiatric Society – ANCIPS 2026</strong>, to be held in the beautiful and historic city of Madurai, Tamil Nadu.
                </p>
                <p>
                  ANCIPS has always been the premier gathering of psychiatric professionals across India and the region. Each edition brings new energy, new ideas, and the renewed commitment to advance mental health care in our country.
                </p>
                <p>
                  The theme for ANCIPS 2026 — <strong className="text-teal-800">Transformative Therapeutics and Technology: Psychiatry 3.0</strong> — captures the exciting convergence of neuroscience, digital health, brain stimulation, and advanced therapeutics that is redefining our field.
                </p>
                <p>
                  I urge all members, fellows, postgraduate students, and allied mental health professionals to participate actively and contribute to making this conference a landmark event in the annals of Indian psychiatry.
                </p>
                <p className="font-semibold text-teal-800">
                  Looking forward to welcoming you to Madurai!
                </p>
              </div>
              <div className="absolute bottom-8 right-10 text-8xl font-display text-teal-50 leading-none select-none rotate-180">"</div>
              <div className="mt-8 pt-6 border-t border-teal-50">
                <p className="font-display text-xl font-bold text-teal-800">President, Indian Psychiatric Society</p>
                <p className="text-sm text-teal-500 font-accent mt-1">ANCIPS 2026</p>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
