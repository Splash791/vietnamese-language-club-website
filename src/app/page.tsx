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
        <p className={styles.subtitle}>
          Learn Vietnamese with the OSU community. Master speaking, listening, grammar, and vocabulary through structured lessons and conversation practice.
        </p>
        <div className={styles.ctas}>
          <button className="btn btn-primary">Join Us</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}
