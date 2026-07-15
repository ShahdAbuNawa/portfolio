import { Linkedin, Github, Mail, Globe } from 'lucide-react';
import { profile } from '../../data/profile';
import styles from './SocialIcons.module.css';

const icons = [
  { Icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
  { Icon: Github, href: profile.links.github, label: 'GitHub' },
  { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { Icon: Globe, href: profile.links.portfolio, label: 'Portfolio' },
];

export default function SocialIcons({ size = 18 }) {
  return (
    <div className={styles.row}>
      {icons.map(({ Icon, href, label }) => (
        <a key={label} href={href} aria-label={label} className={styles.icon} target="_blank" rel="noreferrer">
          <Icon size={size} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
