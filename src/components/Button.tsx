import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  target?: string;
}

export function Button({ children, href, onClick, variant = 'primary', className = '', target }: ButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();

  if (href) {
    return <a className={classes} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} onClick={onClick}>{children}</a>;
  }

  return <button className={classes} type="button" onClick={onClick}>{children}</button>;
}
