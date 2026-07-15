import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <Container>
        <SectionTitle
          eyebrow="// testimonials"
          title="What people say"
          description="Placeholder cards — swap in real quotes from mentors, professors, or teammates."
        />
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className={styles.card}>
                <Quote size={22} color="var(--accent-glow)" style={{ opacity: 0.6 }} />
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.person}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
