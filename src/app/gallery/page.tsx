import styles from './page.module.css';

const galleryImages = [
  {
    id: 1,
    title: 'Club Meeting',
    description: 'Regular weekly club meetings where members practice Vietnamese together',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    title: 'Tet Celebration',
    description: 'Vietnamese New Year celebration with traditional decorations and food',
    src: 'https://images.unsplash.com/photo-1519671482677-adf6ad305b75?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'Language Workshop',
    description: 'Interactive workshops on Vietnamese grammar and pronunciation',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    title: 'Cultural Food Night',
    description: 'Members sharing and enjoying traditional Vietnamese cuisine',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'Conversation Practice',
    description: 'Friendly conversation sessions to improve speaking skills',
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    title: 'Movie Night',
    description: 'Watch and discuss Vietnamese films with subtitles',
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop',
  },
  {
    id: 7,
    title: 'Group Photo',
    description: 'Club members together at our end of semester celebration',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
  },
  {
    id: 8,
    title: 'Calligraphy Workshop',
    description: 'Learning traditional Vietnamese calligraphy and brush techniques',
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
  },
];

export default function Gallery() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Gallery</h1>
        <p className={styles.subtitle}>Moments from our Vietnamese Language Club community</p>
      </section>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.imageWrapper}>
              <div
                className={styles.imagePlaceholder}
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className={styles.overlay}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
