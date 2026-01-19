import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Career from './components/Career/Career.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import { projects } from './data/projects.js';
import { socials } from './data/socials.js';

function App() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sections = document.querySelectorAll('.reveal, .revealItem');

    if (media.matches) {
      sections.forEach((section) => section.classList.add('revealActive'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealActive');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="appShell">
      <Navbar />
      <main>
        <Hero socials={socials} />
        <Projects projects={projects} />
        <Career />
        <About />
        <Contact socials={socials} />
      </main>
    </div>
  );
}

export default App;
