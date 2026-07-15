import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <motion.div
          style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow" style={{ justifyContent: 'center' }}>// error_404</span>
          <h1 style={{ fontSize: 'var(--fs-5xl)', margin: '18px 0', color: 'var(--accent-glow)' }}>404</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>
            This route doesn't exist — not even in the codebase.
          </p>
          <Link to="/" style={{ display: 'inline-block' }}>
            <Button icon={Home}>Back to Home</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
