import type { Artifact } from '../../types';
import ArtifactCard from './ArtifactCard';
import styles from './ArtifactGrid.module.css';

interface Props {
  artifacts: Artifact[];
}

export default function ArtifactGrid({ artifacts }: Props) {
  return (
    <div className={styles.grid}>
      {artifacts.map((a) => (
        <ArtifactCard key={a.id} artifact={a} />
      ))}
    </div>
  );
}
