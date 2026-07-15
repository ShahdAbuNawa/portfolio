import { motion } from 'framer-motion';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { Tag } from '../ui/Badge';
import { education } from '../../data/profile';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education">
      <Container>
        <SectionTitle eyebrow="// education" title="Academic background" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className={styles.card}>
            <div className={styles.top}>
              <div>
                <h3 className={styles.degree}>{education.degree}</h3>
                <p className={styles.school}>{education.school}</p>
              </div>
              <span className={styles.date}>{education.date}</span>
            </div>
            {education.honors && <p className={styles.honors}>{education.honors}</p>}

            <h4 className={styles.courseHead}>Relevant Coursework</h4>
            <div className={styles.courseRow}>
              {education.coursework.map((c) => <Tag key={c}>{c}</Tag>)}
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
