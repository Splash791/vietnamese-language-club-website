import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Vietnamese Language Club</h3>
            <p>Learn Vietnamese with the OSU community</p>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <a href="mailto:vietnameselanguage.clubs@oregonstate.edu" className={styles.link}>
              vietnameselanguage.clubs@oregonstate.edu
            </a>
          </div>

          <div className={styles.section}>
            <h4>Follow Us</h4>
            <a
              href="https://www.instagram.com/vietlanguageatosu?igsh=MXdhbXl3MzdieDAxbg=="
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
              href="https://www.ideallogic.com"
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
          <p>&copy; 2026 Vietnamese Language Club at OSU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
