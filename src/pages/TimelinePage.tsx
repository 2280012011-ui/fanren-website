import SectionTitle from '../components/common/SectionTitle';
import ScrollReveal from '../components/common/ScrollReveal';
import ScrollPath from '../components/timeline/ScrollPath';
import LandscapeLayer from '../components/timeline/LandscapeLayer';
import styles from './TimelinePage.module.css';

export default function TimelinePage() {
  return (
    <div className={styles.page}>
      <ScrollReveal>
        <SectionTitle title="修仙之路" subtitle="韩立人界篇冒险历程 · 横向滚动探索" />
      </ScrollReveal>
      <ScrollReveal>
        <div className={styles.timelineWrapper}>
          <div className={styles.landscapeContainer}>
            <LandscapeLayer />
            <ScrollPath />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
