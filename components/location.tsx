import styles from '@/styles/location.module.scss';
import Image from 'next/image';

export default function Location() {
  return (
    <div className={styles.border}>
      <div className={styles.innerBorder}>
        <div className={styles.container}>
          <h2 className={styles.title}>Локация</h2>
          <p className={styles.text}>Наш праздник пройдет на площадке:</p>
          <h3 className={styles.subtitle}>The sun - veranda</h3>
          <p className={styles.text}>г. Солнечногорск, Тимоновское ш., 36</p>
          <Image
            className={styles.image}
            src="/location.jpg"
            alt="Место проведения свадьбы"
            width={474}
            height={318}
            priority
          />
          <p className={styles.text}>
            Ниже вы найдете карту, она поможет вам быстрее найти место торжества и добраться вовремя
          </p>
          <button className={styles.button}>Открыть карту</button>
        </div>
      </div>
    </div>
  );
}
