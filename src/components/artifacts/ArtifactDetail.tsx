import { motion } from 'framer-motion';
import type { Artifact } from '../../types';
import styles from './ArtifactDetail.module.css';

interface Props {
  artifact: Artifact;
  onClose: () => void;
}

export default function ArtifactDetail({ artifact, onClose }: Props) {
  const { name, type, grade, description, abilities, acquisition, firstAppearChapter, notableUsage } = artifact;

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>×</button>

        <div className={styles.header}>
          <span className={styles.grade}>{grade}</span>
          <span className={styles.type}>{type}</span>
        </div>

        <h2 className={styles.name}>{name}</h2>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h4 className={styles.label}>简介</h4>
          <p className={styles.text}>{description}</p>
        </div>

        {abilities.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.label}>能力</h4>
            <div className={styles.tags}>
              {abilities.map((a) => <span key={a} className={styles.tag}>{a}</span>)}
            </div>
          </div>
        )}

        <div className={styles.section}>
          <h4 className={styles.label}>获取方式</h4>
          <p className={styles.text}>{acquisition}</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.label}>首次登场</h4>
          <p className={styles.text}>{firstAppearChapter}</p>
        </div>

        {notableUsage && (
          <div className={styles.section}>
            <h4 className={styles.label}>著名战绩</h4>
            <p className={styles.text}>{notableUsage}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
