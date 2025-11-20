import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I craft clean UIs and robust data systems. My toolkit spans React, FastAPI, and modern ML stacks. I love translating ambiguous problems into intuitive products, with a focus on performance, accessibility, and thoughtful visuals.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90 text-sm">
              <li className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">Full‑stack web development</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">Machine learning & MLOps</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">Data visualization & storytelling</li>
              <li className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">APIs, integrations, and tooling</li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React','TypeScript','FastAPI','Python','Pandas','PyTorch','PostgreSQL','MongoDB','Docker','AWS'].map(s => (
                <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
