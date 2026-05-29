import type { Artifact } from '../../types';
import styles from './ArtifactCard.module.css';

interface Props {
  artifact: Artifact;
  onClick: () => void;
}

export default function ArtifactCard({ artifact, onClick }: Props) {
  const { name, type, description, abilities } = artifact;

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.info}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.desc}>{description.slice(0, 40)}{description.length > 40 ? '…' : ''}</p>
        <div className={styles.abilities}>
          {abilities.map((a) => (
            <span key={a} className={styles.ability}>{a}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
