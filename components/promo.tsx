'use client';
import { useState } from 'react';
import styles from '@/styles/promo.module.scss';
import Image from 'next/image';

interface PromoProps {
  handleClose: () => void;
  hiding: boolean;
}

export default function Promo({ handleClose, hiding }: PromoProps) {
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
