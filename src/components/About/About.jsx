import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={`section reveal ${styles.about}`}>
      <div className="sectionHeader">
        <p className="eyebrow">Profile</p>
        <h2 className="sectionTitle">About</h2>
        <p className="sectionSubtitle">Grounded, system-minded delivery over buzzwords.</p>
      </div>
      <div className={styles.body}>
        <div className={styles.textCol}>
          <p>
            I hold a Computer Science BSc from the University of Debrecen. I build clean, maintainable systems with
            reliable APIs and UIs that stay readable under real constraints.
          </p>
          <p>
            My work centers on pragmatic architecture, keeping boundaries clear between services, and ensuring data
            flows stay predictable end to end.
          </p>
        </div>
        <div className={styles.principles}>
          <div className={styles.principle}>
            <span className={styles.principleIcon} aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 0 1 .9.56l6 12a1 1 0 0 1-1.8.88L13.35 11H6.65l-1.75 4.44a1 1 0 0 1-1.8-.88l6-12A1 1 0 0 1 10 2Zm0 3.38L8.4 9h3.2L10 5.38Z" />
              </svg>
            </span>
            <div>
              <p className={styles.principleLabel}>Clean architecture</p>
              <p className={styles.principleText}>Layered boundaries that keep change isolated.</p>
            </div>
          </div>
          <div className={styles.principle}>
            <span className={styles.principleIcon} aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3h9A1.5 1.5 0 0 1 16 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 15.5v-11Zm1.5-.5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-11a.5.5 0 0 0-.5-.5h-9Zm1 2A1.5 1.5 0 0 1 8 7.5v1a1.5 1.5 0 0 1-1 1.41V12a.5.5 0 1 1-1 0V6.5A1.5 1.5 0 0 1 6.5 6Zm6 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1 1.41V12a.5.5 0 0 1-1 0V6.5A1.5 1.5 0 0 1 12.5 6Z" />
              </svg>
            </span>
            <div>
              <p className={styles.principleLabel}>Predictable data flows</p>
              <p className={styles.principleText}>Traceable paths from inputs to outputs.</p>
            </div>
          </div>
          <div className={styles.principle}>
            <span className={styles.principleIcon} aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12.5a.5.5 0 0 1-.8.4L10 13.25 5.8 16.9a.5.5 0 0 1-.8-.4V4Zm2-1a1 1 0 0 0-1 1v11.7l3.7-2.96a.5.5 0 0 1 .6 0L14 15.7V4a1 1 0 0 0-1-1H7Z" />
              </svg>
            </span>
            <div>
              <p className={styles.principleLabel}>Readable UIs</p>
              <p className={styles.principleText}>Interfaces that stay legible when busy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
