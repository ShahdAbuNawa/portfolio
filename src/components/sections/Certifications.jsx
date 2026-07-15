import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { certifications } from '../../data/experience';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <section id="certifications">
      <Container>
        <SectionTitle eyebrow="// certifications" title="Certifications & Recognition" />
        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <GlassCard className={styles.card}>
                <Award size={20} color="var(--accent-glow)" />
                <div>
                  <h4 className={styles.title}>{cert.title}</h4>
                  <p className={styles.meta}>{cert.issuer} · {cert.date}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
