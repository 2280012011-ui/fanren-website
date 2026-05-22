import { Link } from 'react-router-dom';
import type { CharacterRelation } from '../../types';
import { ROUTES } from '../../utils/constants';
import styles from './RelationMap.module.css';

interface Props {
  relations: CharacterRelation[];
}

export default function RelationMap({ relations }: Props) {
  if (relations.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>人物关系</h3>
      <div className={styles.list}>
        {relations.map((rel) => (
          <Link
            key={rel.targetId}
            to={`${ROUTES.CHARACTERS}/${rel.targetId}`}
            className={styles.item}
          >
            <span className={styles.targetName}>{rel.targetName}</span>
            <span className={styles.arrow}>→</span>
            <span className={styles.relation}>{rel.relation}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
