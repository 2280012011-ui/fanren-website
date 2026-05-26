import { useState, useEffect, useMemo } from 'react';
import styles from './Danmaku.module.css';

interface Comment {
  id: string; name: string; text: string;
}

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
      setPool(all);
    })();
    return () => { cancelled = true; };
  }, [enabled]);

  // Random layout per comment — recompute when pool changes
  const items = useMemo(() => {
    return pool.map((c, i) => ({
      ...c,
      top: 2 + (i / pool.length) * 92 + (Math.random() - 0.5) * 6,
      duration: 14 + Math.random() * 18,
      delay: -(Math.random() * 32),
      label: c.name !== '无名道友' ? `${c.name}：${c.text}` : c.text,
    }));
  }, [pool]);

  if (!enabled || items.length === 0) return null;

  return (
    <div className={styles.overlay}>
      {items.map((item) => (
        <div
          key={item.id}
          className={styles.item}
          style={{
            top: `${Math.max(1, Math.min(95, item.top))}%`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}
