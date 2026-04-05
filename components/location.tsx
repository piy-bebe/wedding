'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/location.module.scss';
import Image from 'next/image';

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export default function Location() {
  return (
    <div className={styles.border}>
      <div className={styles.innerBorder}>
        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-75px' }}
        >
          <motion.h2 className={styles.title} variants={childVariants}>
            Локация
          </motion.h2>
          <motion.p className={styles.text} variants={childVariants}>
            Наш праздник пройдет на площадке:
          </motion.p>
          <motion.h3 className={styles.subtitle} variants={childVariants}>
            Посейдон
          </motion.h3>
          <motion.p className={styles.text} variants={childVariants}>
            Ул. Загорьевская 13
          </motion.p>
          <motion.div variants={childVariants}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?pt=37.687620,55.580468&z=16&l=map"
              width="474"
              height="318"
              className={styles.image}
              allowFullScreen
            />
          </motion.div>
          <motion.p className={styles.text} variants={childVariants}>
            Ниже вы найдете карту, она поможет вам быстрее найти место торжества и добраться вовремя
          </motion.p>
          <motion.a
            href="https://yandex.ru/map-widget/v1/?pt=37.687620,55.580468&z=16&l=map"
            target="_blank"
            className={styles.button}
            variants={childVariants}
          >
            Открыть карту
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
