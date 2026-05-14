'use client';

import styles from './page.module.css';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  {
    id: 1,
    titleEn: 'First Meeting',
    titleVi: 'Cuộc gặp đầu tiên',
    descEn: 'Our first ever general body meeting',
    descVi: 'Cuộc họp toàn thể đầu tiên của chúng tôi',
    src: '/assets/IMG_5545.jpg',
  },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          {t('Moments', 'Khoảnh Khắc')}
        </span>
        <h1 style={{ color: '#000000' }}>{t('Gallery Moments', 'Thư Viện Ảnh')}</h1>
        <p className={styles.subtitle}>
          {t(
            'Visual memories from our Vietnamese Language Club study sessions, festive celebrations, and vibrant cultural nights.',
            'Những kỷ niệm hình ảnh qua các buổi học, sự kiện giao lưu và các đêm văn hóa đặc sắc của Câu Lạc Bộ Tiếng Việt.'
          )}
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {galleryImages.map((image) => (
            <div key={image.id} className={`glass-panel ${styles.imageWrapper}`}>
              <div
                className={styles.imageBox}
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className={styles.infoBox}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#121212', margin: '0 0 0.3rem 0' }}>
                  {t(image.titleEn, image.titleVi)}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {t(image.descEn, image.descVi)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
