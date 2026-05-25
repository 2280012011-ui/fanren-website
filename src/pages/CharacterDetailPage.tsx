import { useParams, Link } from 'react-router-dom';
import { characters } from '../data/characters';
import RelationMap from '../components/characters/RelationMap';
import ScrollReveal from '../components/common/ScrollReveal';
import { ROUTES } from '../utils/constants';
import styles from './CharacterDetailPage.module.css';

export default function CharacterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <div className={styles.page}>
        <Link to={ROUTES.CHARACTERS} className={styles.back}>← 返回人物志</Link>
        <div className={styles.notFound}><p>该人物资料暂未收录</p></div>
      </div>
    );
  }

  const { name, imageUrl, aliases, affiliation, description, personality, techniques, relations, firstAppearChapter, ending } = character;

  return (
    <div className={styles.page}>
      <Link to={ROUTES.CHARACTERS} className={styles.back}>← 返回人物志</Link>
      <ScrollReveal>
        <div className={styles.profile}>
          <div className={styles.portrait}>
            {imageUrl ? (
              <img src={imageUrl} alt={name} className={styles.portraitImage} />
            ) : (
              <div className={styles.portraitEmpty}>待添加</div>
            )}
          </div>
          <div className={styles.main}>
            <div className={styles.head}>
              <div>
                <h1 className={styles.name}>{name}</h1>
                {aliases.length > 0 && <p className={styles.aliases}>亦称：{aliases.join('、')}</p>}
              </div>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}><strong>所属势力</strong> {affiliation}</span>
              <span className={styles.metaItem}><strong>初次登场</strong> {firstAppearChapter}</span>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>人物介绍</h3>
              <p className={styles.text}>{description}</p>
            </div>

            <div className={styles.row}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>性格</h3>
                <p className={styles.text}>{personality}</p>
              </div>
              {techniques.length > 0 && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>功法能力</h3>
                  <div className={styles.tags}>{techniques.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
                </div>
              )}
            </div>

            <div className={`${styles.section} ${styles.endingSection}`}>
              <h3 className={styles.sectionTitle}>人物结局</h3>
              <p className={styles.text}>{ending}</p>
            </div>

            <RelationMap relations={relations} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
