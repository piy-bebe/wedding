import styles from '@/styles/footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>Контакты</h2>
      <p className={styles.text}>
        В случае возникновения вопросов в день торжества, обращайтесь к нашему свадебному организатору{' '}
      </p>
      <p className={styles.phone}>+7 (123) 431-44-12</p>
      <h2 className={styles.title}>До встречи!</h2>
      <Image className={styles.image} src="/footer.svg" alt="footer" width={104} height={118} priority />
    </footer>
  );
}
