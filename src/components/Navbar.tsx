import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../hooks/useTheme';

interface NavbarProps {
  name: string;
  theme: Theme;
  onToggleTheme: () => void;
}

const links = [
  ['About', 'about'],
  ['Work', 'work'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
] as const;

export function Navbar({ name, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const brandName = name.split(' ')[0].toUpperCase();

  return (
    <header className="nav-shell">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {brandName}<span>.</span>
        </a>
        <div className="nav-links">
          {links.map(([label, id]) => <a className={id === 'contact' ? 'nav-link nav-link-contact' : 'nav-link'} key={id} href={`#${id}`}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="nav-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        {links.map(([label, id]) => (
          <a className={id === 'contact' ? 'mobile-nav-link mobile-nav-contact' : 'mobile-nav-link'} key={id} href={`#${id}`} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            <span>{label}</span><span>↗</span>
          </a>
        ))}
        <div className="mobile-theme"><ThemeToggle theme={theme} onToggle={onToggleTheme} /></div>
      </div>
    </header>
  );
}
