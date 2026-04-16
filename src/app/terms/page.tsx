import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}
      />
      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="prose prose-teal max-w-none font-body text-teal-700 space-y-5 leading-relaxed">
              <p>These terms of service govern your use of the ANCIPS 2026 website. By accessing this website, you agree to the following terms.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Use of Website</h2>
              <p>This website is provided for informational purposes relating to ANCIPS 2026. All content is owned by the organising committee and Indian Psychiatric Society.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Registration</h2>
              <p>Registration for ANCIPS 2026 is subject to separate terms provided at the point of registration. Fees once paid are subject to cancellation policies as specified.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Contact</h2>
              <p>For any queries regarding these terms, please contact info@ancips2027.com.</p>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
