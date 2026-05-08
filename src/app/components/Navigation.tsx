import Link from 'next/link';
import { config } from '@/config';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/vlc.png" alt="Vietnamese Language Club" className={styles.logoImage} />
        </Link>
        <ul className={styles.links}>
          {config.navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
