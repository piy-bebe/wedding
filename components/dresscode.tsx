'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
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

const images = [1, 2, 3, 4, 5, 6, 7];

export default function DressCode() {
  const constraintsRef = useRef<HTMLDivElement>(null);

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: easing }}
        className={styles.sliderWrapper}
        ref={constraintsRef}
      >
        <motion.div
          className={styles.containerImg}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{ bounceDamping: 30, bounceStiffness: 300 }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {images.map((n) => (
            <div key={n} className={styles.imageWrapper}>
              <Image
                alt="img"
                src={`/dresscode/image${n}.JPG`}
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
                quality={75}
                priority
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.dresscode}
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-75px' }}
      >
        {[
          {
            subtitle: '— Мужчины',
            desc: 'Нижняя часть должна быть черного цвета. Верхняя часть белого цвета',
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
