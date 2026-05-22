import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface Props {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'ink' | 'text' | 'done'>('ink');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 800);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.inkDrop}>
        <div className={`${styles.drop} ${phase !== 'ink' ? styles.expanded : ''}`} />
        <h1
          className={styles.title}
          style={{
            opacity: phase === 'text' ? 1 : 0,
            transition: 'opacity 0.8s ease-out',
          }}
        >
          <span className={styles.mainTitle}>凡人修仙传</span>
          <span className={styles.subTitle}>人界篇</span>
        </h1>
      </div>
    </div>
  );
}
