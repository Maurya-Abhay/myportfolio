import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

function Preview({ project }: { project: Project }) {
  if (project.image) {
    return <img src={project.image} alt="" loading="lazy" />;
  }

  return (
    <div className="preview-fallback" aria-hidden="true">
      <div className="preview-topbar"><span /><span /><span /></div>
      <div className="preview-grid">
        <div className="preview-side" />
        <div className="preview-main">
          <div className="preview-kpi-row"><i /><i /><i /></div>
          <div className="preview-chart"><b /><b /><b /><b /><b /><b /></div>
          <div className="preview-table"><span /><span /><span /><span /></div>
        </div>
      </div>
      <div className="preview-label">{project.title}</div>
    </div>
  );
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button className="project-card" type="button" onClick={() => onOpen(project)}>
      <div className="project-media"><Preview project={project} /><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
      <div className="project-card-body">
        <div className="project-meta"><span>{project.year}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tag-row">
          {project.stack.slice(0, 4).map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
      </div>
    </button>
  );
}
