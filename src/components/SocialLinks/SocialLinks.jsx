import styles from './SocialLinks.module.css';

function Icon({ name }) {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.12.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.19-3.07-.12-.3-.52-1.51.11-3.15 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.64.23 2.85.11 3.15.74.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.38-5.27 5.67.42.36.8 1.07.8 2.16 0 1.56-.02 2.82-.02 3.2 0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M4.98 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3 9h4v12H3zM9 9h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-4v-5.12c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4z"
          />
        </svg>
      );
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M3 5.75A1.75 1.75 0 0 1 4.75 4h14.5A1.75 1.75 0 0 1 21 5.75v12.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25Zm2 .25v.43l7 4.38 7-4.38V6H5Zm14 2.92-6.38 3.99a1.25 1.25 0 0 1-1.24 0L5 8.92v8.58h14Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SocialLinks({ socials, variant = 'inline' }) {
  return (
    <div className={`${styles.socials} ${styles[variant] || ''}`}>
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className={styles.socialLink}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
