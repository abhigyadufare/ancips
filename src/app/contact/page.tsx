import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import GoogleFormEmbed from '@/components/GoogleFormEmbed'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the ANCIPS 2026 organising and registration teams."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div className="space-y-8">
                {/* Conference Secretariat */}
                <div className="p-8 rounded-3xl bg-white border border-teal-100 shadow-lg shadow-teal-900/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                      <MapPin size={18} className="text-teal-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-teal-800">
                      Conference Secretariat
                    </h3>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ancips2027.com/assets/img/ancips_logo.png"
                    alt="ANCIPS"
                    className="h-12 w-auto mb-5"
                  />
                  <div className="space-y-3 text-sm font-body">
                    <div className="flex gap-3 text-teal-700">
                      <MapPin
                        size={15}
                        className="text-teal-400 mt-0.5 flex-shrink-0"
                      />
                      <span>
                        Athma Mind Care Hospital, 10th Cross (E), Thillai Nagar,
                        Trichy – 620018
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Mail
                        size={15}
                        className="text-teal-400 mt-0.5 flex-shrink-0"
                      />
                      <a
                        href="mailto:info@ancips2027.com"
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                      >
                        info@ancips2027.com
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <Phone
                        size={15}
                        className="text-teal-400 mt-0.5 flex-shrink-0"
                      />
                      <a
                        href="tel:+918012522125"
                        className="text-teal-600 hover:text-teal-800 transition-colors"
                      >
                        +91 80125 22125
                      </a>
                    </div>
                  </div>
                </div>

                {/* PCO */}
                <div className="p-8 rounded-3xl bg-white border border-teal-100 shadow-lg shadow-teal-900/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                      <User size={18} className="text-teal-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-teal-800">
                      Registration Queries
                    </h3>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ancips2027.com/assets/img/b2b.png"
                    alt="B2B Hospitality"
                    className="h-10 w-auto mb-5"
                  />
                  <p className="font-accent font-semibold text-teal-800 mb-1">
                    B2B Hospitality Pvt. Ltd.
                  </p>
                  <p className="text-sm text-teal-600 font-body mb-4 leading-relaxed">
                    428 A, 4th Floor, D-21 Corporate Park, Sector-21 Dwarka, New
                    Delhi – 110077
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Vishal Kumar",
                        phone: "+91 93597 20669",
                        email: "vishal@b2bhospitalityindia.com",
                      },
                      {
                        name: "Asutosh Das",
                        phone: "+91 89175 21863",
                        email: "asutosh@b2bhospitalityindia.com",
                      },
                    ].map((person) => (
                      <div
                        key={person.name}
                        className="pl-4 border-l-2 border-teal-100 space-y-1"
                      >
                        <p className="text-sm font-accent font-semibold text-teal-700">
                          {person.name}
                        </p>
                        <div className="flex gap-3 text-sm font-body">
                          <Phone
                            size={13}
                            className="text-teal-400 mt-0.5 flex-shrink-0"
                          />
                          <a
                            href={`tel:${person.phone.replace(/\s/g, "")}`}
                            className="text-teal-600 hover:text-teal-800 transition-colors"
                          >
                            {person.phone}
                          </a>
                        </div>
                        <div className="flex gap-3 text-sm font-body">
                          <Mail
                            size={13}
                            className="text-teal-400 mt-0.5 flex-shrink-0"
                          />
                          <a
                            href={`mailto:${person.email}`}
                            className="text-teal-600 hover:text-teal-800 transition-colors break-all"
                          >
                            {person.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contact Form via Google Forms embed */}
              <div>
                <GoogleFormEmbed
                  formUrl="https://docs.google.com/forms/d/e/1FAIpQLScFTZbS-AeOZAc7aSbJ0AgMMmYXH00pg-WIIAjWCZ84mLTt3w/viewform"
                  title="Send Us a Message"
                  description="Have a question? Fill in the form below and we will get back to you."
                  height={600}
                  showDirectLink={false}
                />
              </div>
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
