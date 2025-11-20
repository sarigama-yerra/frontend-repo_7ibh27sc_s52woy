import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'ML-Powered Insights Dashboard',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Plotly'],
    description:
      'Interactive analytics platform with time-series forecasting, feature importance, and custom cohort analysis.',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'NLP Helpdesk Assistant',
    tags: ['PyTorch', 'Transformers', 'RAG', 'Weaviate'],
    description:
      'Retrieval-augmented QA system with hybrid search, feedback loop, and production monitoring.',
    links: {
      github: '#',
      demo: '#',
    },
  },
  {
    title: 'Realtime Code Collaboration',
    tags: ['React', 'CRDT', 'WebSockets', 'Tailwind'],
    description:
      'Low-latency editor with presence, comments, and code-aware syntax operations.',
    links: {
      github: '#',
      demo: '#',
    },
  },
];

function Tag({ children }) {
  return (
    <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">
      {children}
    </span>
  );
}

function Card({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 hover:border-cyan-400/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{p.title}</h3>
        <div className="flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
          <a href={p.links.github} className="p-2 hover:text-white text-slate-300" aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a href={p.links.demo} className="p-2 hover:text-white text-slate-300" aria-label="Live Demo" target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <p className="mt-3 text-slate-300">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A curated blend of code-centric builds and applied data science work.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
