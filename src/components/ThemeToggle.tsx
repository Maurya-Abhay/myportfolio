import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const next = theme === 'light' ? 'dark' : 'light';
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${next} mode`}>
      <Sun size={15} />
      <span className={`theme-knob ${theme === 'dark' ? 'is-dark' : ''}`}>
        {theme === 'dark' ? <Moon size={12} /> : <Sun size={12} />}
      </span>
      <Moon size={15} />
    </button>
  );
}
