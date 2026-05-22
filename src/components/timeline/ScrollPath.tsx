import { useState } from 'react';
import { timelineEvents } from '../../data/timeline';
import TimelineNode from './TimelineNode';
import EventDetailCard from './EventDetailCard';
import type { TimelineEvent } from '../../types';
import styles from './ScrollPath.module.css';

// SVG viewBox dimensions
const SVG_W = 5000;
const SVG_H = 2400;

// Generate winding path from events' coordinates
function generatePathData(events: TimelineEvent[]): string {
  const sorted = [...events].sort((a, b) => a.sortOrder - b.sortOrder);
  if (sorted.length === 0) return '';

  let d = '';
  sorted.forEach((evt, i) => {
    const x = (evt.positionPercent.x / 100) * SVG_W;
    const y = (evt.positionPercent.y / 100) * SVG_H;
    if (i === 0) {
      d += `M ${x} ${y} `;
    } else {
      const prev = sorted[i - 1];
      const px = (prev.positionPercent.x / 100) * SVG_W;
      const py = (prev.positionPercent.y / 100) * SVG_H;
      const cx1 = px + (x - px) * 0.4;
      const cy1 = py + (y - py) * 0.3 - 80;
      const cx2 = px + (x - px) * 0.6;
      const cy2 = py + (y - py) * 0.7 + 80;
      d += `C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x} ${y} `;
    }
  });
  return d;
}

export default function ScrollPath() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const sortedEvents = [...timelineEvents].sort((a, b) => a.sortOrder - b.sortOrder);
  const pathData = generatePathData(timelineEvents);

  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className={styles.svg}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Decorative background elements */}
          {/* Sun/moon circle */}
          <circle cx="400" cy="200" r="80" fill="none" stroke="rgba(196,168,75,0.08)" strokeWidth="2" />
          <circle cx="400" cy="200" r="60" fill="rgba(196,168,75,0.04)" />

          {/* Arc labels */}
          {[
            { label: '练气篇', x: 15, y: 13 },
            { label: '筑基篇', x: 35, y: 30 },
            { label: '结丹篇', x: 55, y: 47 },
            { label: '元婴篇', x: 80, y: 70 },
          ].map((arc) => (
            <g key={arc.label}>
              <text
                x={(arc.x / 100) * SVG_W}
                y={(arc.y / 100) * SVG_H - 40}
                fill="var(--vermillion)"
                opacity="0.15"
                fontFamily="var(--font-display)"
                fontSize="36"
                letterSpacing="0.3em"
                textAnchor="middle"
              >
                {arc.label}
              </text>
            </g>
          ))}

          {/* The winding path */}
          {/* Glow layer */}
          <path
            d={pathData}
            fill="none"
            stroke="rgba(192, 59, 59, 0.06)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Main path */}
          <path
            d={pathData}
            fill="none"
            stroke="var(--ink-faint)"
            strokeWidth="2"
            strokeDasharray="8 6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          {/* Inner accent path */}
          <path
            d={pathData}
            fill="none"
            stroke="var(--vermillion)"
            strokeWidth="1"
            strokeDasharray="2 12"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
          />
        </svg>

        {/* Event nodes absolutely positioned on the canvas */}
        {sortedEvents.map((evt) => (
          <TimelineNode
            key={evt.id}
            event={evt}
            isSelected={selectedEvent?.id === evt.id}
            onClick={() => setSelectedEvent(selectedEvent?.id === evt.id ? null : evt)}
          />
        ))}
      </div>

      {/* Event detail card */}
      {selectedEvent && (
        <EventDetailCard
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}
