import { cn } from '../../utils/cn';
import type { ArtifactType } from '../../types';
import styles from './TypeFilter.module.css';

const ALL_TYPES: ('全部' | ArtifactType)[] = [
  '全部', '飞剑', '防御法器', '储物法器', '攻击法宝', '辅助法宝', '灵兽/灵虫', '丹药', '阵法', '功法秘术', '灵材',
];

interface Props {
  selected: string;
  onChange: (t: string) => void;
}

export default function TypeFilter({ selected, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        {ALL_TYPES.map((t) => (
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
