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

const blockVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

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
        <motion.div className={styles.colors} variants={containerVariants}>
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} className={`${styles.color} ${styles.color}${i}`} variants={childVariants} />
          ))}
        </motion.div>
      </motion.div>
      <div className={styles.containerImg}>
        <Image
          alt="img"
          src="/dresscode/1.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/2.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/3.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/4.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/5.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/6.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
        <Image
          alt="img"
          src="/dresscode/7.JPG"
          width={200}
          height={200}
          style={{ objectFit: 'cover' }}
          quality={75}
          priority
        />
      </div>
    </div>
  );
}
