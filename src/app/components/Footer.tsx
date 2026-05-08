import { config } from '@/config';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Vietnamese Language Club</h3>
            <p>{config.site.description.split('.')[0]}.</p>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <a href={`mailto:${config.links.email}`} className={styles.link}>
              {config.links.email}
            </a>
          </div>

          <div className={styles.section}>
            <h4>Follow Us</h4>
            <a
              href={config.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
          </div>

          <div className={styles.section}>
            <h4>Partner</h4>
            <a
              href={config.links.partner}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ideal Logic
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2026 {config.site.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
