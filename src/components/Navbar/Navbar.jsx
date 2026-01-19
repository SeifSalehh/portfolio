import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#career', label: 'Career' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const firstDrawerLinkRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleHash = () => setOpen(false);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open && firstDrawerLinkRef.current) {
      firstDrawerLinkRef.current.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.navbar} ref={navRef}>
        <div className={styles.brand}>Seifeldin Saleh</div>
        <nav className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${activeId === link.href ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace('#', '');
                const target = document.getElementById(id);
                if (!target) return;
                const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const navHeight =
                  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) ||
                  navRef.current?.offsetHeight ||
                  0;
                const offset = target.offsetTop - navHeight - 8;
                window.scrollTo({
                  top: offset,
                  behavior: prefersReduce ? 'auto' : 'smooth',
                });
                history.pushState(null, '', link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            className={`${styles.resumeBtn} btn btnGhost`}
            href="/Seifeldin_Saleh_Resume.pdf"
            download
          >
            Resume
          </a>
        </nav>
        <button
          className={styles.menuButton}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerContent}>
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                const id = link.href.replace('#', '');
                const target = document.getElementById(id);
                if (!target) return;
                const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                const navHeight =
                  parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) ||
                  navRef.current?.offsetHeight ||
                  0;
                const offset = target.offsetTop - navHeight - 8;
                window.scrollTo({
                  top: offset,
                  behavior: prefersReduce ? 'auto' : 'smooth',
                });
                history.pushState(null, '', link.href);
              }}
              ref={idx === 0 ? firstDrawerLinkRef : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            className={styles.drawerResume}
            href="/Seifeldin_Saleh_Resume.pdf"
            download
            onClick={() => setOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div
        className={`${styles.backdrop} ${open ? styles.backdropVisible : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}

export default Navbar;
