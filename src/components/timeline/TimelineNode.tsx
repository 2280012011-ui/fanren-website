import type { TimelineEvent } from '../../types';
import { EVENT_TYPE_COLORS, EVENT_TYPE_LABELS } from '../../utils/constants';
import styles from './TimelineNode.module.css';

interface Props {
  event: TimelineEvent;
  isSelected: boolean;
  onClick: () => void;
}

export default function TimelineNode({ event, isSelected, onClick }: Props) {
  const color = EVENT_TYPE_COLORS[event.type] || '#6b6b6b';
  const typeLabel = EVENT_TYPE_LABELS[event.type] || '';
  const leftPercent = event.positionPercent.x;
  const topPercent = event.positionPercent.y;

  return (
    <div
      className={`${styles.node} ${isSelected ? styles.selected : ''}`}
      style={{
        left: `${leftPercent}%`,
        top: `${topPercent}%`,
      }}
      onClick={onClick}
    >
      <div className={styles.marker} style={{ borderColor: color }}>
        <div className={styles.dot} style={{ background: color }} />
      </div>
      <div className={styles.label}>
        <span className={styles.title}>{event.title}</span>
        <span className={styles.time}>{event.timeLabel}</span>
      </div>
      <span className={styles.typeBadge} style={{ color, borderColor: color }}>
        {typeLabel}
      </span>
    </div>
  );
}
