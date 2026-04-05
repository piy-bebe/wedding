'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/timer.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const WEDDING_DATE = new Date('2026-08-08T16:00:00');
const easing = [0.25, 0.46, 0.45, 0.94] as const;

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
};

const blockVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easing },
  },
};

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return <div>Это уже сегодня! 🎉</div>;

  const units = [
    { value: timeLeft.days, label: 'день' },
    { value: timeLeft.hours, label: 'час' },
    { value: timeLeft.minutes, label: 'минут' },
    { value: timeLeft.seconds, label: 'секунд' },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageWrap}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image alt="img" src="/love.jpg" fill style={{ objectFit: 'cover', objectPosition: 'bottom' }} priority />
      </motion.div>
      <motion.h2
        className={styles.title}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        До свадьбы осталось:
      </motion.h2>

      <motion.div
        className={styles.block}
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {units.map((unit, i) => (
          <motion.div key={i} className={styles.column} variants={columnVariants}>
            <p className={styles.time}>{unit.value}</p>
            <p className={styles.text}>{unit.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
