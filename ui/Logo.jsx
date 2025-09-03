import styles from "../styles/logo.module.css";

export default function Logo(){
  return (
    <div className={`${styles.wrap} ${styles.jitter} select-none`}>
      {/* overspray backdrop */}
      <i className={styles.overspray} aria-hidden />
      {/* text */}
      <span className={`${styles.cyan} text-3xl`}>dub</span>
      <span className={`${styles.pink} text-4xl`}>U</span>
      <span className={`${styles.cyan} text-3xl`}>lar</span>
      {/* tiny drips */}
      <i className={`${styles.drip} ${styles.d1}`} aria-hidden />
      <i className={`${styles.drip} ${styles.d2}`} aria-hidden />
      <i className={`${styles.drip} ${styles.d3}`} aria-hidden />
    </div>
  );
}
