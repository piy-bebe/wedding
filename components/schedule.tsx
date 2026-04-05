'use client';
import { motion } from 'framer-motion';
import styles from '@/styles/schedule.module.scss';

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

export default function Schedule() {
  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.title}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Программа дня
      </motion.h2>

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-75px' }}
      >
        {[
          {
            time: '— 16:00 Сбор гостей',
            desc: 'Время пролетит незаметно за игристым и общением с другими гостями',
          },
          { time: '— 16:30 Церемония', desc: 'Проживите этот важный момент вместе с нами' },
          { time: '— 17:00 Банкет', desc: 'Время трогательных поздравлений, душевных разговоров и вкусной еды' },
          { time: '— 22:00 Завершение', desc: 'К сожалению, даже такой прекрасный вечер может закончиться' },
        ].map((item, i) => (
          <motion.div key={i} className={styles.block} variants={blockVariants}>
            <motion.h3 className={styles.subtitle} variants={childVariants}>
              {item.time}
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
