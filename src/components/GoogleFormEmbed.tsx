'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Maximize2, Minimize2, Loader2 } from 'lucide-react'

interface GoogleFormEmbedProps {
  /**
   * The full Google Form URL or embed URL.
   * Replace this with your actual Google Form URL.
   * Example: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   */
  formUrl: string
  /**
   * Title shown above the form
   */
  title?: string
  /**
   * Description shown below the title
   */
  description?: string
  /**
   * Height of the embedded form in pixels
   */
  height?: number
  /**
   * Show a direct link button to open form in new tab
   */
  showDirectLink?: boolean
  /**
   * Direct link URL (if different from formUrl)
   */
  directLinkUrl?: string
  className?: string
}

export default function GoogleFormEmbed({
  formUrl,
  title,
  description,
  height = 800,
  showDirectLink = true,
  directLinkUrl,
  className = '',
}: GoogleFormEmbedProps) {
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)

  // Convert regular form URL to embedded URL if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return ''
    if (url.includes('embedded=true')) return url
    const base = url.split('?')[0]
    return `${base}?embedded=true`
  }

  const embedUrl = getEmbedUrl(formUrl)
  const openUrl = directLinkUrl || formUrl

  const isPlaceholder = !formUrl || formUrl === 'PLACEHOLDER'

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-6 text-center">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-800 mb-3">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-teal-600 font-body max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}

      <motion.div
        layout
        className="relative rounded-3xl overflow-hidden border border-teal-100 shadow-xl shadow-teal-900/10"
        style={{ height: expanded ? '100vh' : `${height}px` }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Toolbar */}
        <div className="absolute top-0 left-0 right-0 z-10 glass px-4 py-3 flex items-center justify-between border-b border-teal-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse-slow" />
            <span className="text-xs font-accent text-teal-600 tracking-wide">
              {title || 'Google Form'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {showDirectLink && !isPlaceholder && (
              <a
                href={openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-accent text-teal-600 hover:text-teal-800 transition-colors px-3 py-1.5 rounded-full hover:bg-teal-50"
              >
                Open in new tab <ExternalLink size={11} />
              </a>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1.5 rounded-full hover:bg-teal-50 text-teal-600 hover:text-teal-800 transition-colors"
              aria-label={expanded ? 'Minimize' : 'Maximize'}
            >
              {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          </div>
        </div>

        {/* Loading spinner */}
        {loading && !isPlaceholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-teal-50/80 z-10 pt-12">
            <Loader2 size={32} className="text-teal-500 animate-spin" />
          </div>
        )}

        {/* Placeholder state */}
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-50/50 pt-12 gap-4 px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-teal-800 font-semibold">Form Not Configured</h3>
            <p className="text-teal-600 font-body text-sm max-w-md">
              Pass your Google Form URL as the <code className="bg-teal-100 px-1.5 py-0.5 rounded text-teal-700 text-xs font-mono">formUrl</code> prop to embed it here.
            </p>
            <div className="mt-2 p-4 bg-teal-900/5 rounded-2xl w-full max-w-md text-left">
              <p className="text-xs font-mono text-teal-700">
                {`<GoogleFormEmbed`}<br />
                {`  formUrl="https://docs.google.com/forms/d/e/YOUR_ID/viewform"`}<br />
                {`  title="Registration Form"`}<br />
                {`/>`}
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full pt-12 border-0"
            onLoad={() => setLoading(false)}
            title={title || 'Google Form'}
            allowFullScreen
          />
        )}
      </motion.div>

      {showDirectLink && !isPlaceholder && (
        <div className="mt-4 text-center">
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <span className="flex items-center gap-2">
              Open Full Form <ExternalLink size={13} />
            </span>
          </a>
        </div>
      )}
    </div>
  )
}
