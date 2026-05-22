import { useState, useMemo } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import CharacterFilter from '../components/characters/CharacterFilter';
import CharacterGrid from '../components/characters/CharacterGrid';
import ScrollReveal from '../components/common/ScrollReveal';
import { characters } from '../data/characters';
import styles from './CharactersPage.module.css';

export default function CharactersPage() {
  const [realm, setRealm] = useState('全部');
  const [tag, setTag] = useState('全部');

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      if (realm !== '全部' && c.realm !== realm) return false;
      if (tag !== '全部' && !c.tags.includes(tag)) return false;
      return true;
    });
  }, [realm, tag]);

  return (
    <div className={styles.page}>
      <ScrollReveal>
        <SectionTitle title="人物志" subtitle="人界篇主要人物" />
      </ScrollReveal>
      <ScrollReveal>
        <CharacterFilter
          selectedRealm={realm}
          selectedTag={tag}
          onRealmChange={setRealm}
          onTagChange={setTag}
        />
      </ScrollReveal>
      <ScrollReveal>
        <CharacterGrid characters={filtered} />
      </ScrollReveal>
      {filtered.length === 0 && (
        <p className={styles.empty}>没有匹配的人物，请调整筛选条件</p>
      )}
    </div>
  );
}
