'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/dresscode.module.scss';

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
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className={styles.color} variants={childVariants} />
          ))}
        </motion.div>
      </motion.div>

      {[
        {
          subtitle: '— девушки',
          desc: 'Вечерние платья, костюмы, юбки, блузки. Приветствуются аксессуары в палитре торжества.',
        },
        {
          subtitle: '— мужчины',
          desc: 'Рубашка / футболка, брюки и пиджак. Лоферы, мокасины или белые кроссовки.',
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={styles.container}
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-75px' }}
        >
          <motion.h3 className={styles.subtitle} variants={childVariants}>
            {item.subtitle}
          </motion.h3>
          <motion.p className={styles.description} variants={childVariants}>
            {item.desc}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
