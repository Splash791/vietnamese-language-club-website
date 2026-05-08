import Link from 'next/link';
import { config } from '@/config';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src="/vlc.png"
          alt="Vietnamese Language Club"
          className={styles.logo}
        />
        <h1>Vietnamese Language Club</h1>
        <p className={styles.subtitle}>{config.site.description}</p>
        <div className={styles.ctas}>
          <Link href={config.links.joinUs} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Join Us</button>
          </Link>
          <Link href="/about">
            <button className="btn btn-secondary">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
