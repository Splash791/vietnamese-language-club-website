'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useLanguage } from '../context/LanguageContext';

const blogPosts = [
  {
    id: 1,
    titleEn: "Getting Started with Vietnamese: A Beginner's Guide",
    titleVi: "Bắt Đầu Với Tiếng Việt: Cẩm Nang Cho Người Mới",
    excerptEn: "Learn the basics of Vietnamese language, including pronunciation, tones, dialects, and essential phrases to get you started.",
    excerptVi: "Tìm hiểu các nguyên tắc cơ bản của tiếng Việt, bao gồm cách phát âm, sáu thanh điệu, phương ngữ và các mẫu câu giao tiếp thiết yếu.",
    date: "April 27th, 2026",
    categoryEn: "Meeting Notes",
    categoryVi: "Ghi Chú Sinh Hoạt",
  },
];

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D32F2F', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          {t('Insights & Updates', 'Tin Tức & Bài Viết')}
        </span>
        <h1 style={{ color: '#000000' }}>{t('Club Blog', 'Trang Blog')}</h1>
        <p className={styles.subtitle}>
          {t(
            'Stories, educational guides, and community announcements from the Vietnamese Language Club.',
            'Những câu chuyện, cẩm nang học tập và thông báo sinh hoạt từ Câu Lạc Bộ Tiếng Việt.'
          )}
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.posts}>
          {blogPosts.map((post) => (
            <article key={post.id} className={`glass-panel ${styles.postCard}`}>
              <div className={styles.postHeader}>
                <div className={styles.meta}>
                  <span className={styles.category}>{t(post.categoryEn, post.categoryVi)}</span>
                  <span className={styles.date}>📅 {post.date}</span>
                </div>
                <Link href={`/blog/${post.id}`} className={styles.postTitle}>
                  <h2>{t(post.titleEn, post.titleVi)}</h2>
                </Link>
              </div>
              <p className={styles.excerpt}>{t(post.excerptEn, post.excerptVi)}</p>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                {t('Read Article →', 'Đọc Bài Viết →')}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
