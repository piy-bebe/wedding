import styles from '@/styles/dresscode.module.scss';
export default function DressCode() {
  return (
    <div>
      <div className={styles.dresscode}>
        <h2 className={styles.title}>Дресс-код</h2>
        <p className={styles.text}>
          Нам будет очень приятно, если вы учтёте наши пожелания и при выборе одежды предпочтете вечерние наряды в
          представленной ниже гамме:
        </p>
        <div className={styles.colors}>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
        </div>
      </div>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>— девушки</h3>
        <p className={styles.description}>
          Вечерние платья, костюмы, юбки, блузки. Приветствуются аксессуары в палитре торжества.
        </p>
      </div>
      <div className={styles.container}>
        <h3 className={styles.subtitle}>— мужчины</h3>
        <p className={styles.description}>
          Рубашка / футболка, брюки и пиджак. Лоферы, мокасины или белые кроссовки.
        </p>
      </div>
    </div>
  );
}
