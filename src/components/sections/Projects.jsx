import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import GlassCard from '../ui/GlassCard';
import { Tag } from '../ui/Badge';
import { featuredProjects, additionalProjects } from '../../data/projects';
import styles from './Projects.module.css';

const FILTERS = ['All', 'Graduation Project', 'Team Project', 'Hackathon'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(() => {
    if (filter === 'All') return featuredProjects;
    return featuredProjects.filter((p) => p.tag === filter);
  }, [filter]);

  return (
    <section id="projects">
      <Container>
        <SectionTitle
          eyebrow="// featured_projects"
          title="Things I've built"
          description="From an AI-powered SaaS graduation platform to a national hackathon finalist — a look at the projects that shaped how I build."
        />

        <div className={styles.filters} role="group" aria-label="Filter projects by type">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className={styles.moreHead}>
          <h3>Additional Projects</h3>
        </div>
        <div className={styles.moreGrid}>
          {additionalProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <GlassCard className={styles.moreCard}>
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <div className={styles.moreTechRow}>
                  {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className={styles.moreActions}>
                  {p.links?.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub`}>
                      <Github size={16} />
                    </a>
                  )}
                  {p.links?.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} demo`}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
