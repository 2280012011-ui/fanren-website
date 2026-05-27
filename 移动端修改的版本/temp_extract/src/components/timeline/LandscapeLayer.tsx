import styles from './LandscapeLayer.module.css';

export default function LandscapeLayer() {
  return (
    <div className={styles.landscape}>
      {/* Far mountains */}
      <svg className={styles.farMountains} viewBox="0 0 5000 2400" preserveAspectRatio="none">
        <path
          d="M0 1200 Q300 900 600 1100 Q900 1300 1200 1000 Q1500 700 1800 950 Q2100 1200 2400 850 Q2700 600 3000 900 Q3300 1150 3600 800 Q3900 650 4200 950 Q4500 1200 4800 900 L5000 1000 L5000 2400 L0 2400 Z"
          fill="rgba(0,0,0,0.03)"
        />
        <path
          d="M0 1400 Q400 1100 800 1300 Q1200 1500 1600 1200 Q2000 900 2400 1150 Q2800 1400 3200 1050 Q3600 800 4000 1100 Q4400 1350 4800 1050 L5000 1150 L5000 2400 L0 2400 Z"
          fill="rgba(0,0,0,0.05)"
        />
      </svg>

      {/* Middle mountains */}
      <svg className={styles.midMountains} viewBox="0 0 5000 2400" preserveAspectRatio="none">
        <path
          d="M0 1600 Q200 1400 500 1500 Q800 1600 1100 1350 Q1400 1100 1700 1450 Q2000 1700 2300 1300 Q2600 1000 2900 1400 Q3200 1650 3500 1250 Q3800 1050 4100 1400 Q4400 1600 4700 1300 L5000 1450 L5000 2400 L0 2400 Z"
          fill="rgba(0,0,0,0.07)"
        />
      </svg>

      {/* Foreground elements */}
      <svg className={styles.foreground} viewBox="0 0 5000 2400" preserveAspectRatio="none">
        <path
          d="M0 1800 Q500 1600 1000 1750 Q1500 1900 2000 1650 Q2500 1450 3000 1700 Q3500 1850 4000 1600 Q4500 1450 5000 1650 L5000 2400 L0 2400 Z"
          fill="rgba(0,0,0,0.04)"
        />
      </svg>

      {/* Mist layers */}
      <div className={styles.mist1} />
      <div className={styles.mist2} />
      <div className={styles.mist3} />
    </div>
  );
}
