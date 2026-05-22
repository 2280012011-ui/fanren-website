import { cn } from '../../utils/cn';
import styles from './CharacterFilter.module.css';

const TAGS = ['全部', '主角', '七玄门', '越国七派', '魔道六宗', '乱星海', '天南', '大晋', '化神', '上古修士', '妖族', '妖兽/灵兽', '魔道'];

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
