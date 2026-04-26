import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/img/CIPCON2026_logo.png'

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      {/* Main footer */}
      <div className="py-16 max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img
              src="https://ancips2027.com/assets/img/ancips_logo.png"
              alt="CIPCON 2026"
              className="h-16 w-auto mb-4"
            />*/}
            <Image
              src={logo}
              alt="CIPCON 2026"
              height={128}
              width={128}
              className="mb-4"
            />
            <h2 className="text-xl font-bold font-display text-teal-300 mb-2">
              CIPCON 2026
            </h2>
            <p className="text-teal-300 text-sm font-body leading-relaxed mb-4">
              47th Annual Conference of the Central
              Psychiatric Society (Indian Psychiatric Society–CZ) — Advancing
              mental health through knowledge and innovation.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-teal-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                  aria-label={s}
                >
                  <span className="text-xs font-accent uppercase text-teal-100">
                    {s[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-accent font-semibold text-teal-300 uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About CIPCON", "/about/president"],
                ["Organising Committee", "/committee/organising"],
                ["Registration", "/registration"],
                ["Venue", "/venue"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-teal-200 hover:text-white transition-colors font-body"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Secretariat */}
          <div>
            <h3 className="font-accent font-semibold text-teal-300 uppercase tracking-widest text-xs mb-5">
              Conference Secretariat
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin
                  size={15}
                  className="text-teal-400 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm text-teal-200 font-body leading-relaxed">
                  Athma Mind Care Hospital
                  <br />
                  10th Cross (E), Thillai Nagar
                  <br />
                  Trichy – 620018
                </p>
              </div>
              <div className="flex gap-3">
                <Mail
                  size={15}
                  className="text-teal-400 mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:info@ancips2027.com"
                  className="text-sm text-teal-200 hover:text-white transition-colors font-body"
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
                  className="text-sm text-teal-200 hover:text-white transition-colors font-body"
                >
                  +91 80125 22125
                </a>
              </div>
            </div>
          </div>

          {/* PCO */}
          <div>
            <h3 className="font-accent font-semibold text-teal-300 uppercase tracking-widest text-xs mb-5">
              Professional Conference Organizer
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-accent font-semibold text-white">
                B2B Hospitality Pvt. Ltd.
              </p>
              <p className="text-sm text-teal-200 font-body leading-relaxed">
                428 A, 4th Floor, D-21 Corporate Park
                <br />
                Sector-21 Dwarka, New Delhi – 110077
              </p>
              <div className="space-y-1.5">
                <div>
                  <p className="text-xs text-teal-400 font-accent">
                    Vishal Kumar
                  </p>
                  <a
                    href="tel:+919359720669"
                    className="text-sm text-teal-200 hover:text-white transition-colors font-body"
                  >
                    +91 93597 20669
                  </a>
                </div>
                <div>
                  <p className="text-xs text-teal-400 font-accent">
                    Asutosh Das
                  </p>
                  <a
                    href="tel:+918917521863"
                    className="text-sm text-teal-200 hover:text-white transition-colors font-body"
                  >
                    +91 89175 21863
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-teal-400 font-body">
            © 2026 ANCIPS. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="text-xs text-teal-400 hover:text-teal-200 transition-colors font-body"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-teal-400 hover:text-teal-200 transition-colors font-body"
            >
              Privacy Policy
            </Link>
          </div>
          <a
            href="https://registration.ancips2027.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-accent text-teal-300 hover:text-white transition-colors"
          >
            Register Now <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
