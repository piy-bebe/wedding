'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/address.module.scss';

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

export default function Address() {
  return (
    <div className={styles.address}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 className={styles.title} variants={childVariants}>
          Дорогие гости!
        </motion.h2>
        <motion.p className={styles.text} variants={childVariants}>
          Мы хотим разделить с вами самый важный день в нашей жизни и приглашаем вас на нашу свадьбу. Мы с
          нетерпением ждём возможности увидеть вас и вместе отпраздновать начало нашего совместного пути.
        </motion.p>
        <motion.p className={styles.love} variants={childVariants}>
          С любовью, Виктор и Светлана
        </motion.p>
      </motion.div>
    </div>
  );
}
