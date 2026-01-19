import SocialLinks from '../SocialLinks/SocialLinks.jsx';
import styles from './Contact.module.css';

function Contact({ socials }) {
  const primarySocials = socials.filter((item) => item.id !== 'email');

  return (
    <section id="contact" className={`section reveal ${styles.contact}`}>
      <div className={styles.card}>
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="sectionTitle">Let’s collaborate</h2>
          <p className="sectionSubtitle">
            Tell me about the product, the constraints, and the success criteria—let’s design the path together.
          </p>
        </div>
        <div className={styles.actions}>
          <a className="btn btnPrimary" href="mailto:seifeldin077@gmail.com">
            <span className="btnContent">
              Email me
              <span className="btnIcon" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.5 5.5A1.5 1.5 0 0 1 5 4h10a1.5 1.5 0 0 1 1.45 1.1l-6.3 4.2-6.3-4.2Zm-.5 1.65v6.35A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5V7.15l-6.27 4.18a1.5 1.5 0 0 1-1.46 0Z" />
                </svg>
              </span>
            </span>
          </a>
          <SocialLinks socials={primarySocials} variant="tight" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
