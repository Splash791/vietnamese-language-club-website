'use client';

import styles from './page.module.css';
import { useLanguage } from '../context/LanguageContext';

const teamMembers = [
  {
    id: 1,
    name: 'Ashley Tran',
    role: 'President',
    major: 'Business Administration',
    avatarBg: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
  },
  {
    id: 2,
    name: 'Tyler Quach',
    role: 'Vice President & Webmaster',
    major: 'Computer Science',
    avatarBg: 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)',
  },
  {
    id: 3,
    name: 'Elysia Vo',
    role: 'Secretary',
    major: 'Biohealth Sciences',
    avatarBg: 'linear-gradient(135deg, #121212 0%, #424242 100%)',
  },
  {
    id: 4,
    name: 'Kevin Ngo',
    role: 'Treasurer',
    major: 'Finance',
    avatarBg: 'linear-gradient(135deg, #D32F2F 0%, #D4AF37 100%)',
  },
  {
    id: 5,
    name: 'Dana Tran',
    role: 'Event Coordinator',
    major: 'Marketing',
    avatarBg: 'linear-gradient(135deg, #D4AF37 0%, #B71C1C 100%)',
  },
  {
    id: 6,
    name: 'Arron Vuong',
    role: 'Historian',
    major: 'Linguistics',
    avatarBg: 'linear-gradient(135deg, #424242 0%, #D32F2F 100%)',
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      {/* Sleek Minimalist/Glass Hero header */}
      <section className={styles.hero}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D32F2F', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          {t('Câu Lạc Bộ Tiếng Việt OSU', 'Câu Lạc Bộ Tiếng Việt OSU')}
        </span>
        <h1 style={{ color: '#000000' }}>{t('About Us', 'Về Chúng Tôi')}</h1>
        <p className={styles.subtitle}>
          {t(
            'Promoting Vietnamese language mastery, celebrating heritage, and building an inclusive lifelong community.',
            'Thúc đẩy sự thông thạo tiếng Việt, tôn vinh di sản và xây dựng một cộng đồng gắn kết trọn đời.'
          )}
        </p>
      </section>

      {/* Core Mission Container */}
      <div className={styles.content}>
        <div className={`glass-panel ${styles.section}`} style={{ padding: '2.5rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#D32F2F', fontSize: '1.6rem', borderBottom: '2px solid #FCE4EC', paddingBottom: '0.8rem', marginBottom: '1.2rem' }}>
            {t('Our Mission', 'Sứ Mệnh Của Chúng Tôi')}
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.8 }}>
            {t(
              'We are dedicated to elevating Vietnamese language and culture within the Oregon State University community. Learning Vietnamese opens direct pathways to understanding authentic ancestral heritage, communicating with global communities, and establishing profound cross-cultural bonds.',
              'Chúng tôi tận tâm nâng tầm ngôn ngữ và văn hóa Việt Nam tại Đại học Oregon State. Việc học tiếng Việt mở ra con đường trực tiếp để thấu hiểu cội nguồn văn hóa, giao tiếp với cộng đồng toàn cầu và xây dựng những mối quan hệ giao lưu sâu sắc.'
            )}
          </p>
        </div>

        <div className={`glass-panel ${styles.section}`} style={{ padding: '2.5rem' }}>
          <h2 style={{ color: '#D4AF37', fontSize: '1.6rem', borderBottom: '2px solid #FEF8E7', paddingBottom: '0.8rem', marginBottom: '1.2rem' }}>
            {t('What We Offer', 'Hoạt Động Tiêu Biểu')}
          </h2>
          <ul className={styles.list}>
            <li>
              <strong style={{ color: '#121212' }}>{t('Structured Language Modules:', 'Chương Trình Học Bài Bản:')}</strong> {t('Comprehensive tracks covering reading, writing, and practical multi-tone listening for all proficiencies.', 'Các khóa học toàn diện rèn luyện kỹ năng đọc, viết và nghe hiểu ngữ điệu thực tế cho mọi trình độ.')}
            </li>
            <li>
              <strong style={{ color: '#121212' }}>{t('Conversational Speaking Circles:', 'Vòng Tròn Thực Hành Giao Tiếp:')}</strong> {t('Weekly peer-to-peer dialogues addressing native dialect nuances, idioms, and dynamic slang.', 'Các buổi đối thoại hàng tuần rèn luyện cách diễn đạt tự nhiên, thành ngữ và từ lóng phổ biến.')}
            </li>
            <li>
              <strong style={{ color: '#121212' }}>{t('Cultural Festivities:', 'Lễ Hội Văn Hóa Đặc Sắc:')}</strong> {t('Immersive celebrations for Tết (Lunar New Year), Mid-Autumn lantern crafting, and local culinary tours.', 'Các sự kiện trải nghiệm Tết Nguyên Đán, làm lồng đèn Trung Thu và các chuyến khám phá ẩm thực.')}
            </li>
            <li>
              <strong style={{ color: '#121212' }}>{t('Welcoming Inclusive Network:', 'Mạng Lưới Thân Thiện Kết Nối:')}</strong> {t('A supportive family of passionate learners, heritage speakers, and cross-cultural ambassadors.', 'Một gia đình đầm ấm của những người đam mê học hỏi, sinh viên gốc Việt và các đại sứ văn hóa.')}
            </li>
          </ul>
        </div>
      </div>

      {/* Leadership Showcase Section */}
      <section className={styles.teamSection}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
          {t('Executive Board', 'Ban Điều Hành')}
        </span>
        <h2 style={{ marginBottom: '3rem' }}>{t('Meet Our Leadership', 'Đội Ngũ Ban Điều Hành')}</h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`glass-panel ${styles.teamCard}`}
              style={{
                padding: '2.5rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
                borderColor: 'rgba(0,0,0,0.08)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Subtle header stripe */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: member.avatarBg }} />

              <div 
                className={styles.avatar}
                style={{
                  background: member.avatarBg,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                }}
              >
                {member.name.charAt(0)}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#121212', margin: '0.2rem 0' }}>
                {member.name}
              </h3>
              
              <p className={styles.role} style={{ color: '#D32F2F', fontWeight: 700, margin: '0.2rem 0 0.5rem' }}>
                {member.role}
              </p>

              <span style={{ display: 'inline-block', background: '#F5F5F7', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600, color: '#757575', margin: 0 }}>
                📚 {member.major}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
