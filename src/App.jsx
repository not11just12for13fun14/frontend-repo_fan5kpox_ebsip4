import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import { Services, Approach, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Approach />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Lindberg AI. All rights reserved.</p>
          <div className="text-sm text-slate-500">Built with care.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
