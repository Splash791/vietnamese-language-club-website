'use client';

import { useState } from 'react';
import styles from './page.module.css';

const teamMembers = [
  {
    id: 1,
    name: 'Ashley Tran',
    role: 'President',
    bio: 'Passionate about connecting people through language and culture. Alex leads the club with a vision of creating an inclusive space for all language learners.',
    major: ' --- ',
  },
  {
    id: 2,
    name: 'Tyler Quach',
    role: 'Vice President & Webmaster',
    bio: 'Dedicated to organizing engaging events and workshops. Sarah ensures every club meeting is informative and fun for members.',
    major: 'Computer Science',
  },
  {
    id: 3,
    name: 'Elysia Vo',
    role: 'Secretary',
    bio: 'Keeps the club organized and communicates with members. Michael handles all club communications and event planning details.',
    major: ' --- ',
  },
  {
    id: 4,
    name: 'Kevin Ngo',
    role: 'Treasurer',
    bio: 'Manages club finances and resources. Lisa ensures the club has the budget to host events and support member learning.',
    major: ' --- ',
  },
  {
    id: 5,
    name: 'Dana Tran',
    role: 'Event Coordinator',
    bio: 'Plans and executes all club events from language workshops to cultural celebrations. David brings energy and creativity to everything.',
    major: ' --- ',
  },
  {
    id: 6,
    name: 'Arron Vuong',
    role: 'Curriculum Lead',
    bio: 'Develops lesson plans and learning materials. Anh works with native speakers to create authentic, practical learning content.',
    major: ' --- ',
  },
];

export default function About() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>About</h1>
        <p className={styles.subtitle}>
          Learn Vietnamese, celebrate culture, build community
        </p>
      </section>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            We're dedicated to promoting Vietnamese language and culture within the OSU community. Learning Vietnamese opens doors to understanding Vietnamese heritage, connecting with communities worldwide, and building meaningful cross-cultural relationships.
          </p>
        </div>

        <div className={styles.section}>
          <h2>What We Offer</h2>
          <ul className={styles.list}>
            <li>Language lessons for all levels</li>
            <li>Conversation practice and speaking sessions</li>
            <li>Cultural events and celebrations</li>
            <li>A welcoming community of language learners</li>
          </ul>
        </div>

      </div>

      <section className={styles.teamSection}>
        <h2>Meet Our Leadership</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`${styles.teamCard} ${expandedId === member.id ? styles.expanded : ''}`}
              onClick={() => toggleExpand(member.id)}
            >
              <div className={styles.avatar}>{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              {expandedId === member.id && (
                <p className={styles.bio}>{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
