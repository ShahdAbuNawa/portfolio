import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import Container from '../ui/Container';
import GlassCard from '../ui/GlassCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { profile } from '../../data/profile';
import styles from './Contact.module.css';

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn Profile', href: profile.links.linkedin },
  { icon: Github, label: 'GitHub Profile', href: profile.links.github },
  { icon: MapPin, label: `${profile.location} `, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact">
      <Container>
        <SectionTitle
          eyebrow="// contact"
          title="Let's build something"
          description="Open to frontend and full-stack roles, remote or on-site. Reach out and I'll get back to you."
        />

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            {contactLinks.map(({ icon: Icon, label, href }) => {
              const content = (
                <>
                  <span className={styles.iconWrap}><Icon size={18} /></span>
                  <span>{label}</span>
                </>
              );
              return href ? (
                <a key={label} href={href} className={styles.infoRow} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label} className={styles.infoRow}>{content}</div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className={styles.formCard}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about the role or project..." />
                </div>
                <Button type="submit" icon={Send}>Send Message</Button>
                {sent && <p className={styles.sentNote}>Opening your email client…</p>}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
