import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-700 mb-4 pointer-events-auto">
              <Sparkles size={14} className="text-violet-600" />
              <span>AI Consulting for modern enterprises</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Lindberg AI — Strategic AI consulting to unlock real business value
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl">
              We partner with leadership teams to identify high-ROI AI opportunities, architect robust solutions, and guide execution from prototype to production.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800 transition-colors">
                Book a discovery call
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 font-medium bg-white/80 hover:bg-white">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
    </section>
  )
}
