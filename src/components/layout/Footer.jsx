import Container from '../ui/Container';
import SocialIcons from '../ui/SocialIcons';
import { profile } from '../../data/profile';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.text}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <SocialIcons size={16} />
          <p className={styles.built}>// built with React &amp; Framer Motion</p>
        </div>
      </Container>
    </footer>
  );
}
