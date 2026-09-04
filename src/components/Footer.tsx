import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import type { Profile } from '../types';

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a className="brand footer-brand" href="#top">{profile.initials || 'YN.'}</a>
          <p>Designed & built with care.</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17} /></a>
          {profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>}
          {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
          <a href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
    </footer>
  );
}
