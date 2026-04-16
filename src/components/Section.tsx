'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}

export default function Section({ children, className = '', id, delay = 0 }: SectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
