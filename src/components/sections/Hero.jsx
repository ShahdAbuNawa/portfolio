import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, FolderGit2, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import SocialIcons from '../ui/SocialIcons';
import { profile } from '../../data/profile';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import styles from './Hero.module.css';

function useTypedRoles(roles) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 40 : 80;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const typed = useTypedRoles(profile.roles);

  const initials = profile.name.split(' ').map((n) => n[0]).join('');

  return (
    <section id="home" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div>
            <motion.div
              className={styles.eyebrowRow}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">{profile.location} · {profile.remote}</span>
            </motion.div>

            <motion.h1
              className={styles.name}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              {profile.name}
            </motion.h1>

            <div className={styles.roleLine} aria-live="polite">
              {typed}
              <span className={styles.cursor} aria-hidden="true" />
            </div>

            <motion.p
              className={styles.intro}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className={styles.ctaRow}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button as="a" href="/resume.pdf" download icon={Download}>Download Resume</Button>
              <Button variant="secondary" as="a" href="#contact" icon={Mail}
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Contact Me
              </Button>
              <Button variant="ghost" as="a" href="#projects" icon={FolderGit2}
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects
              </Button>
            </motion.div>

            <motion.div
              className={styles.socialRow}
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <SocialIcons />
            </motion.div>
          </div>

          <motion.div
            className={styles.portraitWrap}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div
              className={styles.orbit}
              style={{ inset: -40, animation: reducedMotion ? 'none' : 'spin 26s linear infinite' }}
            />
            <div
              className={styles.orbit}
              style={{ inset: -64, animation: reducedMotion ? 'none' : 'spin 40s linear infinite reverse' }}
            />
            <div className={styles.ring} />
            <div className={styles.portrait}>
              {/* Professional photo placeholder — replace src below with a real headshot */}
              <span className={styles.portraitInitial}>{initials}</span>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className={styles.scrollHint}>
        <span>SCROLL</span>
        <ChevronDown size={16} />
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
