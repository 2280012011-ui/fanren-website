import { Link } from 'react-router-dom';
import type { Character } from '../../types';
import CultivationBadge from './CultivationBadge';
import { ROUTES } from '../../utils/constants';
import styles from './CharacterCard.module.css';

interface Props {
  character: Character;
}

export default function CharacterCard({ character }: Props) {
  const { id, name, aliases, imageUrl, realm, affiliation } = character;

  const initials = name.charAt(0);

  return (
    <Link to={`${ROUTES.CHARACTERS}/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl && imageUrl.includes('characters/') ? (
          <img src={imageUrl} alt={name} className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.initials}>{initials}</span>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          <CultivationBadge realm={realm} />
        </div>
        {aliases.length > 0 && (
          <p className={styles.aliases}>亦称：{aliases.join('、')}</p>
        )}
        <p className={styles.affiliation}>{affiliation}</p>
      </div>
    </Link>
  );
}
