'use client';

import Link from 'next/link';
import { config } from '@/config';
import styles from './Navigation.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();

  const getTranslatedLabel = (baseLabel: string) => {
    switch (baseLabel) {
      case 'Home':
        return t('Home', 'Trang Chủ');
      case 'About':
        return t('About', 'Giới Thiệu');
      case 'Blog':
        return t('Blog', 'Bài Viết');
      case 'Gallery':
        return t('Gallery', 'Thư Viện');
      default:
        return baseLabel;
    }
  };

  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.nav}>
        {/* Left branding */}
        <Link href="/" className={styles.logo}>
          <img src="/vlc.png" alt="VLC Logo" className={styles.logoImage} />
          <span className={styles.logoText}>VLC @ OSU</span>
        </Link>

        {/* Right Nav Layout container */}
        <div className={styles.navContent}>
          <ul className={styles.links}>
            {config.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.linkItem}>
                  {getTranslatedLabel(item.label)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Interactive Global Language Toggle Pill */}
          <div 
            className={styles.langToggle} 
            onClick={toggleLanguage}
            title={t('Switch to Vietnamese', 'Chuyển sang Tiếng Anh')}
          >
            <span className={`${styles.langOption} ${language === 'en' ? styles.langActive : ''}`}>
              EN
            </span>
            <span className={`${styles.langOption} ${language === 'vi' ? styles.langActive : ''}`}>
              VI
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
