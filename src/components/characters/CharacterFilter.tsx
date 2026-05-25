import { cn } from '../../utils/cn';
import styles from './CharacterFilter.module.css';

const TAGS = ['全部', '风起天南', '燕家堡之战', '魔道争锋', '再别天南', '星海飞驰', '外海风云', '重返天南', '后续篇章'];

interface Props {
  selected: string;
  onChange: (tag: string) => void;
}

export default function CharacterFilter({ selected, onChange }: Props) {
  return (
    <div className={styles.filters}>
      <span className={styles.label}>势力</span>
      <div className={styles.options}>
        {TAGS.map((t) => (
          <button
            key={t}
            className={cn(styles.pill, selected === t && styles.active)}
            onClick={() => onChange(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
