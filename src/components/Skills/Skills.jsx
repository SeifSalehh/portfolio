import styles from './Skills.module.css';

function Skills({ skills }) {
  const ordered = [
    {
      ...skills.find((g) => g.category === 'Frontend'),
      descriptor: 'UI + state',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v9A1.5 1.5 0 0 1 14.5 16h-9A1.5 1.5 0 0 1 4 14.5v-9Zm1.5-.5a.5.5 0 0 0-.5.5V7h10V5.5a.5.5 0 0 0-.5-.5h-9Zm9 4h-10v5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-5Z" />
        </svg>
      ),
    },
    {
      ...skills.find((g) => g.category === 'Backend'),
      descriptor: 'APIs + services',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.25 4c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25V4Zm1.25-.25a.25.25 0 0 0-.25.25v12c0 .14.11.25.25.25h3c.14 0 .25-.11.25-.25V4a.25.25 0 0 0-.25-.25h-3ZM5.5 5.75A1.75 1.75 0 0 1 7.25 7.5v7.75A1.75 1.75 0 0 1 5.5 17H3.25A1.75 1.75 0 0 1 1.5 15.25V7.5A1.75 1.75 0 0 1 3.25 5.75H5.5Zm0 1.5H3.25a.25.25 0 0 0-.25.25v7.75c0 .14.11.25.25.25H5.5a.25.25 0 0 0 .25-.25V7.5a.25.25 0 0 0-.25-.25Z" />
        </svg>
      ),
    },
    {
      ...skills.find((g) => g.category === 'Databases'),
      descriptor: 'Storage + models',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 2.5c-3.04 0-5.5.97-5.5 2.17v10.66C4.5 16.53 6.96 17.5 10 17.5s5.5-.97 5.5-2.17V4.67C15.5 3.47 13.04 2.5 10 2.5Zm0 1c2.76 0 4.5.84 4.5 1.17S12.76 6 10 6 5.5 5.16 5.5 4.83 7.24 3.5 10 3.5Zm4.5 3.3v1.5c0 .33-1.74 1.17-4.5 1.17S5.5 8.63 5.5 8.3v-1.5C6.7 7.4 8.7 7.8 10 7.8c1.3 0 3.3-.4 4.5-1Zm0 3v1.5c0 .33-1.74 1.17-4.5 1.17S5.5 11.33 5.5 11V9.5c1.2.6 3.2 1 4.5 1s3.3-.4 4.5-1Zm0 3v1.5c0 .33-1.74 1.17-4.5 1.17s-4.5-.84-4.5-1.17v-1.5c1.2.6 3.2 1 4.5 1s3.3-.4 4.5-1Z" />
        </svg>
      ),
    },
    {
      ...skills.find((g) => g.category === 'Tools'),
      descriptor: 'Ship + ops',
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="m7.1 3.55 1.44-.96a1.5 1.5 0 0 1 1.62 0l1.45.96L13.9 3a1.5 1.5 0 0 1 1.76 1.05l.4 1.68 1.5.95A1.5 1.5 0 0 1 17.93 9l-.16 1.78 1.02 1.36a1.5 1.5 0 0 1-.35 2.1l-1.46.98-.41 1.67a1.5 1.5 0 0 1-1.75 1.1l-1.63-.37-1.44.96a1.5 1.5 0 0 1-1.62 0l-1.45-.96-1.63.37A1.5 1.5 0 0 1 3.6 16.9l-.4-1.67-1.5-.95a1.5 1.5 0 0 1-.35-2.1l1.02-1.36L2.2 9A1.5 1.5 0 0 1 3.44 7.68l1.5-.95.4-1.68A1.5 1.5 0 0 1 7.1 3.55ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1.5A1.5 1.5 0 1 1 10 11a1.5 1.5 0 0 1 0-3Z" />
        </svg>
      ),
    },
  ].filter(Boolean);

  return (
    <section id="skills" className={`section reveal ${styles.skills}`}>
      <div className="sectionHeader">
        <p className="eyebrow">Capabilities</p>
        <h2 className="sectionTitle">Skills</h2>
        <p className="sectionSubtitle">Compact overview without noisy charts or gamified levels.</p>
      </div>
      <div className={styles.grid}>
        {ordered.map((group) => (
          <div key={group.category} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.icon} aria-hidden="true">
                {group.icon}
              </span>
              <div>
                <p className={styles.category}>{group.category}</p>
                <p className={styles.descriptor}>{group.descriptor}</p>
              </div>
            </div>
            <div className={styles.items}>
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
