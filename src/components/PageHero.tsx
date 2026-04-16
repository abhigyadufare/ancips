'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  breadcrumbs?: { label: string; href?: string }[]
  subtitle?: string
}

export default function PageHero({ title, breadcrumbs, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden hero-mesh">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl orb-float" />
        <div className="absolute bottom-0 left-10 w-48 h-48 rounded-full bg-lavender-400/10 blur-3xl orb-float-delayed" />
      </div>

      <div className="container-custom relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={13} className="text-teal-400" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-sm font-accent text-teal-300 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sm font-accent text-teal-100">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-teal-200 font-body text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-400 to-lavender-400 rounded-full origin-left"
        />
      </div>
    </section>
  )
}
