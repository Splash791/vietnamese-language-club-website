import Link from 'next/link';
import styles from './page.module.css';

const blogPosts: Record<
  string,
  {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    category: string;
  }
> = {
  '1': {
    id: 1,
    title: "Getting Started with Vietnamese: A Beginner's Guide",
    excerpt: 'Learn the basics of Vietnamese language, including pronunciation, tones, dialects, and essential phrases to get you started.',
    content: `

## Understanding Vietnamese Tones

Vietnamese is a tonal language, meaning that the pitch or tone in which you speak a syllable changes its meaning. There are six tones in Vietnamese, which can be challenging for English speakers, but with practice, you'll develop an ear for them.

According to the Vietnamese Language Club presentation, the Northern dialect preserves all six tones, while the Southern and Central dialects often blend or flatten tones differently.

## Vietnamese Dialects

Vietnam has three main regional dialects:

- Bắc (Northern)
- Nam (Southern)
- Huế (Central)

The Northern dialect is considered the official dialect and preserves all six tones. Southern Vietnamese is often described as more relaxed and rhythmic, while the Central Huế dialect can be more difficult for beginners to understand because tones are blended and flattened.

## The Vietnamese Alphabet

Vietnamese uses a Latin-based alphabet with additional accent marks and tone markings. The language originally used Chinese-like characters before transitioning to the modern writing system.

Some unique letters include:

- Ă
- Â
- Đ
- Ê
- Ô
- Ơ
- Ư

## Common Greetings

- Chào bạn. Bạn tên là gì? (Hi, friend. What is your name?)
- Tên tôi là [name]. (My name is [name].)
- Bạn có khỏe không? (How are you?)
- Tôi khỏe. Cảm ơn. (I am well. Thank you.)

## Learning Numbers

Here are the numbers 1-10 in Vietnamese:

1. Một
2. Hai
3. Ba
4. Bốn
5. Năm
6. Sáu
7. Bảy
8. Tám
9. Chín
10. Mười

## Vietnamese Culture and Drinks

Language learning is also about culture. Vietnamese cafes are an important social space where conversations happen over drinks like:

- Ca Phe Sua Da (Vietnamese iced coffee with condensed milk)
- Nuoc Chanh Day (Passionfruit juice)

## Next Steps

Start by practicing these basic phrases daily. Focus on listening carefully to tones and repeating words aloud. Don't worry about perfect pronunciation at first—native speakers usually appreciate the effort and enthusiasm.`,
    author: 'Vietnamese Language Club',
    date: 'April 27th, 2026',
    category: 'Meeting Notes',
  },
};

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.id];

  if (!post) {
    return (
      <div className={styles.container}>
        <section className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>Sorry, we couldn't find the blog post you're looking for.</p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            Back to Blog
          </Link>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.author}>by {post.author}</span>
          </div>
        </header>

        <div className={styles.content}>
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 2;
              const text = paragraph.replace(/^#+\s/, '');
              const className = styles[`heading${level}`];
              if (level === 1) return <h1 key={index} className={className}>{text}</h1>;
              if (level === 2) return <h2 key={index} className={className}>{text}</h2>;
              if (level === 3) return <h3 key={index} className={className}>{text}</h3>;
              if (level === 4) return <h4 key={index} className={className}>{text}</h4>;
              return <h5 key={index} className={className}>{text}</h5>;
            }
            if (paragraph.startsWith('-')) {
              return (
                <ul key={index} className={styles.list}>
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace(/^-\s/, '')}</li>
                  ))}
                </ul>
              );
            }
            if (paragraph.match(/^\d\./)) {
              return (
                <ol key={index} className={styles.list}>
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i}>{item.replace(/^\d\.\s/, '')}</li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}
