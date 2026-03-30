'use client';
import { useState } from 'react';
import styles from '@/styles/promo.module.scss';
import Image from 'next/image';

export default function Promo() {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleClose = () => {
    setHiding(true);
    setTimeout(() => setHidden(true), 800);
  };

  if (hidden) return null;

  return (
    <div className={`${styles.promo} ${hiding ? styles.hiding : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Image src="/flower.svg" alt="flower" width={127} height={127} loading="eager" priority />
          <p className={styles.text}>Приглашение на свадьбу</p>
          <h1 className={styles.title}>Виктор и Светлана</h1>
          <button className={styles.button} onClick={handleClose}>
            Открыть
          </button>
        </div>
      </div>
    </div>
  );
}
