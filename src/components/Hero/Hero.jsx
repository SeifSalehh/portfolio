import { useEffect, useRef } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Hero.module.css';

function Hero({ socials }) {
  const visualRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const node = visualRef.current;
    if (!node) return undefined;

    let enabled = !media.matches && window.innerWidth > 900;

    const updateEnabled = () => {
      enabled = !media.matches && window.innerWidth > 900;
      if (!enabled) {
        node.style.transform = '';
      }
    };

    const handleMove = (event) => {
      if (!enabled) return;
      const rect = node.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (-relY * 4) / 2;
      const rotateY = (relX * 4) / 2;
      node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleLeave = () => {
      node.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    };

    node.addEventListener('pointermove', handleMove);
    node.addEventListener('pointerleave', handleLeave);
    window.addEventListener('resize', updateEnabled);
    media.addEventListener('change', updateEnabled);
    updateEnabled();

    return () => {
      node.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', handleLeave);
      window.removeEventListener('resize', updateEnabled);
      media.removeEventListener('change', updateEnabled);
    };
  }, []);

  return (
    <section id="hero" className={`section reveal ${styles.hero}`}>
      <div className={styles.content}>
        <div className={styles.rolePill}>
          <span className={styles.roleIcon} aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 10a6 6 0 1 1 12 0v2.5l1.2 1.6a1 1 0 0 1-1.6 1.2L14 13.5V10a4 4 0 1 0-8 0v3.5L4.4 15.3a1 1 0 0 1-1.6-1.2L4 12.5Z" />
            </svg>
          </span>
          <span className={styles.roleText}>Software Engineer</span>
        </div>
        <h1 className={styles.title}>
          <a href="#projects" className={styles.nameLink}>
            Seifeldin Saleh
          </a>
        </h1>
        <p className={styles.tagline}>
          Building <span className={styles.emph}>full-stack</span>, system-driven applications — from{' '}
          <span className={styles.emph}>APIs</span> to clean <span className={styles.emph}>UIs</span>.
        </p>
        <p className={styles.location}>Debrecen</p>
        <p className={styles.status}>Full-stack • Systems • Clean UI</p>
        <div className={styles.actions}>
          <a className="btn btnPrimary" href="#projects">
            <span className="btnContent">
              View Projects
              <span className="btnIcon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 14.5a1 1 0 0 1-.7-.29l-4-4a1 1 0 1 1 1.4-1.42L9 10.09V4a1 1 0 1 1 2 0v6.1l2.3-1.8a1 1 0 0 1 1.4 1.42l-4 3.96a1 1 0 0 1-.7.32Z" />
                </svg>
              </span>
            </span>
          </a>
          <a
            className="btn btnGhost"
            href="/Seifeldin_Saleh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="btnContent">
              Download Resume
              <span className="btnIcon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12.8 6.47 9.27a1 1 0 0 1 1.42-1.42L9 8.95V3a1 1 0 1 1 2 0v5.95l1.1-1.1a1 1 0 0 1 1.42 1.42L10 12.8Zm-6 1.7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
        <SocialLinks socials={socials} />
      </div>
      <div className={styles.visual} ref={visualRef} aria-hidden="true">
        <img src="/Profile.JPEG" alt="" className={styles.photo} />
        <div className={styles.fade} />
        <div className={styles.grid} />
        <div className={styles.glow} />
      </div>
    </section>
  );
}

export default Hero;
