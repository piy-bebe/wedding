'use client';
import styles from '@/styles/hero.module.scss';
import Image from 'next/image';

export default function Promo() {
  return (
    <div className={styles.hero}>
      <div className={styles.frame}>
        <div className={styles.frame__inner}>
          <div className={styles.imageWelcome}>
            <Image className={styles.image} src="/welcome.svg" alt="welcome" fill priority />
          </div>
          <div className={styles.imageBow}>
            <Image className={styles.image} src="/bow.svg" alt="bow" fill priority />
          </div>
          <h1 className={styles.title}>wedding</h1>
          <p className={styles.description}>
            Судьбой нам было предначертано встретить друг друга и обрести своё счастье, которым спешим с вами
            поделиться!
          </p>
          <p className={styles.time}>08.08.2026</p>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
}
