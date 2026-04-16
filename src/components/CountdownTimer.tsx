'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CountdownTimerProps {
  targetDate: string // ISO string, e.g. "2026-12-07T09:00:00"
  label?: string
  className?: string
  variant?: 'light' | 'dark' | 'glass'
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function FlipUnit({ value, label, variant }: { value: number; label: string; variant: string }) {
  const displayValue = String(value).padStart(2, '0')

  const cardBg =
    variant === 'dark'
      ? 'bg-teal-900/80 border-teal-700/50'
      : variant === 'glass'
      ? 'bg-white/20 border-white/30'
      : 'bg-teal-600/10 border-teal-200'

  const numColor =
    variant === 'dark' || variant === 'glass'
      ? 'text-white'
      : 'text-teal-700'

  const labelColor =
    variant === 'dark' || variant === 'glass'
      ? 'text-teal-300'
      : 'text-teal-500'

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        key={value}
        className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border ${cardBg} flex items-center justify-center overflow-hidden`}
        initial={{ rotateX: -30, scale: 0.95 }}
        animate={{ rotateX: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: 'backOut' }}
        style={{ perspective: '500px' }}
      >
        {/* Shine line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/5" />
        <span className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold ${numColor} z-10 leading-none`}>
          {displayValue}
        </span>
      </motion.div>
      <span className={`text-xs font-accent uppercase tracking-widest font-semibold ${labelColor}`}>
        {label}
      </span>
    </motion.div>
  )
}

export default function CountdownTimer({
  targetDate,
  label = 'Conference starts in',
  className = '',
  variant = 'light',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)
  const [ended, setEnded] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculate = () => {
      const target = new Date(targetDate).getTime()
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        setEnded(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const id = setInterval(calculate, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!mounted) return null

  const labelColor =
    variant === 'dark' || variant === 'glass'
      ? 'text-white'
      : 'text-teal-800'

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`font-display text-2xl md:text-3xl font-semibold ${labelColor}`}
      >
        {label}
      </motion.h3>

      {ended ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`font-accent text-xl font-semibold ${labelColor}`}
        >
          🎉 The conference has begun!
        </motion.div>
      ) : (
        <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
          <FlipUnit value={timeLeft.days} label="Days" variant={variant} />
          <div className={`text-2xl sm:text-3xl font-display font-bold mt-4 sm:mt-5 ${variant === 'dark' || variant === 'glass' ? 'text-teal-300' : 'text-teal-400'}`}>:</div>
          <FlipUnit value={timeLeft.hours} label="Hours" variant={variant} />
          <div className={`text-2xl sm:text-3xl font-display font-bold mt-4 sm:mt-5 ${variant === 'dark' || variant === 'glass' ? 'text-teal-300' : 'text-teal-400'}`}>:</div>
          <FlipUnit value={timeLeft.minutes} label="Minutes" variant={variant} />
          <div className={`text-2xl sm:text-3xl font-display font-bold mt-4 sm:mt-5 ${variant === 'dark' || variant === 'glass' ? 'text-teal-300' : 'text-teal-400'}`}>:</div>
          <FlipUnit value={timeLeft.seconds} label="Seconds" variant={variant} />
        </div>
      )}
    </div>
  )
}
