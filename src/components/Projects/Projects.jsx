import styles from './Projects.module.css';

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
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
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
