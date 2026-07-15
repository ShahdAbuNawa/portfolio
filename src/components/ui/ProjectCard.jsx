import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileText, ChevronDown } from 'lucide-react';
import GlassCard from './GlassCard';
import { Tag } from './Badge';
import styles from './ProjectCard.module.css';
import detailStyles from './ProjectDetail.module.css';

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const hasDetail = Boolean(project.architecture || project.features);

  return (
    <GlassCard className={styles.card} hoverable={!open}>
      <div className={styles.media}>
        <span className={styles.tagPill}>{project.tag}</span>
        <span className={styles.mediaLabel}>{project.name}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{project.name}</h3>
          <span className={styles.year}>{project.year}</span>
        </div>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.desc}>{project.description}</p>

        <div className={styles.techRow}>
          {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className={styles.actions}>
          {project.links?.github && (
            <a href={project.links.github} className={detailStyles.iconLink} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`}>
              <Github size={15} /> GitHub
            </a>
          )}
          {project.links?.demo && (
            <a href={project.links.demo} className={detailStyles.iconLink} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {hasDetail && (
            <button className={detailStyles.iconLink} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
              <FileText size={15} /> Case Study
              <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ display: 'inline-flex' }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && hasDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className={detailStyles.detail}>
              {project.problem && (
                <div className={detailStyles.block}>
                  <h4>Problem</h4>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.myContribution && (
                <div className={detailStyles.block}>
                  <h4>My Contribution</h4>
                  <p>{project.myContribution}</p>
                </div>
              )}
              {project.architecture && (
                <div className={detailStyles.block}>
                  <h4>Architecture</h4>
                  <ul>{project.architecture.map((a) => <li key={a}>{a}</li>)}</ul>
                </div>
              )}
              {project.features && (
                <div className={detailStyles.block}>
                  <h4>Frontend Features</h4>
                  <div className={detailStyles.featureGrid}>
                    {project.features.map((f) => (
                      <div key={f.label} className={detailStyles.feature}>
                        <span className={detailStyles.featureLabel}>{f.label}</span>
                        <span className={detailStyles.featureDetail}>{f.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.result && (
                <div className={detailStyles.block}>
                  <h4>Result</h4>
                  <p>{project.result}</p>
                </div>
              )}
              {project.lessonsLearned && (
                <div className={detailStyles.block}>
                  <h4>Lessons Learned</h4>
                  <p>{project.lessonsLearned}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
