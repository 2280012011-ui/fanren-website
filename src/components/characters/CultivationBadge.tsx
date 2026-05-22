import type { CultivationRealm } from '../../types';
import { REALM_COLORS } from '../../utils/constants';
import styles from './CultivationBadge.module.css';

interface Props {
  realm: CultivationRealm;
}

export default function CultivationBadge({ realm }: Props) {
  const color = REALM_COLORS[realm] || '#6b6b6b';

  return (
    <span
      className={styles.badge}
      style={{
        color,
        borderColor: color,
      }}
    >
      {realm}
    </span>
  );
}
