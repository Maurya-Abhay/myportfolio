import { ArrowUpRight, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details"><X size={19} /></button>
        <div className="modal-visual">
          {project.image ? <img src={project.image} alt="" /> : <div className="modal-preview"><div /><div /><div /><div /></div>}
        </div>
        <div className="modal-body">
          <div className="project-meta"><span>{project.year}</span><span>{project.status}</span></div>
          <div className="modal-heading-row">
            <div><h2 id="project-detail-title">{project.title}</h2><p>{project.description}</p></div>
            <div className="modal-links">
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live <ArrowUpRight size={15} /></a>}
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source <ArrowUpRight size={15} /></a>}
            </div>
          </div>
          <div className="modal-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="modal-grid">
            <section><h3>Key features</h3>{project.features.map((item) => <p key={item}>↳ {item}</p>)}</section>
            <section><h3>Challenges</h3>{project.challenges.map((item) => <p key={item}>↳ {item}</p>)}</section>
            <section><h3>Learnings</h3>{project.learnings.map((item) => <p key={item}>↳ {item}</p>)}</section>
          </div>
        </div>
      </div>
    </div>
  );
}
