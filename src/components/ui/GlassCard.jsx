import styles from './GlassCard.module.css';

export default function GlassCard({ children, hoverable = true, className = '', style, ...rest }) {
  return (
    <div
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
