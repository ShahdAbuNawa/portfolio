import { motion } from 'framer-motion';
import { Tag } from './Badge';
import styles from './Timeline.module.css';

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, i) => (
        <motion.div
          key={item.role}
          className={styles.item}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <span className={styles.dot} />
          <div className={styles.header}>
            <div>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.company}>{item.company}</p>
            </div>
            <span className={styles.date}>{item.date}</span>
          </div>

          {item.tech?.length > 0 && (
            <div className={styles.techRow}>
              {item.tech.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          )}

          <ul className={styles.list}>
            {item.achievements.map((a) => <li key={a} className={styles.listItem}>{a}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
