import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import RebroadcastBanner from '../components/home/RebroadcastBanner';
import HonorsPanel from '../components/home/HonorsPanel';
import StatisticsPanel from '../components/home/StatisticsPanel';
import PromotionalSection from '../components/home/PromotionalSection';
import CommentWall from '../components/home/CommentWall';
import Danmaku from '../components/home/Danmaku';
import InkBrush from '../components/common/InkBrush';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [showAbout, setShowAbout] = useState(false);
  const [showChangelog, setShowChangelog] = useState(false);
  const [danmakuOn, setDanmakuOn] = useState(false);

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
      {danmakuOn && createPortal(<Danmaku enabled={true} />, document.body)}
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

      {/* Bottom-right buttons */}
      <button className={styles.aboutBtn} onClick={() => setShowAbout(true)}>？</button>
      <button className={styles.changelogBtn} onClick={() => setShowChangelog(true)}>更新日志</button>
      <button className={styles.danmakuBtn} onClick={() => setDanmakuOn(!danmakuOn)}>{danmakuOn ? '关闭弹幕' : '弹幕'}</button>

      {/* About popup */}
      {showAbout && createPortal(
        <motion.div className={styles.aboutOverlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowAbout(false)}>
          <motion.div className={styles.aboutCard} initial={{opacity:0,scale:0.9,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.9,y:20}} onClick={e=>e.stopPropagation()}>
            <button className={styles.aboutClose} onClick={() => setShowAbout(false)}>×</button>
            <p className={styles.aboutText}>
              {'作者说：\n\n各位道友，别来无恙？\n\n“凡人修仙，风起天南。”因为共同的热爱，我们相聚于此。本网站为《凡人修仙传》纯粉丝自制图鉴百科，由数位同好利用业余时间“为爱发电”搭建而成，旨在为大家梳理原著与动漫中的庞大世界观。本网站目前仍处于起步阶段，内容有很多谬误，正在完善中......网站百科内容以动漫为准，动漫尚未涉及的内容则以原著为准。\n\n光阴荏苒，不论是追更小说的岁月，还是如今追逐动漫的时光，凡人都承载了我们太多的青春。祝《凡人修仙传》动漫开播大吉，收视长虹！\n\n\n【特别鸣谢制作团队】\n移动端布局设计：@掩耳盗灵\n百科内容纠错与完善：（正在建设中......）\n网页背景视频授权：@落雨无声AI、@天南第一深情\n\n【免责声明】\n本站为纯粉丝向非营利性网站。站内涉及的《凡人修仙传》世界观、人物设定、专有名词及部分美术/视频素材，其版权均归原作者忘语及相关动漫/影视版权方所有。本站仅供同好交流与娱乐，严禁用于任何商业牟利用途。如有侵权，请B站私信@鄙人翔某删除。'}
            </p>
          </motion.div>
        </motion.div>,
        document.body
      )}

      {/* Changelog popup */}
      {showChangelog && createPortal(
        <motion.div className={styles.aboutOverlay} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setShowChangelog(false)}>
          <motion.div className={styles.aboutCard} initial={{opacity:0,scale:0.9,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.9,y:20}} onClick={e=>e.stopPropagation()}>
            <button className={styles.aboutClose} onClick={() => setShowChangelog(false)}>×</button>
            <h3 className={styles.changelogTitle}>更新日志</h3>
            <div className={styles.changelogContent}>
              <p>5.24</p>
              <p>将背景视频的压缩率降低，稍微提升了画质；</p>
              <p>优化了法宝页面：重做布局、增大字体、补充介绍；</p>
              <p>优化了人物页面：增加部分肖像、补充部分介绍；</p>
              <p>增大了导航栏字体；</p>
              <p>增加了BGM播放按钮；</p>
              <p>现已支持国内访问：https://fanren-website.pages.dev/；</p>
            </div>
            <div className={styles.changelogContent} style={{marginTop:'1rem'}}>
              <p>5.25</p>
              <p>增加了部分人物与法宝；</p>
              <p>更正部分人物信息；</p>
            </div>
            <div className={styles.changelogContent} style={{marginTop:'1rem'}}>
              <p>5.26</p>
              <p>根据各位道友在B站视频或网站下的建议，对部分有误的信息进行了修改并新增十余位人物；</p>
              <p>作者已燃尽，怒烧8亿Token，马上要开组会了论文还没看......</p>
              <p>此网站大体应该就这样了，后续可能会陆续加入地图功能并进行一些内容与排版上的修正。</p>
              <p>再次感谢诸位道友的支持，那么就请静候凡人开播！</p>
            </div>
            <div className={styles.changelogContent} style={{marginTop:'1rem'}}>
              <p>5.27</p>
              <p>新增弹幕功能；</p>
              <p>由@掩耳盗灵优化了网页的移动端布局；</p>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </div>
  );
}
