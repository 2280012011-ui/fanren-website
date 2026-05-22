import type { Artifact } from '../../types';
import styles from './ArtifactCard.module.css';

interface Props {
  artifact: Artifact;
  onClick: () => void;
}

export default function ArtifactCard({ artifact, onClick }: Props) {
  const { name, type, grade, description, abilities, acquisition } = artifact;

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.grade}>{grade}</span>
        </div>
        <span className={styles.type}>{type}</span>
        <p className={styles.desc}>{description.slice(0, 40)}{description.length > 40 ? '…' : ''}</p>
        <div className={styles.abilities}>
          {abilities.map((a) => (
            <span key={a} className={styles.ability}>{a}</span>
          ))}
        </div>
        <p className={styles.acquisition}>
          <span className={styles.acqLabel}>获取：</span>
          {acquisition}
        </p>
      </div>
    </div>
  );
}
