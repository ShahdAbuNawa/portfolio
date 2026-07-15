import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../constants/nav';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Container>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} onClick={(e) => { e.preventDefault(); handleNav('home'); }}>
            Shahd<span>.</span>
          </a>

          <nav className={styles.links} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${active === link.id ? styles.linkActive : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className="desktopOnly">
              <Button variant="secondary" as="a" href="/resume.pdf" download icon={Download}>
                Resume
              </Button>
            </div>
            <button
              className={styles.menuBtn}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className={styles.mobilePanel} role="dialog" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={styles.mobileLink}
              onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
