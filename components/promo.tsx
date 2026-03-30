import styles from '@/styles/promo.module.scss';
import Image from 'next/image';

export default function Promo() {
  return (
    <div className={styles.promo}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Image src="/flower.svg" alt="flower" width={127} height={127} loading="eager" priority />
          <p className={styles.text}>Приглашение на свадьбу</p>
          <h1 className={styles.title}>Виктор и Светлана</h1>
          <button className={styles.button}>Открыть</button>
        </div>
      </div>
    </div>
  );
}
