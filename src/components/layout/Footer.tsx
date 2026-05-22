import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/views')
      .then(r => r.json())
      .then(d => { if (d.views) setViews(d.views); })
      .catch(() => {});
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.divider} />
        <div className={styles.content}>
          <span className={styles.text}>凡人修仙传 · 人界篇</span>
          <span className={styles.separator}>◇</span>
          <span className={styles.text}>韩立修仙之路</span>
        </div>
        {views !== null && (
          <p className={styles.views}>
            ✦ 已有 <strong>{views.toLocaleString()}</strong> 位道友到访 ✦
          </p>
        )}
        <p className={styles.copyright}>
          本网站为粉丝自制宣传站，内容来源网络，版权归原作者及平台所有
        </p>
      </div>
    </footer>
  );
}
