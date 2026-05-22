import { useEffect, useState } from 'react';
import styles from './VermillionSeal.module.css';

interface Props {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function VermillionSeal({ text, className = '', size = 'md' }: Props) {
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStamped(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const sizeMap = { sm: 48, md: 64, lg: 80 };

  return (
    <div
      className={`${styles.seal} ${styles[`size-${size}`]} ${stamped ? styles.stamped : ''} ${className}`}
      style={{ width: sizeMap[size], height: sizeMap[size] }}
    >
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="4"
          fill="none"
          stroke="var(--vermillion)"
          strokeWidth="3"
        />
        <rect
          x="14"
          y="14"
          width="72"
          height="72"
          rx="2"
          fill="none"
          stroke="var(--vermillion)"
          strokeWidth="1"
        />
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="var(--vermillion)"
          fontFamily="var(--font-display)"
          fontSize="16"
          letterSpacing="0.3em"
        >
          {text.length > 4 ? text.slice(0, 4) : text}
        </text>
      </svg>
    </div>
  );
}
