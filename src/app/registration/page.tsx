import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { ExternalLink, Download, CheckCircle, AlertCircle } from "lucide-react";

const fees = [
  {
    category: "IPS / CPS / CGPSY Members",
    standard: "₹ 8,000",
    regular: "₹ 10,000",
    spot: "₹ 12,000",
  },
  {
    category:
      "PG Residents & Student / Accompaning Persons / Allied Mental Health",
    standard: "₹ 6,000",
    regular: "₹ 8,000",
    spot: "₹ 10,000",
  },
  {
    category: "Non-Members / Others (India)",
    standard: "₹ 10,000",
    regular: "₹ 12,000",
    spot: "₹ 14,000",
  },
];

const notes = [
  "All the rates mentioned above are inclusive of 18% GST.",
  "Senior Citizen CPS/IPS Members (65 Years & Above): Free but mandatory registration till 31st July 2026 (Not valid for On-Spot).",
  "Details marked with asterisks (*) are mandatory.",
];

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Registration"
        subtitle="Secure your place at ANCIPS 2026. Early registration is strongly recommended."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Registration" }]}
      />

      <section className="section-padding mesh-bg">
        <div className="container-custom">
          <Section>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-teal-800 mb-2">
                Registration Tariff
              </h2>
              <p className="text-teal-500 font-body">
                * All rates include 18% GST
              </p>
            </div>

            {/* Fee Table */}
            <div className="overflow-x-auto rounded-2xl border border-teal-100 shadow-xl shadow-teal-900/10 mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-teal-800 text-white">
                    <th className="text-left px-5 py-4 font-accent font-semibold tracking-wide">
                      Category
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Early Bird Registration</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">
                        Till 31st May, 2026
                      </div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Regular Registration</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">
                        Till 31st Aug, 2026
                      </div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>On-Spot Registration</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">
                        From 1st Sep, 2026
                      </div>
                    </th>
                    <th className="px-5 py-4 font-accent font-semibold tracking-wide text-center">
                      <div>Payment Details</div>
                      <div className="text-teal-300 text-xs font-normal mt-0.5">
                        UPI/NEFT
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row, i) => (
                    <tr
                      key={row.category}
                      className={`border-t border-teal-50 ${i % 2 === 0 ? "bg-white" : "bg-teal-50/30"} hover:bg-teal-50 transition-colors`}
                    >
                      <td className="px-5 py-4 font-body font-medium text-teal-800">
                        {row.category}
                      </td>
                      <td className="px-5 py-4 text-center font-body text-teal-700">
                        {row.standard === "Complimentary" ? (
                          <span className="inline-flex items-center gap-1 text-sage-600 font-semibold">
                            <CheckCircle size={13} /> {row.standard}
                          </span>
                        ) : (
                          row.standard
                        )}
                      </td>
                      <td className="px-5 py-4 text-center font-body text-teal-700">
                        {row.regular === "Complimentary" ? (
                          <span className="inline-flex items-center gap-1 text-sage-600 font-semibold">
                            <CheckCircle size={13} /> {row.regular}
                          </span>
                        ) : (
                          row.regular
                        )}
                      </td>
                      {/* <td className="px-5 py-4 text-center font-body text-teal-700">{row.late}</td> */}
                      <td className="px-5 py-4 text-center font-body text-teal-700 font-semibold">
                        {row.spot}
                      </td>
                    </tr>
                  ))}
                  <td className="px-5 py-4 text-center font-body text-teal-700 font-semibold">
                    Payments shall be received by Online Transfer / UPI Payments
                    only. <br />
                    Account Name: Chattisgarh Psychiatric Society <br />
                    Account Number: 09182191023110 <br />
                    IFSC Code: PUNB0091810 <br />
                    Bank Name: Punjab National Bank <br />
                    Branch: Medical College Branch Raipur
                    <br />
                  </td>
                </tbody>
              </table>
            </div>

            {/* Notes */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle
                  size={18}
                  className="text-amber-500 flex-shrink-0"
                />
                <h3 className="font-accent font-semibold text-amber-800">
                  Important Notes
                </h3>
              </div>
              <ol className="space-y-2">
                {notes.map((note, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm font-body text-amber-700"
                  >
                    <span className="font-accent font-bold text-amber-500 flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span>{note}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base inline-flex items-center justify-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Register Online <ExternalLink size={15} />
                </span>
              </a>
              <a
                href="@/assets/doc/47 CIPCON 2026  Annual Conference of Central Psychiatric Society (Indian Psychiatric Society-CZ).pdf"
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
  );
}
