import styles from '@/styles/address.module.scss';

export default function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.container}>
        <h2 className={styles.title}>Дорогие гости!</h2>
        <p className={styles.text}>
          Мы хотим разделить с вами самый важный день в нашей жизни и приглашаем вас на нашу свадьбу.Мы с
          нетерпением ждём возможности увидеть вас и вместе отпраздновать начало нашего совместного пути.
        </p>
        <p className={styles.love}>С любовью, Виктор и Света</p>
      </div>
    </div>
  );
}
