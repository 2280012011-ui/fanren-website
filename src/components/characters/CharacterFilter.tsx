import { cn } from '../../utils/cn';
import styles from './CharacterFilter.module.css';

const REALMS = ['全部', '练气期', '筑基期', '结丹期', '元婴期', '化神期'];
const TAGS = ['全部', '正道', '魔道', '散修', '妖族'];

interface Props {
  selectedRealm: string;
  selectedTag: string;
  onRealmChange: (realm: string) => void;
  onTagChange: (tag: string) => void;
}

export default function CharacterFilter({
  selectedRealm,
  selectedTag,
  onRealmChange,
  onTagChange,
}: Props) {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span className={styles.label}>境界</span>
        <div className={styles.options}>
          {REALMS.map((r) => (
            <button
              key={r}
              className={cn(styles.pill, selectedRealm === r && styles.active)}
              onClick={() => onRealmChange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.group}>
        <span className={styles.label}>势力</span>
        <div className={styles.options}>
          {TAGS.map((t) => (
            <button
              key={t}
              className={cn(styles.pill, selectedTag === t && styles.active)}
              onClick={() => onTagChange(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
