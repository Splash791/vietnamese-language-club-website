import Link from 'next/link';
import styles from './page.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Vietnamese: A Beginner\'s Guide',
    excerpt: 'Learn the basics of Vietnamese language, including pronunciation, tones, dialects, and essential phrases to get you started.',
    author: 'Vietnamese Language Club',
    date: 'April 27th, 2026',
    category: 'Meeting Notes',
  },
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Blog</h1>
        <p className={styles.subtitle}>Stories and insights from the Vietnamese Language Club</p>
      </section>

      <div className={styles.content}>
        <div className={styles.posts}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postHeader}>
                <Link href={`/blog/${post.id}`} className={styles.postTitle}>
                  <h2>{post.title}</h2>
                </Link>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
              </div>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className={styles.readMore}>
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
