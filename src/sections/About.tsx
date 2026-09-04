import { Braces, Lightbulb, UserRoundCheck } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import type { Profile } from '../types';

export function About({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="section-pad border-top">
      <div className="container">
        <SectionTitle eyebrow="About me" title="A developer who cares about the details." />
        <div className="about-grid">
          <p className="about-copy">{profile.about}</p>
          <div className="principle-grid">
            <article><span><Braces size={18} /></span><h3>Clean Code</h3><p>Writing maintainable and scalable code.</p></article>
            <article><span><Lightbulb size={18} /></span><h3>Problem Solver</h3><p>Analytical thinking and creative solutions.</p></article>
            <article><span><UserRoundCheck size={18} /></span><h3>User Focused</h3><p>Building products that users love.</p></article>
          </div>
        </div>
      </div>
    </section>
  );
}
