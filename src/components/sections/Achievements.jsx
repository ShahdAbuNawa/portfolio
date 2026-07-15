import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/experience';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements">
      <Container>
        <SectionTitle eyebrow="// achievements" title="Competitions & recognition" />
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className={styles.card}>
                <Trophy size={22} color="var(--accent-glow)" />
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.desc}>{a.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
