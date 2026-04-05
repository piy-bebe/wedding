'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/details.module.scss';

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const blockVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing },
  },
};

export default function Details() {
  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Детали
      </motion.h2>

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-75px' }}
      >
        {[
          {
            subtitle: '— подарки',
            desc: 'Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут осуществить наши мечты!',
          },
          {
            subtitle: '— небольшая просьба',
            desc: 'Будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй — это знак выражения чувств, он не может быть по заказу.',
          },
        ].map((item, i) => (
          <motion.div key={i} className={styles.block} variants={blockVariants}>
            <motion.h3 className={styles.subtitle} variants={childVariants}>
              {item.subtitle}
            </motion.h3>
            <motion.p className={styles.description} variants={childVariants}>
              {item.desc}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
