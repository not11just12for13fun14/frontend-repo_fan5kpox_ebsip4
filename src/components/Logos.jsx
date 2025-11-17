const logos = [
  { name: 'Acme', svg: (
    <svg viewBox="0 0 100 20" className="h-6 fill-slate-500" aria-hidden="true"><text x="0" y="15" fontFamily="monospace" fontSize="14">ACME</text></svg>
  )},
  { name: 'Helios', svg: (
    <svg viewBox="0 0 100 20" className="h-6 fill-slate-500" aria-hidden="true"><text x="0" y="15" fontFamily="monospace" fontSize="14">HELIOS</text></svg>
  )},
  { name: 'Nimbus', svg: (
    <svg viewBox="0 0 100 20" className="h-6 fill-slate-500" aria-hidden="true"><text x="0" y="15" fontFamily="monospace" fontSize="14">NIMBUS</text></svg>
  )},
  { name: 'Atlas', svg: (
    <svg viewBox="0 0 100 20" className="h-6 fill-slate-500" aria-hidden="true"><text x="0" y="15" fontFamily="monospace" fontSize="14">ATLAS</text></svg>
  )},
]

export default function Logos() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-6">Trusted by forward-thinking teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              {l.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
