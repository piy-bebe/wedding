'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/intro.module.scss';

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  });

  if (!visible) return null;

  return <div className={styles.intro} />;
}
