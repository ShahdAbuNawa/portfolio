import styles from './Badge.module.css';

export function Badge({ children }) {
  return <span className={styles.badge}>{children}</span>;
}

export function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}
