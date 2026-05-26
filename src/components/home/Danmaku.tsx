import { useState, useEffect, useMemo } from 'react';
import styles from './Danmaku.module.css';

interface Comment {
  id: string; name: string; text: string;
}

const SLOT_COUNT = 18;

export default function Danmaku({ enabled }: { enabled: boolean }) {
  const [pool, setPool] = useState<Comment[]>([]);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    (async () => {
      const all: Comment[] = [];
      for (let page = 1; page <= 6; page++) {
        const res = await fetch(`/api/comments?page=${page}&pageSize=50&sort=time`);
        const data = await res.json();
        all.push(...(data.comments || []));
        if (page >= (data.totalPages || 1)) break;
      }
      if (cancelled) return;
      // Shuffle
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      setPool(all);
    })();
    return () => { cancelled = true; };
  }, [enabled]);

  // Stable random config per slot — computed once
  const slots = useMemo(() => {
    return Array.from({ length: SLOT_COUNT }, (_, i) => ({
      id: i,
      top: 3 + (i / SLOT_COUNT) * 88 + (Math.random() - 0.5) * 6,
      duration: 12 + Math.random() * 16,
      delay: -(Math.random() * 28),
    }));
  }, []);

  if (!enabled || pool.length === 0) return null;

  return (
    <div className={styles.overlay}>
      {slots.map((slot, i) => {
        const c = pool[i % pool.length];
        const label = c.name !== '无名道友' ? `${c.name}：${c.text}` : c.text;
        return (
          <div
            key={slot.id}
            className={styles.item}
            style={{
              top: `${Math.max(2, Math.min(93, slot.top))}%`,
              animationDuration: `${slot.duration}s`,
              animationDelay: `${slot.delay}s`,
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
}
