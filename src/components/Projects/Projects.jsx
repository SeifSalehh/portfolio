import styles from './Projects.module.css';

const visuals = {
  kickcrew: (
    <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.visualArt} aria-hidden="true">
      <rect x="22" y="12" width="216" height="106" rx="2" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"/>
      <line x1="130" y1="12" x2="130" y2="118" stroke="white" strokeOpacity="0.12" strokeWidth="1.5"/>
      <circle cx="130" cy="65" r="24" stroke="white" strokeOpacity="0.15" strokeWidth="1.5"/>
      <circle cx="130" cy="65" r="3" fill="white" fillOpacity="0.35"/>
      <rect x="22" y="44" width="16" height="44" rx="1" stroke="white" strokeOpacity="0.1" strokeWidth="1.5"/>
      <rect x="222" y="44" width="16" height="44" rx="1" stroke="white" strokeOpacity="0.1" strokeWidth="1.5"/>
      <circle cx="68" cy="38" r="4" fill="white" fillOpacity="0.12"/>
      <circle cx="192" cy="38" r="4" fill="white" fillOpacity="0.12"/>
      <circle cx="68" cy="92" r="4" fill="white" fillOpacity="0.12"/>
      <circle cx="192" cy="92" r="4" fill="white" fillOpacity="0.12"/>
    </svg>
  ),
  'rag-chatbot': (
    <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.visualArt} aria-hidden="true">
      <rect x="16" y="14" width="114" height="38" rx="19" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
      <line x1="30" y1="28" x2="114" y2="28" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="30" y1="38" x2="90" y2="38" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="130" y="58" width="114" height="38" rx="19" stroke="white" strokeOpacity="0.2" strokeWidth="1.5"/>
      <line x1="144" y1="72" x2="228" y2="72" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="144" y1="82" x2="204" y2="82" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="112" r="4" fill="white" fillOpacity="0.32"/>
      <circle cx="46" cy="112" r="4" fill="white" fillOpacity="0.2"/>
      <circle cx="62" cy="112" r="4" fill="white" fillOpacity="0.1"/>
    </svg>
  ),
  fittrack: (
    <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.visualArt} aria-hidden="true">
      <line x1="20" y1="100" x2="240" y2="100" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>
      <line x1="20" y1="72" x2="240" y2="72" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>
      <line x1="20" y1="44" x2="240" y2="44" stroke="white" strokeOpacity="0.07" strokeWidth="1"/>
      <path d="M20 95 L60 68 L100 78 L140 35 L180 52 L220 22 L240 32 L240 110 L20 110 Z" fill="white" fillOpacity="0.05"/>
      <polyline points="20,95 60,68 100,78 140,35 180,52 220,22 240,32" stroke="white" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="60" cy="68" r="3.5" fill="white" fillOpacity="0.6"/>
      <circle cx="140" cy="35" r="3.5" fill="white" fillOpacity="0.6"/>
      <circle cx="220" cy="22" r="4.5" fill="white" fillOpacity="0.85"/>
    </svg>
  ),
  ethfetch: (
    <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.visualArt} aria-hidden="true">
      <line x1="130" y1="65" x2="65" y2="26" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
      <line x1="130" y1="65" x2="195" y2="26" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
      <line x1="130" y1="65" x2="52" y2="106" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
      <line x1="130" y1="65" x2="208" y2="106" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
      <line x1="65" y1="26" x2="195" y2="26" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
      <line x1="52" y1="106" x2="208" y2="106" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>
      <circle cx="65" cy="26" r="7" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
      <circle cx="195" cy="26" r="7" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
      <circle cx="52" cy="106" r="6" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
      <circle cx="208" cy="106" r="6" stroke="white" strokeOpacity="0.25" strokeWidth="1.5"/>
      <circle cx="130" cy="65" r="15" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
      <polygon points="130,50 139,65 130,71 121,65" stroke="white" strokeOpacity="0.5" strokeWidth="1" fill="white" fillOpacity="0.12"/>
      <polygon points="130,71 139,65 130,80 121,65" stroke="white" strokeOpacity="0.3" strokeWidth="1" fill="white" fillOpacity="0.06"/>
    </svg>
  ),
};

function Projects({ projects }) {
  return (
    <section id="projects" className={`section reveal ${styles.projects}`}>
      <div className="sectionHeader">
        <p className="eyebrow">Selected Work</p>
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionSubtitle">
          Full-stack builds with clear architectures, tested data flows, and focused delivery.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <article
            key={project.id}
            className={`${styles.card} revealItem`}
            style={{ transitionDelay: `${idx * 80}ms`, '--card-accent': project.accent }}
          >
            <div className={styles.cardVisual}>
              {visuals[project.id]}
            </div>
            <div className={styles.cardTop}>
              <div>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.name}</h3>
                  {project.badge && <span className={styles.badge}>{project.badge}</span>}
                </div>
                <p className={styles.text}>{project.description[0]}</p>
                <p className={styles.text}>{project.description[1]}</p>
              </div>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.cardActions}>
              {project.github ? (
                <a className="btn btnGhost" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : (
                <span className={styles.meta}>• Private build</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
