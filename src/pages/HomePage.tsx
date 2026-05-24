import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import RebroadcastBanner from '../components/home/RebroadcastBanner';
import HonorsPanel from '../components/home/HonorsPanel';
import StatisticsPanel from '../components/home/StatisticsPanel';
import PromotionalSection from '../components/home/PromotionalSection';
import CommentWall from '../components/home/CommentWall';
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
      src="/videos/bg-compressed.mp4"
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
        <CommentWall />
      </div>

      {/* About button */}
      <button className={styles.aboutBtn} onClick={() => setShowAbout(true)}>？</button>

      {/* About popup via portal to bypass framer-motion */}
      {showAbout && createPortal(
        <motion.div className={styles.aboutOverlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowAbout(false)}>
          <motion.div className={styles.aboutCard} initial={{opacity:0,scale:0.9,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.9,y:20}} onClick={e=>e.stopPropagation()}>
            <button className={styles.aboutClose} onClick={() => setShowAbout(false)}>×</button>
            <p className={styles.aboutText}>
              作者说：
祝贺《凡人修仙传》开播大吉！

诸位道友别来无恙？
本网站全程通过 vibe coding 开发，所以有些地方很粗糙，还有许多 bug，但是为爱发电，仅供娱乐。
背景视频取自社交媒体平台，已获得原作者授权。感谢博主 @落雨无声、@天南第一深情。
想要同款视频壁纸的道友，可以在b站或者小红车搜以上两位创作者。

感谢诸位道友支持！
            </p>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </div>
  );
}
