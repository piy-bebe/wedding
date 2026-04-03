import styles from '@/styles/info.module.scss';
import Schedule from './schedule';
import Details from './details';
import Location from './location';

export default function Info() {
  return (
    <div className={styles.info}>
      <Schedule />
      <Location />
      <Details />
    </div>
  );
}
