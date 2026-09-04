import { useState } from 'react';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectDetails } from '../components/ProjectDetails';
import type { AchievementItem, EducationItem, ExperienceItem, Profile, Project, SkillGroup } from '../types';
import { Footer } from '../components/Footer';

interface HomeProps {
  profile: Profile;
  projects: Project[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: AchievementItem[];
}

export function Home({ profile, projects, skills, experience, education, achievements }: HomeProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);
  const visibleEducation = Array.from(
    new Map(education.map((item) => [`${item.program}-${item.period}-${item.institution}`, item])).values(),
  ).slice(0, 3);

  return (
    <>
      <main>
        <Hero profile={profile} />
        <About profile={profile} />

        <section id="work" className="section-pad border-top">
          <div className="container">
            <SectionTitle
              eyebrow="Selected work"
              title="Featured Projects"
              description="A few things I've built recently."
              action={projects.length > 6 ? (showAllProjects ? 'Show fewer projects' : 'View all projects') : undefined}
              onAction={() => setShowAllProjects((value) => !value)}
            />
            <div className="projects-grid">
              {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelected} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad border-top">
          <div className="container">
            <SectionTitle eyebrow="Toolkit" title="Skills & Technologies" />
            <div className="skill-grid">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-row large">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad border-top">
          <div className="container split-section">
            <aside className="side-stack">
              <div>
                <SectionTitle eyebrow="Education" title="Learning" />
                <div className="education-card">{visibleEducation.map((item) => <div className="education-item" key={`${item.institution}-${item.period}-${item.program}`}><div className="timeline-period">{item.period}</div><h3>{item.program}</h3><strong>{item.institution}</strong><p>{item.description}</p></div>)}</div>
              </div>
            </aside>
            <div className="experience-column">
              <SectionTitle eyebrow="Career" title="Experience" />
              <div className="timeline">
                {experience.map((item) => (
                  <article className="timeline-item" key={`${item.company}-${item.period}`}>
                    <span className="timeline-dot" />
                    <div><div className="timeline-period">{item.period}</div><h3>{item.role}</h3><strong>{item.company}</strong><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
              <div className="experience-achievements">
                <SectionTitle eyebrow="Achievements" title="Highlights" />
                <div className="achievement-list">{achievements.map((item) => <div className="achievement-item" key={item.title}><span>◆</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad border-top contact-section">
          <div className="container contact-grid">
            <div>
              <span className="section-eyebrow">Get in touch</span>
              <h2>Let's build something useful together.</h2>
              <p>Have a project, an idea or a role in mind? Send a message and I’ll get back to you.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-card">
              <div><Mail size={18} /><span><b>Email</b>{profile.email}</span></div>
              <div><MapPin size={18} /><span><b>Location</b>{profile.location}</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer profile={profile} />
      {selected && <ProjectDetails project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
