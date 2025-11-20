import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_10%_-10%,rgba(34,211,238,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(59,130,246,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="#home" className="text-sm text-slate-300 hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
