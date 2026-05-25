import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import SectionTitle from '../components/common/SectionTitle';
import ArtifactCard from '../components/artifacts/ArtifactCard';
import ArtifactDetail from '../components/artifacts/ArtifactDetail';
import ScrollReveal from '../components/common/ScrollReveal';
import { artifacts } from '../data/artifacts';
import type { Artifact } from '../types';
import { cn } from '../utils/cn';
import styles from './ArtifactsPage.module.css';

const ALL_TYPES = [
  '全部', '十大至宝', '飞剑', '攻击法宝', '防御法器', '储物法器',
  '辅助法宝', '灵兽/灵虫', '丹药', '阵法', '功法秘术', '灵材', '符箓', '傀儡', '火焰/神雷',
];

export default function ArtifactsPage() {
  const [type, setType] = useState('全部');
  const [selected, setSelected] = useState<Artifact | null>(null);

  const filtered = useMemo(() => {
    if (type === '全部') return artifacts;
    return artifacts.filter((a) => a.type === type);
  }, [type]);

  useEffect(() => {
    const root = document.getElementById('root');
    const prevBg = document.body.style.background;
    const prevPos = root?.style.position || '';
    const prevZ = root?.style.zIndex || '';
    document.body.style.background = 'transparent';
    if (root) { root.style.position = 'relative'; root.style.zIndex = '1'; }
    return () => {
      document.body.style.background = prevBg;
      if (root) { root.style.position = prevPos; root.style.zIndex = prevZ; }
    };
  }, []);

  const video = createPortal(
    <video className={styles.videoBg} src="/videos/characters-bg.mp4" autoPlay loop muted playsInline />,
    document.body
  );

  return (
    <div className={styles.page}>
      {video}
      <ScrollReveal>
        <div className={styles.titleWrap}>
          <SectionTitle title="法宝图鉴" subtitle="人界篇出现过的部分法宝一览 · 点击卡片查看详情" />
        </div>
      </ScrollReveal>

      {/* Horizontal filter */}
      <ScrollReveal>
        <div className={styles.filterBar}>
          {ALL_TYPES.map((t) => (
            <button
              key={t}
              className={cn(styles.filterPill, type === t && styles.filterPillActive)}
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((a) => (
          <ArtifactCard key={a.id} artifact={a} onClick={() => setSelected(a)} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className={styles.empty}>该分类下暂无法宝</p>
      )}

      {selected && createPortal(
        <ArtifactDetail artifact={selected} onClose={() => setSelected(null)} />,
        document.body
      )}
    </div>
  );
}
