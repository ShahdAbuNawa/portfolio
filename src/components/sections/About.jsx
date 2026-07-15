import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import { profile, education } from '../../data/profile';
import styles from './About.module.css';

const cards = [
  {
    icon: Heart,
    title: 'Who I Am',
    text: "A frontend developer who cares about the details most people scroll past — spacing, state, and the moment an interface just clicks.",
  },
  {
    icon: Target,
    title: 'What I Specialize In',
    text: 'React architecture, data-heavy dashboards, and multilingual, RTL-aware interfaces that hold up as products grow.',
  },
  {
    icon: GraduationCap,
    title: 'Career Goals',
    text: profile.goals,
  },
];

export default function About() {
  return (
    <section id="about">
      <Container>
        <SectionTitle
          eyebrow="// about_me"
          title="Building interfaces for systems people actually trust"
          description={profile.summary}
        />

        <div className={styles.grid}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className={styles.card}>
                <c.icon size={22} color="var(--accent-glow)" />
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <GlassCard className={styles.eduCard}>
            <div>
              <span className="eyebrow">education</span>
              <h3 className={styles.eduDegree}>{education.degree}</h3>
              <p className={styles.eduSchool}>{education.school} · {education.date}</p>
              {education.honors && <p className={styles.eduHonors}>{education.honors}</p>}
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}
