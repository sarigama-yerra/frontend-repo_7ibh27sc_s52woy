import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will reply soon.'), 800);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Contact</h2>
          <p className="mt-2 text-slate-300">Have a project in mind or just want to say hi?</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input required placeholder="Your name" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <textarea required rows="5" placeholder="Message" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <div className="flex items-center gap-4">
              <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:shadow-lg transition-shadow" type="submit">Send</button>
              <span className="text-sm text-slate-300">{status}</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
