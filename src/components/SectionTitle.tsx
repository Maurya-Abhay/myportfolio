interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: string;
  onAction?: () => void;
}

export function SectionTitle({ eyebrow, title, description, action, onAction }: SectionTitleProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && (
        <button className="section-action" type="button" onClick={onAction}>
          {action}<span aria-hidden="true">↗</span>
        </button>
      )}
    </div>
  );
}
