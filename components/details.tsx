import styles from '@/styles/details.module.scss';

export default function Details() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Детали</h2>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— подарки</h3>
        <p className={styles.description}>
          Ваши улыбки и смех подарят нам незабываемое счастье в этот день, а пожелания в конвертах помогут
          осуществить наши мечты!
        </p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— цветы</h3>
        <p className={styles.description}>
          Приятным комплиментом для нас вместо цветов будет бутылочка вашего любимого вина, которую мы откроем на
          ближайшем совместном празднике.
        </p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.subtitle}>— небольшая просьба</h3>
        <p className={styles.description}>
          Будем благодарны, если вы воздержитесь от криков «Горько» на празднике, ведь поцелуй — это знак выражения
          чувств, он не может быть по заказу.
        </p>
      </div>
    </div>
  );
}
