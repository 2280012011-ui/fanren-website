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

const MAIN_CATEGORIES = [
  '全部',
  '法宝与法器类',
  '功法与神通类',
  '修仙百艺类',
  '灵物与修仙资源类',
];

const SUB_CATEGORIES: Record<string, string[]> = {
  '法宝与法器类': ['法宝', '古宝', '法器', '符宝'],
  '功法与神通类': ['功法', '秘术', '神通'],
  '修仙百艺类': ['阵法', '符箓', '傀儡', '丹药'],
  '灵物与修仙资源类': ['灵兽', '灵木', '灵草', '材料', '其他物品'],
};

export default function ArtifactsPage() {
  const [mainCat, setMainCat] = useState('全部');
  const [subCat, setSubCat] = useState('全部');
  const [selected, setSelected] = useState<Artifact | null>(null);

  const filtered = useMemo(() => {
    if (mainCat === '全部') return artifacts;
    if (subCat !== '全部') return artifacts.filter((a) => a.tag === subCat);
    // Main category selected, no subcategory — show all items under this category
    const tags = SUB_CATEGORIES[mainCat] || [];
    return artifacts.filter((a) => tags.includes(a.tag || ''));
  }, [mainCat, subCat]);

  // Reset sub-category when main category changes
  useEffect(() => {
    setSubCat('全部');
  }, [mainCat]);

  const showSub = mainCat !== '全部';

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
          <SectionTitle title="物品图鉴" subtitle="人界篇出现过的部分物品一览 · 点击卡片查看详情" />
        </div>
      </ScrollReveal>

      {/* Main category filter */}
      <ScrollReveal>
        <div className={styles.filterBar}>
          {MAIN_CATEGORIES.map((t) => (
            <button
              key={t}
              className={cn(styles.filterPill, mainCat === t && styles.filterPillActive)}
              onClick={() => {
                setMainCat(t);
                setSubCat('全部');
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Sub category filter — only visible when a main category is selected */}
      {showSub && (
        <ScrollReveal>
          <div className={styles.filterBar}>
            <button
              className={cn(styles.filterPill, subCat === '全部' && styles.filterPillActive)}
              onClick={() => setSubCat('全部')}
            >
              全部
            </button>
            {SUB_CATEGORIES[mainCat].map((t) => (
              <button
                key={t}
                className={cn(styles.filterPill, subCat === t && styles.filterPillActive)}
                onClick={() => setSubCat(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((a) => (
          <ArtifactCard key={a.id} artifact={a} onClick={() => setSelected(a)} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className={styles.empty}>该分类下暂无物品</p>
      )}

      {selected && createPortal(
        <ArtifactDetail artifact={selected} onClose={() => setSelected(null)} />,
        document.body
      )}
    </div>
  );
}
