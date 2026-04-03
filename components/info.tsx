import styles from '@/styles/info.module.scss';
import Schedule from './schedule';
import Details from './details';

export default function Info() {
  return (
    <div className={styles.info}>
      <Schedule />
      <Details />
    </div>
  );
}
