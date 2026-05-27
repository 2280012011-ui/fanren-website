import { useEffect, useRef, useState } from 'react';
import styles from './InkText.module.css';

interface Props {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
}

export default function InkText({ text, as: Tag = 'h1', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.container} ${className}`}>
      <Tag
        className={styles.text}
        style={{
          clipPath: visible ? 'circle(100% at 50% 50%)' : 'circle(0% at 50% 50%)',
          filter: visible ? 'blur(0)' : 'blur(6px)',
          opacity: visible ? 1 : 0,
          transition: 'clip-path 1s ease-out, filter 1s ease-out, opacity 0.6s ease-out',
        }}
      >
        {text}
      </Tag>
    </div>
  );
}
