import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md text-sm">
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-sm shadow-[0_0_25px_rgba(34,211,238,0.6)]" />
            <span className="font-semibold tracking-tight text-white">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="w-px h-5 bg-white/10 mx-1" />
            <a aria-label="GitHub" href="#" className="p-2 text-slate-200 hover:text-white" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 text-slate-200 hover:text-white" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 text-slate-200 hover:text-white">
              <Mail size={18} />
            </a>
          </nav>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              <NavLink href="#projects" onClick={close}>Projects</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
