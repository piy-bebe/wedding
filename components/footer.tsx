'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/footer.module.scss';
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

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-75px' }}
    >
      <motion.h2 className={styles.title} variants={childVariants}>
        Контакты
      </motion.h2>
      <motion.p className={styles.text} variants={childVariants}>
        В случае возникновения вопросов в день торжества, обращайтесь к нашему свадебному организатору{' '}
      </motion.p>
      <motion.p className={styles.phone} variants={childVariants}>
        +7 (123) 431-44-12
      </motion.p>
      <motion.h2 className={styles.title} variants={childVariants}>
        До встречи!
      </motion.h2>
      <motion.div variants={childVariants}>
        <Image className={styles.image} src="/footer.svg" alt="footer" width={104} height={118} priority />
      </motion.div>
    </motion.footer>
  );
}
