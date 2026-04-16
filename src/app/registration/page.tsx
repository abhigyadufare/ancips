import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { ExternalLink, Download, CheckCircle, AlertCircle } from 'lucide-react'

const fees = [
  { category: 'IPS Fellows / Members', standard: '₹ 14,000', regular: '₹ 16,500', late: '₹ 19,000', spot: '₹ 23,300' },
  { category: 'PG Student', standard: '₹ 9,000', regular: '₹ 10,200', late: '₹ 11,400', spot: '₹ 12,700' },
  { category: 'IPS Senior Fellow (> 65)', standard: 'Complimentary', regular: 'Complimentary', late: '₹ 12,650', spot: '₹ 14,000' },
  { category: 'Non-Member (India)', standard: '₹ 20,300', regular: '₹ 21,500', late: '₹ 22,800', spot: '₹ 24,100' },
  { category: 'SAARC', standard: '₹ 14,000', regular: '₹ 16,500', late: '₹ 19,000', spot: '₹ 23,300' },
  { category: 'Accompanying Person', standard: '₹ 8,900', regular: '₹ 10,200', late: '₹ 11,400', spot: '₹ 12,700' },
  { category: 'Trade Delegate', standard: '₹ 30,400', regular: '₹ 31,700', late: '₹ 32,900', spot: '₹ 34,200' },
  { category: 'International Delegate', standard: '₹ 32,900', regular: '₹ 34,200', late: '₹ 35,500', spot: '₹ 36,700' },
]

const notes = [
  'Senior Citizen IPS Members (65 Years & Above) please upload/send age proof.',
  'Details marked with asterisks (*) are mandatory.',
  'If the delegate is an IPS member, kindly provide the membership number.',
  'Complimentary only for Senior Citizen IPS members; not applicable for accompanying persons.',
  'In case the delegate wishes to pay by cash, the delegate must fill up the offline registration form and email us at info@ancips2027.com along with the copy of deposit slip.',
]

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Registration"
        subtitle="Secure your place at ANCIPS 2026. Early registration is strongly recommended."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Registration' }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-teal-800 mb-2">Registration Tariff</h2>
              <p className="text-teal-500 font-body">* All rates include 18% GST</p>
            </div>

            {/* Fee Table */}
            <div className="overflow-x-auto rounded-2xl border border-teal-100 shadow-xl shadow-teal-900/10 mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-800 text-white">
                    <th className="text-left px-5 py-4 font-accent font-semibold tracking-wide">Category</th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Standard</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">Till 15 Aug, 2026</div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Regular</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">Till 15 Nov, 2026</div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Late</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">Till 15 Dec, 2026</div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">On Spot</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr key={row.category} className={`border-t border-teal-50 ${i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'} hover:bg-teal-50 transition-colors`}>
                      <td className="px-5 py-4 font-body font-medium text-teal-800">{row.category}</td>
                      <td className="px-5 py-4 text-center font-body text-teal-700">
                        {row.standard === 'Complimentary' ? (
                          <span className="inline-flex items-center gap-1 text-sage-600 font-semibold">
                            <CheckCircle size={13} /> {row.standard}
                          </span>
                        ) : row.standard}
                      </td>
                      <td className="px-5 py-4 text-center font-body text-teal-700">
                        {row.regular === 'Complimentary' ? (
                          <span className="inline-flex items-center gap-1 text-sage-600 font-semibold">
                            <CheckCircle size={13} /> {row.regular}
                          </span>
                        ) : row.regular}
                      </td>
                      <td className="px-5 py-4 text-center font-body text-teal-700">{row.late}</td>
                      <td className="px-5 py-4 text-center font-body text-teal-700 font-semibold">{row.spot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={18} className="text-amber-500 flex-shrink-0" />
                <h3 className="font-accent font-semibold text-amber-800">Important Notes</h3>
              </div>
              <ol className="space-y-2">
                {notes.map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm font-body text-amber-700">
                    <span className="font-accent font-bold text-amber-500 flex-shrink-0">{i + 1}.</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://registration.ancips2027.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base inline-flex items-center justify-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Register Online <ExternalLink size={15} />
                </span>
              </a>
              <a
                href="https://ancips2027.com/assets/doc/ANCIPS 2027_REGISTRATION FORM_16-03-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-teal-200 text-teal-700 font-accent font-semibold hover:bg-teal-50 transition-colors"
              >
                <Download size={15} /> Registration Form (Offline)
              </a>
            </div>
          </Section>
        </div>
      </section>
    </>
  )
}
