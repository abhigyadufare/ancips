'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, ArrowRight, MapPin, Calendar, Users, BookOpen, Award, Microscope } from 'lucide-react'
import CountdownTimer from '@/components/CountdownTimer'

// ---------- Hero Section ----------
function HeroSection() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh">
      {/* Parallax background layer */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl orb-float" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-lavender-500/10 blur-3xl orb-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-sage-400/10 blur-3xl orb-float" style={{ animationDelay: '4s' }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/5 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container-custom text-center flex flex-col items-center gap-6 pt-24"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-teal-200 text-sm font-accent tracking-widest uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Indian Psychiatric Society
        </motion.div>

        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-28 h-28 md:w-36 md:h-36"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ancips2027.com/assets/img/ancips_logo.png"
            alt="ANCIPS 2026"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
            ANCIPS
          </h1>
          <div className="relative mt-2">
            <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold gradient-text-warm leading-none">
              2026
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-teal-400/20 blur-lg leading-none">
              2026
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-teal-100/90 max-w-xl"
        >
          Annual National Conference of the Indian Psychiatric Society
        </motion.p>

        {/* Date + Location chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-teal-100 text-sm font-accent">
            <Calendar size={14} className="text-teal-300" />
            December 2026 {/* UPDATE WHEN EXACT DATES CONFIRMED */}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-teal-100 text-sm font-accent">
            <MapPin size={14} className="text-teal-300" />
            Madurai, Tamil Nadu
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mt-2"
        >
          <a
            href="https://registration.ancips2027.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-flex items-center gap-2 shadow-xl shadow-teal-900/30"
          >
            <span className="flex items-center gap-2">
              Register Now <ExternalLink size={15} />
            </span>
          </a>
          <Link
            href="/registration"
            className="px-6 py-3 rounded-full border border-white/30 text-white font-accent font-semibold text-base hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
          >
            View Fees <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2 text-teal-300/60"
        >
          <span className="text-xs font-accent uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-teal-400/60 to-transparent relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-4 bg-teal-300"
              animate={{ y: ['-100%', '400%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// ---------- Countdown Section ----------
function CountdownSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-lavender-600/5 blur-3xl" />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10"
      >
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300 text-xs font-accent tracking-widest uppercase mb-4">
            <Calendar size={12} />
            📅 December 2026 · Madurai
          </div>
        </div>
        <CountdownTimer
          targetDate="2026-12-07T09:00:00" // UPDATE WHEN DATES CONFIRMED
          label="Conference starts in"
          variant="dark"
        />
      </motion.div>
    </section>
  )
}

// ---------- Welcome Message ----------
function WelcomeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const committee = [
    { name: 'Dr K Ramakrishnan', role: 'Organising Chairman', img: 'K Ramakrishnan' },
    { name: 'Dr T. Kumanan', role: 'Co-Chairperson', img: 'T Kumanan' },
    { name: 'Dr Panneer Selvan C', role: 'Co-Chairperson', img: 'Panneer Selvan C' },
    { name: 'Dr R Sabrin Sonjeev Ross', role: 'Organizing Secretary', img: 'R Sabrin Sanjeev Ross' },
    { name: 'Dr Siva Ilango T', role: 'Joint Organising Secretary', img: 'Siva Ilango' },
    { name: 'Dr Arun Kumar', role: 'Hon Treasurer', img: 'Arunkumar N' },
    { name: 'Dr Sathyamoorthy', role: 'Joint Hon Treasurer', img: 'Sathyamoorthy' },
    { name: 'Dr Sivasailam', role: 'Joint Hon Treasurer', img: 'Sivasailam' },
    { name: 'Dr M Suresh Kumar', role: 'Scientific Chairperson', img: 'M Suresh Kumar' },
    { name: 'Dr Sugadev', role: 'Scientific Co-Chairperson', img: 'Sugadev' },
  ]

  return (
    <section ref={ref} className="mesh-bg section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-accent uppercase tracking-widest text-teal-500 bg-teal-50 px-4 py-1.5 rounded-full mb-4 border border-teal-100">
            Welcome Message
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 mb-4">
            From the Organising Committee
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-lavender-400 rounded-full mx-auto" />
        </motion.div>

        {/* Welcome text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="relative p-8 md:p-10 rounded-3xl bg-white border border-teal-100 shadow-xl shadow-teal-900/5">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-7xl font-display text-teal-100 leading-none select-none">"</div>
            <div className="relative z-10 space-y-4 text-teal-700 font-body leading-relaxed text-base md:text-lg pt-6">
              <p>
                Dear Esteemed Colleagues and Friends, on behalf of the Organising Committee, it is our great pleasure to welcome you to the{' '}
                <strong className="text-teal-800">Annual National Conference of the Indian Psychiatric Society – ANCIPS 2026,</strong>{' '}
                scheduled to be held in{' '}
                <strong className="text-teal-800">December 2026</strong> in the historic and culturally vibrant city of{' '}
                <strong className="text-teal-800">Madurai.</strong>
              </p>
              <p>
                ANCIPS is the flagship academic event of the Indian Psychiatric Society, bringing together psychiatrists, mental health professionals, researchers, and academicians from across the country and abroad. ANCIPS 2026 at Madurai is envisioned as a dynamic platform for academic excellence, innovation, and meaningful professional interaction.
              </p>
              <p>
                The scientific programme has been thoughtfully curated to address recent advances, emerging trends, and contemporary challenges in psychiatry through keynote lectures, symposia, workshops, and interactive sessions.
              </p>
              <p>
                Madurai, one of the oldest living cities in the world, is renowned for its rich heritage, spiritual legacy, and warm hospitality. We are confident that the confluence of high-quality academics and the unique cultural experience of Madurai will make{' '}
                <strong className="text-teal-800">ANCIPS 2026</strong> both professionally enriching and personally memorable.
              </p>
            </div>
            <div className="absolute bottom-6 right-8 text-7xl font-display text-teal-100 leading-none select-none rotate-180">"</div>
          </div>
        </motion.div>

        {/* Committee Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-3xl font-bold text-teal-800">Organising Committee</h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {committee.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white border border-teal-50 shadow-sm hover:shadow-lg hover:shadow-teal-900/10 transition-shadow duration-300"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden bg-teal-50 border-2 border-teal-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ancips2027.com/assets/img/ancips-img/${member.img}.png`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.currentTarget
                    t.style.display = 'none'
                    const p = t.parentElement
                    if (p) {
                      p.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-100 to-teal-200"><span class="text-2xl font-display font-bold text-teal-600">${member.name.split(' ').pop()?.charAt(0) || 'D'}</span></div>`
                    }
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-accent font-semibold text-teal-800 leading-tight">{member.name}</p>
                <p className="text-xs text-teal-500 font-body mt-0.5 leading-tight">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Theme Section ----------
function ThemeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const psychiatryVersions = [
    {
      version: '1.0',
      label: 'Psychiatry 1.0',
      desc: 'Understanding and treating mental illness using a psychosocial framework.',
      icon: <Users size={24} />,
      color: 'from-sage-400 to-sage-600',
    },
    {
      version: '2.0',
      label: 'Psychiatry 2.0',
      desc: 'Predominantly pharmacology-based treatment supported by a psychosocial framework.',
      icon: <BookOpen size={24} />,
      color: 'from-calm-400 to-calm-600',
    },
    {
      version: '3.0',
      label: 'Psychiatry 3.0',
      desc: 'Integration of Psychiatry 2.0 with advanced technologies and brain stimulation therapies.',
      icon: <Microscope size={24} />,
      color: 'from-teal-400 to-lavender-500',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-teal-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-700/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-lavender-700/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-accent uppercase tracking-widest text-teal-400 bg-teal-400/10 px-4 py-1.5 rounded-full mb-4 border border-teal-700">
            Conference Theme
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Transformative Therapeutics
            <br />
            <span className="gradient-text">and Technology</span>
          </h2>
          <p className="font-accent text-xl text-teal-300 font-semibold mb-6">Psychiatry 3.0</p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-lavender-400 rounded-full mx-auto mb-8" />
          <p className="text-teal-200 font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            The conference theme reflects the evolving landscape and significant changes in psychiatry, driven by advances in genetics, neuroscience, digital technologies, therapeutics, and models of care. The term "transformative" is used deliberately and cautiously, to refer to meaningful changes in understanding and treating mental illness, integrating the old and the new. Technology being a tool for the same.
          </p>
        </motion.div>

        {/* Psychiatry evolution cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {psychiatryVersions.map((v, i) => (
            <motion.div
              key={v.version}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="relative p-7 rounded-3xl bg-teal-900/50 border border-teal-700/50 overflow-hidden group"
            >
              {/* Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${v.color}`} />

              <div className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center bg-gradient-to-br ${v.color} text-white mb-5`}>
                {v.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-accent font-bold uppercase tracking-widest bg-gradient-to-r ${v.color} bg-clip-text text-transparent`}>
                  Version {v.version}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">{v.label}</h3>
              <p className="text-teal-300 font-body text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Welcome to 3.0 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600/20 to-lavender-600/20 border border-teal-500/30">
            <p className="font-display text-2xl md:text-3xl text-white font-bold">
              ANCIPS 2026 is a preview of the future –
            </p>
            <p className="font-body text-teal-200 mt-2">
              where we use our rich knowledge fine-tuned by the tools of technology.
            </p>
            <p className="font-accent text-xl text-teal-300 font-semibold mt-3">
              Welcome to Psychiatry 3.0
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ---------- Venue Preview Section ----------
function VenueSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const venueImages = [
    { src: 'venue_03', alt: 'Conference Venue' },
    { src: 'venue_01', alt: 'Venue Hall 1' },
    { src: 'venue_02', alt: 'Venue Hall 2' },
  ]

  return (
    <section ref={ref} className="section-padding mesh-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-accent uppercase tracking-widest text-teal-500 bg-teal-50 px-4 py-1.5 rounded-full mb-5 border border-teal-100">
              Venue
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              The Temple City —{' '}
              <span className="gradient-text">Madurai</span>
            </h2>
            <p className="text-teal-600 font-body leading-relaxed text-base md:text-lg mb-6">
              Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple. Covered in bright carvings of Hindu gods, the Dravidian-style temple is a major pilgrimage site. Millions attend the processions and ceremonies of April's Chithirai Festival celebrating Meenakshi and Lord Vishnu.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Cultural Heritage', 'Spiritual Legacy', 'Warm Hospitality', 'Ancient City'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-accent font-medium bg-teal-100 text-teal-700 border border-teal-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Link href="/venue" className="btn-primary text-sm inline-flex items-center gap-2">
                <span className="flex items-center gap-2">About Venue <ArrowRight size={14} /></span>
              </Link>
              <a
                href="https://maps.app.goo.gl/DSihMKpTVQwHCkBk7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-200 text-teal-700 text-sm font-accent font-medium hover:bg-teal-50 transition-colors"
              >
                <MapPin size={14} /> View Map
              </a>
            </div>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 rounded-2xl overflow-hidden aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ancips2027.com/assets/img/blog/venue_03.png"
                alt="Conference Venue"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ancips2027.com/assets/img/blog/venue_01.png"
                alt="Madurai Temple"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ancips2027.com/assets/img/blog/venue_02.png"
                alt="Madurai"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ---------- Stats Bar ----------
function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '4', label: 'Days', suffix: '+' },
    { value: '100', label: 'Speakers', suffix: '+' },
    { value: '50', label: 'Sessions', suffix: '+' },
    { value: '3000', label: 'Delegates', suffix: '+' },
  ]

  return (
    <section ref={ref} className="py-12 bg-white border-y border-teal-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text">
                {stat.value}<span className="text-teal-400">{stat.suffix}</span>
              </div>
              <div className="text-sm font-accent uppercase tracking-widest text-teal-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Quick Links Section ----------
function QuickLinksSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const links = [
    { label: 'Register Now', desc: 'Secure your spot at ANCIPS 2026', href: 'https://registration.ancips2027.com/', external: true, color: 'from-teal-500 to-teal-700' },
    { label: 'View Registration Fees', desc: 'Check tariffs for all categories', href: '/registration', external: false, color: 'from-calm-500 to-teal-600' },
    { label: 'Abstract Submission', desc: 'Submit your research abstract', href: '/registration/abstract', external: false, color: 'from-lavender-500 to-lavender-700' },
    { label: 'Download Brochure', desc: 'Conference brochure PDF', href: '/downloads/brochure', external: false, color: 'from-sage-500 to-sage-700' },
  ]

  return (
    <section ref={ref} className="section-padding bg-teal-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-800">Quick Access</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.03, y: -4, transition: { duration: 0.2 } }}
            >
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-white border border-teal-100 shadow-sm hover:shadow-lg hover:shadow-teal-900/10 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4`}>
                    <ExternalLink size={16} />
                  </div>
                  <h3 className="font-accent font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors">{link.label}</h3>
                  <p className="text-xs text-teal-500 font-body">{link.desc}</p>
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block p-6 rounded-2xl bg-white border border-teal-100 shadow-sm hover:shadow-lg hover:shadow-teal-900/10 transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4`}>
                    <ArrowRight size={16} />
                  </div>
                  <h3 className="font-accent font-semibold text-teal-800 mb-1 group-hover:text-teal-600 transition-colors">{link.label}</h3>
                  <p className="text-xs text-teal-500 font-body">{link.desc}</p>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Main Page ----------
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountdownSection />
      <StatsBar />
      <WelcomeSection />
      <ThemeSection />
      <VenueSection />
      <QuickLinksSection />
    </>
  )
}
