import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import styles from './Danmaku.module.css';

interface Comment {
  id: string; name: string; text: string;
}

const VISIBLE_COUNT = 10;

export default function Danmaku({ enabled }: { enabled: boolean }) {
  const [pool, setPool] = useState<Comment[]>([]);
  const [visible, setVisible] = useState<Comment[]>([]);
  const nextIdx = useRef(0);

  // Fetch comments: show page 1 immediately, then backfill
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;

    (async () => {
      const first = await fetch('/api/comments?page=1&pageSize=50&sort=time').then(r => r.json());
      if (cancelled) return;
      const totalPages: number = first.totalPages || 1;
      let all: Comment[] = [...(first.comments || [])];

      // Shuffle first batch
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      setPool(all);
      setVisible(all.slice(0, VISIBLE_COUNT));
      nextIdx.current = VISIBLE_COUNT;

      // Fetch the rest in background
      for (let page = 2; page <= totalPages; page++) {
        const res = await fetch(`/api/comments?page=${page}&pageSize=50&sort=time`);
        const data = await res.json();
        if (cancelled) return;
        all = all.concat(data.comments || []);
      }

      if (cancelled) return;
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      setPool(all);
    })();

    return () => { cancelled = true; };
  }, [enabled]);

  // Replace one comment when it finishes scrolling across
  const replaceOne = useCallback((idx: number) => {
    setVisible(prev => {
      const next = [...prev];
      next[idx] = pool[nextIdx.current % pool.length];
      nextIdx.current++;
      return next;
    });
  }, [pool]);

  // Stable layout per slot
  const slots = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => ({
      id: i,
      top: 5 + (i / VISIBLE_COUNT) * 85 + (Math.random() - 0.5) * 8,
      duration: 12 + Math.random() * 16,
      delay: -(Math.random() * 28),
    }));
  }, []);

  if (!enabled || visible.length === 0) return null;

  return (
    <div className={styles.overlay}>
      {visible.map((c, i) => {
        const slot = slots[i];
        return (
          <div
            key={slot.id}
            className={styles.item}
            style={{
              top: `${Math.max(2, Math.min(95, slot.top))}%`,
              animationDuration: `${slot.duration}s`,
              animationDelay: `${slot.delay}s`,
            }}
            onAnimationIteration={() => replaceOne(i)}
          >
            {c.name !== '无名道友' ? `${c.name}：${c.text}` : c.text}
          </div>
        );
      })}
    </div>
  );
}
