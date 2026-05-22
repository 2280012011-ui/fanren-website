import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import RebroadcastBanner from '../components/home/RebroadcastBanner';
import HonorsPanel from '../components/home/HonorsPanel';
import StatisticsPanel from '../components/home/StatisticsPanel';
import PromotionalSection from '../components/home/PromotionalSection';
import InkBrush from '../components/common/InkBrush';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [showAbout, setShowAbout] = useState(false);

  // Make body transparent and lift root above portal video
  useEffect(() => {
    const root = document.getElementById('root');
    const prevBg = document.body.style.background;
    const prevPos = root?.style.position || '';
    const prevZ = root?.style.zIndex || '';

    document.body.style.background = 'transparent';
    if (root) {
      root.style.position = 'relative';
      root.style.zIndex = '1';
    }

    return () => {
      document.body.style.background = prevBg;
      if (root) {
        root.style.position = prevPos;
        root.style.zIndex = prevZ;
      }
    };
  }, []);

  // Render video via portal direct to body — bypasses framer-motion transforms
  const video = createPortal(
    <video
      className={styles.videoBg}
      src="/videos/bg.mp4"
      autoPlay
      loop
      muted
      playsInline
    />,
    document.body
  );

  return (
    <div className={styles.page}>
      {video}
      <div className={styles.content}>
        <HeroSection />
        <RebroadcastBanner />
        <InkBrush />
        <HonorsPanel />
        <InkBrush />
        <StatisticsPanel />
        <InkBrush />
        <PromotionalSection />
      </div>

      {/* About button */}
      <button className={styles.aboutBtn} onClick={() => setShowAbout(true)}>？</button>

      {/* About popup via portal to bypass framer-motion */}
      {showAbout && createPortal(
        <motion.div className={styles.aboutOverlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowAbout(false)}>
          <motion.div className={styles.aboutCard} initial={{opacity:0,scale:0.9,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.9,y:20}} onClick={e=>e.stopPropagation()}>
            <button className={styles.aboutClose} onClick={() => setShowAbout(false)}>×</button>
            <p className={styles.aboutText}>
              作者说：本网站全程通过 vibe coding 开发，主要目的是宣传《凡人修仙传》，以及庆祝其即将复播。本人是网站开发小白，所以网站有些地方很粗糙，还有很多 bug，仅供娱乐。部分素材取自于社交媒体平台，感谢博主 @落雨无声。
            </p>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </div>
  );
}
