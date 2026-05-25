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
  '法宝与法器类': ['玄天之宝/仙器', '通天灵宝', '仿制灵宝', '极品法宝/天地奇物', '古宝', '法宝', '法器', '辅助法器', '符宝'],
  '功法与神通类': ['入门功法', '顶级功法', '炼体秘术', '神通/神雷', '异火', '剑阵神通'],
  '修仙百艺类': ['上古阵法/禁制', '常规阵法', '高阶符箓', '常规符箓', '傀儡', '高阶丹药', '低阶丹药'],
  '灵物与修仙资源类': ['奇虫/灵虫', '灵兽/奇兽', '妖兽', '妖兽/圣兽', '妖兽/鬼物', '天地灵木', '天地灵液/造化之物', '天地灵草/灵药', '天地灵物', '顶级炼器材料', '其他玉简/辅助物品'],
};

export default function ArtifactsPage() {
  const [mainCat, setMainCat] = useState('全部');
  const [subCat, setSubCat] = useState('全部');
  const [selected, setSelected] = useState<Artifact | null>(null);

  const filtered = useMemo(() => {
    if (mainCat === '全部') return artifacts;
    if (subCat !== '全部') return artifacts.filter((a) => a.type === subCat);
    // Main category selected, no subcategory — show all items under this category
    const types = SUB_CATEGORIES[mainCat] || [];
    return artifacts.filter((a) => types.includes(a.type));
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
