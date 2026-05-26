import { useState, useEffect, useRef, useMemo } from 'react';
import styles from './Danmaku.module.css';

interface Comment {
  id: string; name: string; text: string;
}

const VISIBLE_COUNT = 25;
const ROTATE_INTERVAL = 8000; // ms between rotations

export default function Danmaku({ enabled }: { enabled: boolean }) {
  const [pool, setPool] = useState<Comment[]>([]);
  const [startIdx, setStartIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    (async () => {
      const all: Comment[] = [];
      let page = 1;
      while (true) {
        const res = await fetch(`/api/comments?page=${page}&pageSize=50&sort=time`);
        const data = await res.json();
        all.push(...(data.comments || []));
        if (page >= (data.totalPages || 1)) break;
        page++;
      }
      if (cancelled) return;
      // Shuffle so each batch mixes different eras
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      setPool(all);
    })();
    return () => { cancelled = true; };
  }, [enabled]);

  // Rotate the visible window periodically
  useEffect(() => {
    if (!enabled || pool.length === 0) return;
    timerRef.current = setInterval(() => {
      setStartIdx(prev => (prev + VISIBLE_COUNT) % pool.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [enabled, pool.length]);

  // Pick current visible window
  const visible = useMemo(() => {
    const slice: Comment[] = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      slice.push(pool[(startIdx + i) % pool.length]);
    }
    return slice;
  }, [pool, startIdx]);

  // Stable random layout per visible slot
  const slots = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => ({
      id: i,
      top: 2 + (i / VISIBLE_COUNT) * 92 + (Math.random() - 0.5) * 6,
      duration: 14 + Math.random() * 18,
      delay: -(Math.random() * 32),
    }));
  }, []);

  if (!enabled || pool.length === 0) return null;

  return (
    <div className={styles.overlay}>
      {visible.map((c, i) => {
        const slot = slots[i];
        return (
          <div
            key={slot.id}
            className={styles.item}
            style={{
              top: `${Math.max(1, Math.min(95, slot.top))}%`,
              animationDuration: `${slot.duration}s`,
              animationDelay: `${slot.delay}s`,
            }}
          >
            {c.name !== '无名道友' ? `${c.name}：${c.text}` : c.text}
          </div>
        );
      })}
    </div>
  );
}
