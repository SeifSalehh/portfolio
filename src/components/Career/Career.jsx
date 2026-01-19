import styles from './Career.module.css';

const timeline = [
  {
    type: 'education',
    title: 'Computer Science BSc',
    org: 'University of Debrecen',
    dates: 'Sep 2021 — Dec 2025',
    detail: 'GPA: 4.03 / 5.00',
  },
  {
    type: 'internship',
    title: 'Software Engineering Intern — Deloitte',
    org: 'Deloitte',
    dates: 'Jul 2025 – Aug 2025',
    bullets: [
      'Developed and maintained internal web systems used across multiple teams, working on production-grade frontend and backend features',
      'Designed and integrated RESTful APIs, contributed to service-layer logic, and collaborated within established engineering standards and review workflows',
    ],
  },
  {
    type: 'internship',
    title: 'Web Development Intern',
    org: 'ECG Qatar',
    dates: 'Jun 2024 — Aug 2024',
    bullets: [
      'Delivered a MERN web app with modular architecture and REST APIs.',
      'Built React.js components and integrated MongoDB via Express.js.',
    ],
  },
];

const stacks = {
  languages: [
    {
      label: 'JavaScript',
      footprint: 92,
      usedIn: 'KickCrew (frontend), EthFetch, FitTrack',
    },
    {
      label: 'Java',
      footprint: 68,
      usedIn: 'KickCrew backend',
    },
    {
      label: 'Python',
      footprint: 58,
      usedIn: 'RAG Chatbot',
    },
    {
      label: 'SQL',
      footprint: 64,
      usedIn: 'KickCrew/MySQL, RAG/PostgreSQL',
    },
  ],
  databases: [
    {
      label: 'MySQL',
      footprint: 62,
      usedIn: 'KickCrew',
    },
    {
      label: 'PostgreSQL',
      footprint: 54,
      usedIn: 'Deloitte internship, RAG Chatbot',
    },
    {
      label: 'MongoDB',
      footprint: 48,
      usedIn: 'ECG internship',
    },
    {
      label: 'Supabase / Postgres',
      footprint: 44,
      usedIn: 'FitTrack',
    },
  ],
};

function Career() {
  return (
    <section id="career" className={`section reveal ${styles.career}`}>
      <div className="sectionHeader">
        <p className="eyebrow">Trajectory</p>
        <h2 className="sectionTitle">Career</h2>
        <p className="sectionSubtitle">Education, internships, and where engineering time was invested.</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.timelineCard}>
          <div className={styles.timelineLine} />
          <div className={styles.timelineItems}>
            {timeline.map((item) => (
              <div key={item.title} className={`${styles.item} ${styles[item.type] || ''}`}>
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.itemBody}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <span className={styles.meta}>{item.org} • {item.dates}</span>
                  </div>
                  {item.detail && !item.bullets && <p className={styles.detail}>{item.detail}</p>}
                  {item.bullets && (
                    <ul className={styles.bullets}>
                      {item.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <p className={styles.chartEyebrow}>Languages & Databases</p>
            <p className={styles.chartSubtitle}>Tools used across shipped builds</p>
          </div>
          <div className={styles.breakdownMeta}>Project footprint — based on where each tool appears across shipped builds. Not a proficiency rating.</div>
          <div className={styles.breakdownGrid}>
            <div>
              <p className={styles.groupLabel}>Languages</p>
              <div className={styles.stackList}>
                {stacks.languages.map((item) => (
                  <div key={item.label} className={styles.stackRow}>
                    <div className={styles.rowTop}>
                      <span className={styles.rowLabel}>{item.label}</span>
                    </div>
                    <div className={styles.barTrack}>
                      <span className={styles.barFill} style={{ width: `${item.footprint}%` }} />
                    </div>
                    <p className={styles.usedIn}>Used in: {item.usedIn}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className={styles.groupLabel}>Databases</p>
              <div className={styles.stackList}>
                {stacks.databases.map((item) => (
                  <div key={item.label} className={styles.stackRow}>
                    <div className={styles.rowTop}>
                      <span className={styles.rowLabel}>{item.label}</span>
                    </div>
                    <div className={styles.barTrack}>
                      <span className={styles.barFill} style={{ width: `${item.footprint}%` }} />
                    </div>
                    <p className={styles.usedIn}>Used in: {item.usedIn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
