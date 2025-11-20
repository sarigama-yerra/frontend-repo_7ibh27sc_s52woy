import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[80vh] grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm tracking-widest uppercase text-cyan-300/80">Coding • Data Science • Portfolio</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Elegant, minimal, and engineered to impress
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              I build performant web apps and human-centered data tools. Explore selected work across machine learning, data visualization, and full‑stack development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:shadow-lg transition-shadow">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/5 transition-colors">
                Get in touch
              </a>
            </div>
          </motion.div>

          <div className="hidden md:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
