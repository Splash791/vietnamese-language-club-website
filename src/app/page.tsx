'use client';

import Link from 'next/link';
import { config } from '@/config';
import styles from './page.module.css';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.heroSection}>
      {/* Pristine Minimalist 2-Column Hero Layout */}
      <div className={styles.heroGrid}>
        {/* Left Column: Typography & CTAs */}
        <div className={styles.leftContent}>
          <h1 className={styles.title} style={{ color: '#000000' }}>
            {t('Vietnamese Language Club', 'Câu Lạc Bộ Tiếng Việt')}
          </h1>

          <p className={styles.subtitle}>
            {t(
              config.site.description,
              'Học tiếng Việt cùng cộng đồng OSU. Nâng cao kỹ năng giao tiếp, ngữ pháp và phát âm qua các buổi học và thực hành giao tiếp hàng tuần.'
            )}
          </p>

          <div className={styles.ctas}>
            <Link href={config.links.joinUs} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                {t('Join Us', 'Tham Gia Ngay')}
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-secondary">
                {t('Learn More', 'Tìm Hiểu Thêm')}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Logo Display */}
        <div className={styles.rightContent}>
          <div className={styles.logoGlow} />
          <img
            src="/vlc.png"
            alt="Vietnamese Language Club Logo"
            className={styles.heroLogo}
          />
        </div>
      </div>
    </div>
  );
}
