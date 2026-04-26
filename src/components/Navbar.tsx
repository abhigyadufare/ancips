'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import logo from '../assets/img/CIPCON2026_logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'President – IPS Message', href: '/about/president' },
      { label: 'Imm. Past President IPS', href: '/about/past-president' },
    ]
  },
  {
    label: 'Committee',
    children: [
      { label: 'Organising Committee', href: '/committee/organising' },
      { label: 'Office Bearers', href: '/committee/office-bearers' },
    ]
  },
  {
    label: 'Registration',
    children: [
      { label: 'Registration Fee', href: '/registration' },
      { label: 'Abstract Submission', href: '/registration/abstract' },
    ]
  },
  {
    label: 'Travel',
    children: [
      { label: 'About Venue', href: '/venue' },
      { label: 'Places to Visit', href: '/venue/places' },
      { label: 'How to Reach Madurai', href: '/venue/how-to-reach' },
    ]
  },
  {
    label: 'Downloads',
    children: [
      { label: 'Registration Form', href: '/downloads/registration-form' },
      { label: 'Conference Brochure', href: '/downloads/brochure' },
    ]
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-teal-900/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                  src="https://ancips2027.com/assets/img/ancips_logo.png"
                  alt="ANCIPS Logo"
                  className="w-full h-full object-contain"
                /> */}
                <Image
                  src={logo}
                  alt="CIPCON 2026"
                  fill
                  className="object-contain"
                />

              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-display text-xl font-bold leading-tight transition-colors ${
                    scrolled ? 'text-teal-800' : 'text-white'
                  }`}
                >
                  CIPCON 2026
                </div>
                <div
                  className={`text-xs font-accent tracking-widest uppercase transition-colors ${
                    scrolled ? 'text-teal-600' : 'text-teal-200'
                  }`}
                >
                  Raipur • September 2026
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-accent font-medium tracking-wide transition-all duration-200 ${
                        scrolled
                          ? 'text-teal-800 hover:bg-teal-50 hover:text-teal-600'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-52 glass rounded-2xl shadow-xl shadow-teal-900/10 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm font-body text-teal-800 hover:bg-teal-50 hover:text-teal-600 transition-colors border-b border-teal-50 last:border-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`px-3 py-2 rounded-full text-sm font-accent font-medium tracking-wide transition-all duration-200 ${
                      scrolled
                        ? 'text-teal-800 hover:bg-teal-50 hover:text-teal-600'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <a
                href="/registration"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 btn-primary text-sm inline-flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  Register Now <ExternalLink size={13} />
                </span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                scrolled ? 'text-teal-800 hover:bg-teal-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-80 max-w-full glass-dark flex flex-col pt-20 pb-8 overflow-y-auto"
          >
            <div className="px-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/90 font-accent font-medium hover:bg-white/10 transition-colors"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-8 py-2.5 text-sm text-teal-200 hover:text-white font-body transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-white/90 font-accent font-medium hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <a
                  href="https://registration.ancips2027.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm w-full text-center block"
                >
                  <span>Register Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
