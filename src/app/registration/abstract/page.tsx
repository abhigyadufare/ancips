import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import GoogleFormEmbed from '@/components/GoogleFormEmbed'

export default function AbstractPage() {
  return (
    <>
      <PageHero
        title="Abstract Submission"
        subtitle="Submit your research abstract for ANCIPS 2026. We welcome original research, case studies, and systematic reviews."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Registration", href: "/registration" },
          { label: "Abstract Submission" },
        ]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom max-w-4xl">
          <Section>
            {/* Instructions */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-10">
              <h3 className="font-accent font-semibold text-teal-800 mb-3">
                Submission Guidelines
              </h3>
              <ul className="space-y-2 text-sm font-body text-teal-700">
                <li className="flex gap-2">
                  <span className="text-teal-400 font-bold">•</span> Abstract
                  should not exceed 300 words.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-400 font-bold">•</span> Include
                  structured sections: Objectives, Methods, Results, Conclusion.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-400 font-bold">•</span> Only
                  registered delegates may submit abstracts.
                </li>
                <li className="flex gap-2">
                  <span className="text-teal-400 font-bold">•</span> Presenting
                  author must be registered for the conference.
                </li>
              </ul>
            </div>

            <GoogleFormEmbed
              formUrl="https://docs.google.com/forms/d/e/1FAIpQLScFTZbS-AeOZAc7aSbJ0AgMMmYXH00pg-WIIAjWCZ84mLTt3w/viewform?embedded=true"
              title="Abstract Submission Form"
              description="Fill in the form below to submit your abstract for ANCIPS 2026."
              height={750}
              showDirectLink={false}
            />
          </Section>
        </div>
      </section>
    </>
  );
}
