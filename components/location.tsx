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
            The sun - veranda
          </motion.h3>
          <motion.p className={styles.text} variants={childVariants}>
            г. Солнечногорск, Тимоновское ш., 36
          </motion.p>
          <motion.div variants={childVariants}>
            <Image
              className={styles.image}
              src="/location.jpg"
              alt="Место проведения свадьбы"
              width={474}
              height={318}
              priority
            />
          </motion.div>
          <motion.p className={styles.text} variants={childVariants}>
            Ниже вы найдете карту, она поможет вам быстрее найти место торжества и добраться вовремя
          </motion.p>
          <motion.button className={styles.button} variants={childVariants}>
            Открыть карту
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
