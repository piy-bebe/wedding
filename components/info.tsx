import styles from '@/styles/info.module.scss';
import Schedule from './schedule';

export default function Info() {
  return (
    <div className={styles.info}>
      <Schedule />
    </div>
  );
}
