import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen hero-mesh flex items-center justify-center">
      <div className="text-center px-6">
        <div className="font-display text-9xl font-bold text-white/20 mb-4">404</div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-teal-200 font-body mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-primary inline-block">
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
