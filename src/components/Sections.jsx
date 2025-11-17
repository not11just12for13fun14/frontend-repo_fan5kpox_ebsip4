import { CheckCircle2 } from 'lucide-react'

export function Services() {
  const services = [
    {
      title: 'AI Strategy & Roadmapping',
      desc: 'Identify priority use-cases, model selection, architecture, and ROI timelines aligned to business goals.'
    },
    {
      title: 'Prototyping & POCs',
      desc: 'Rapid proof-of-concepts using best-in-class LLMs, vector search, and evaluation harnesses.'
    },
    {
      title: 'Productionization',
      desc: 'Hardening, observability, guardrails, data pipelines, and governance for enterprise scale.'
    },
  ]
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white/80">
              <CheckCircle2 className="text-violet-600" />
              <h3 className="mt-3 font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Approach() {
  const steps = [
    { title: 'Discover', desc: 'Workshops to align on goals, constraints, and metrics.' },
    { title: 'Design', desc: 'Solution architecture, data strategy, and risk assessment.' },
    { title: 'Deliver', desc: 'Implementation, evaluation, and change management.' },
  ]
  return (
    <section id="approach" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Our approach</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white">
              <div className="text-sm font-semibold text-violet-700">Step {i + 1}</div>
              <h3 className="mt-2 font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-white/80">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Book a discovery call</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Tell us about your goals and we’ll reach out within one business day.</p>
          <form className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <input required placeholder="Full name" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500" />
            <input required type="email" placeholder="Work email" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500" />
            <input placeholder="Company" className="col-span-1 md:col-span-1 rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500" />
            <textarea placeholder="What would you like to achieve with AI?" className="md:col-span-3 rounded-md border border-slate-300 px-4 py-3 h-28 outline-none focus:ring-2 focus:ring-violet-500" />
            <button className="md:col-span-3 inline-flex justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
