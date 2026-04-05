'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/dresscode.module.scss';
import Image from 'next/image';

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
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

const images = [1, 2, 3, 4, 5, 6, 7];

export default function DressCode() {
  return (
    <div>
      <motion.div
        className={styles.dresscode}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h2 className={styles.title} variants={childVariants}>
          Дресс-код
        </motion.h2>
        <motion.p className={styles.text} variants={childVariants}>
          Нам будет очень приятно, если вы учтёте наши пожелания и при выборе одежды предпочтете вечерние наряды в
          представленной ниже гамме:
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.containerImg}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {images.map((n) => (
          <motion.div key={n} variants={childVariants}>
            <Image
              alt="img"
              src={`/dresscode/${n}.JPG`}
              width={200}
              height={200}
              style={{ objectFit: 'cover' }}
              quality={75}
              priority
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
