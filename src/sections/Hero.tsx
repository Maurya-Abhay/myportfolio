import { ArrowUpRight, Github, Linkedin, Mail, MapPin, UserRound, BriefcaseBusiness } from 'lucide-react';
import { Button } from '../components/Button';
import type { Profile } from '../types';

interface HeroProps { profile: Profile }

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="hero container section-pad">
      <div className="hero-copy">
        <div className="availability"><span />{profile.availability}</div>
        <div className="hero-role">{profile.role}</div>
        <h1>{profile.headline.split('fast,')[0]}<span>fast,</span>{profile.headline.split('fast,')[1]}</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-buttons">
          <Button href="#work">Explore My Work <ArrowUpRight size={17} /></Button>
          {profile.resumeUrl && <Button href={profile.resumeUrl} variant="secondary" target="_blank">View Resume <ArrowUpRight size={17} /></Button>}
          {!profile.resumeUrl && <Button href="#contact" variant="secondary">Let's Talk <ArrowUpRight size={17} /></Button>}
        </div>
        <div className="social-row">
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a>
          {profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /></a>}
          {profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>}
        </div>
      </div>

      <div className="hero-profile">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-ring">
          <img src={profile.image || '/profile.svg'} alt={`${profile.name} profile`} />
        </div>
        <div className="profile-info-card">
          <div><BriefcaseBusiness size={16} /><span>{profile.role}</span></div>
          <div><UserRound size={16} /><span>{profile.stats[0]?.value || '1+ Years'} Experience</span></div>
          <div><MapPin size={16} /><span>{profile.location}</span></div>
        </div>
      </div>
    </section>
  );
}
