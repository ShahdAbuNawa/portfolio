import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  icon: Icon,
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = `${styles.btn} ${styles[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
        {Icon && <Icon size={16} strokeWidth={2} />}
      </a>
    );
  }

  return (
    <Tag className={cls} {...rest}>
      {children}
      {Icon && <Icon size={16} strokeWidth={2} />}
    </Tag>
  );
}
