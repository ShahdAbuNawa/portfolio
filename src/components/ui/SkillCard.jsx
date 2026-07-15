import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';

export default function SkillCard({ name, level, delay = 0 }) {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
        <span className={styles.name}>{name}</span>
        <span className={styles.level}>{level}%</span>
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
