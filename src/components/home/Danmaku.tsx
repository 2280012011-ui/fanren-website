import { useState, useEffect, useRef, useMemo } from 'react';
import styles from './Danmaku.module.css';

interface Comment {
  id: string; name: string; text: string;
}

const VISIBLE_COUNT = 10;
const ROTATE_INTERVAL = 8000;

export default function Danmaku({ enabled }: { enabled: boolean }) {
  const [pool, setPool] = useState<Comment[]>([]);
  const [startIdx, setStartIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;

    (async () => {
      // Fetch page 1 first, show immediately
      const first = await fetch('/api/comments?page=1&pageSize=50&sort=time').then(r => r.json());
      if (cancelled) return;
      const totalPages: number = first.totalPages || 1;
      let all: Comment[] = [...(first.comments || [])];
      setPool([...all]);

      // Fetch remaining pages in background
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

  useEffect(() => {
    if (!enabled || pool.length === 0) return;
    timerRef.current = setInterval(() => {
      setStartIdx(prev => (prev + VISIBLE_COUNT) % pool.length);
    }, ROTATE_INTERVAL);
    return () => { if (timerRef.current !== null) clearInterval(timerRef.current); };
  }, [enabled, pool.length]);

  const visible = useMemo(() => {
    const slice: Comment[] = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      slice.push(pool[(startIdx + i) % pool.length]);
    }
    return slice;
  }, [pool, startIdx]);

  const slots = useMemo(() => {
    return Array.from({ length: VISIBLE_COUNT }, (_, i) => ({
      id: i,
      top: 5 + (i / VISIBLE_COUNT) * 85 + (Math.random() - 0.5) * 8,
      duration: 16 + Math.random() * 20,
      delay: -(Math.random() * 36),
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
              top: `${Math.max(2, Math.min(95, slot.top))}%`,
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
