import { motion } from 'framer-motion';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { skillGroups } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills">
      <Container>
        <SectionTitle
          eyebrow="// skills"
          title="Tools I reach for"
          description="A working toolkit spanning frontend architecture, backend fundamentals, and the data + visualization layer that ties dashboards together."
        />

        <div className={styles.grid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <GlassCard className={styles.card}>
                <h3 className={styles.category}>{group.category}</h3>
                {group.items.map((item, i) => (
                  <SkillCard key={item.name} name={item.name} level={item.level} delay={i * 0.05} />
                ))}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
