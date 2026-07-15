import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: '1px solid var(--border-strong)',
        background: 'rgba(18, 58, 115, 0.6)',
        backdropFilter: 'blur(10px)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 150,
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
