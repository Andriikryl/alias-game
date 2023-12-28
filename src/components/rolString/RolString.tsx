import styles from "./style.module.css";

interface IRolString {
  string: string;
}

export default function RolString({ string }: IRolString) {
  return (
    <div className={styles.marquee}>
      <ul className={styles.marquee__content}>
        <li className={styles.marquee__item}> {string}</li>
        <li className={styles.marquee__item}> {string}</li>
        <li className={styles.marquee__item}> {string}</li>
      </ul>
      <ul className={styles.marquee__content} aria-hidden="true">
        <li className={styles.marquee__item}> {string}</li>
        <li className={styles.marquee__item}> {string}</li>
        <li className={styles.marquee__item}> {string}</li>
      </ul>
    </div>
  );
}
