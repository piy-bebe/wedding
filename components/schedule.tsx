import styles from '@/styles/schedule.module.scss';

export default function Schedule() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Программа дня</h2>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— 16:00 Сбор гостей</h3>
        <p className={styles.description}>Время пролетит незаметно за игристым и общением с другими гостями</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— 16:30 Церемония</h3>
        <p className={styles.description}>Проживите этот важный момент вместе с нами</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— 17:00 банкет</h3>
        <p className={styles.description}>Время трогательных поздравлений, душевных разговоров и вкусной еды</p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— 22:00 завершение</h3>
        <p className={styles.description}>К сожалению, даже такой прекрасный вечер может закончиться</p>
      </div>
    </div>
  );
}
