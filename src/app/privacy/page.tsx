import PageHero from '@/components/PageHero'
import Section from '@/components/Section'

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-3xl">
          <Section>
            <div className="font-body text-teal-700 space-y-5 leading-relaxed">
              <p>ANCIPS 2026 is committed to protecting your personal information. This policy explains how we collect, use, and protect your data.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Information We Collect</h2>
              <p>We collect information you provide during registration, including name, contact details, medical council registration number, and payment information.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">How We Use It</h2>
              <p>Your information is used solely for conference registration, communication regarding the event, and issuing certificates of participation.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>
              <h2 className="font-display text-2xl font-bold text-teal-800">Contact</h2>
              <p>For privacy-related queries, contact info@ancips2027.com.</p>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
