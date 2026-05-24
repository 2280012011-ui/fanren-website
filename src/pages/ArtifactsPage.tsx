import { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import SectionTitle from '../components/common/SectionTitle';
import ArtifactCard from '../components/artifacts/ArtifactCard';
import ArtifactDetail from '../components/artifacts/ArtifactDetail';
import ScrollReveal from '../components/common/ScrollReveal';
import { artifacts } from '../data/artifacts';
import type { Artifact } from '../types';
import { cn } from '../utils/cn';
import styles from './ArtifactsPage.module.css';

const ALL_TYPES: { key: string; label: string }[] = [
  { key: '全部', label: '全部法宝' },
  { key: '十大至宝', label: '十大至宝' },
  { key: '飞剑', label: '飞剑' },
  { key: '攻击法宝', label: '攻击法宝' },
  { key: '防御法器', label: '防御法器' },
  { key: '储物法器', label: '储物法器' },
  { key: '辅助法宝', label: '辅助法宝' },
  { key: '灵兽/灵虫', label: '灵兽/灵虫' },
  { key: '丹药', label: '丹药' },
  { key: '阵法', label: '阵法' },
  { key: '功法秘术', label: '功法秘术' },
  { key: '灵材', label: '灵材' },
  { key: '符箓', label: '符箓' },
  { key: '傀儡', label: '傀儡' },
  { key: '火焰/神雷', label: '火焰/神雷' },
];

export default function ArtifactsPage() {
  const [type, setType] = useState('全部');
  const [selected, setSelected] = useState<Artifact | null>(null);

  const filtered = useMemo(() => {
    if (type === '全部') return artifacts;
    return artifacts.filter((a) => a.type === type);
  }, [type]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = { '全部': artifacts.length };
    ALL_TYPES.slice(1).forEach(({ key }) => {
      counts[key] = artifacts.filter((a) => a.type === key).length;
    });
    return counts;
  }, []);

  return (
    <div className={styles.page}>
      <ScrollReveal>
        <SectionTitle title="法宝图鉴" subtitle="人界篇出现过的部分法宝一览 · 点击卡片查看详情" />
      </ScrollReveal>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>法宝分类</h3>
          <nav className={styles.nav}>
            {ALL_TYPES.map(({ key, label }) => (
              <button
                key={key}
                className={cn(styles.navItem, type === key && styles.navItemActive)}
                onClick={() => setType(key)}
              >
                <span className={styles.navLabel}>{label}</span>
                <span className={cn(styles.navCount, type === key && styles.navCountActive)}>
                  {typeCounts[key] || 0}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <div className={styles.main}>
          <div className={styles.grid}>
            {filtered.map((a) => (
              <ArtifactCard key={a.id} artifact={a} onClick={() => setSelected(a)} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className={styles.empty}>该分类下暂无法宝</p>
          )}
        </div>
      </div>

      {selected && createPortal(
        <ArtifactDetail artifact={selected} onClose={() => setSelected(null)} />,
        document.body
      )}
    </div>
  );
}
