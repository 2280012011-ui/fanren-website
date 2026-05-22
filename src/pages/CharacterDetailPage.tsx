import { useParams, Link } from 'react-router-dom';
import { characters } from '../data/characters';
import CultivationBadge from '../components/characters/CultivationBadge';
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
        <Link to={ROUTES.CHARACTERS} className={styles.back}>
          ← 返回人物志
        </Link>
        <div className={styles.notFound}>
          <p>该人物资料暂未收录</p>
        </div>
      </div>
    );
  }

  const {
    name,
    aliases,
    imageUrl,
    realm,
    affiliation,
    description,
    personality,
    techniques,
    relations,
    firstAppearChapter,
    status,
  } = character;

  const statusLabel: Record<string, string> = {
    alive: '在世',
    departed: '已离去',
    deceased: '已陨落',
  };

  return (
    <div className={styles.page}>
      <Link to={ROUTES.CHARACTERS} className={styles.back}>
        ← 返回人物志
      </Link>

      <ScrollReveal>
        <div className={styles.profile}>
          <div className={styles.sidebar}>
            <div className={styles.portrait}>
              {imageUrl ? (
                <img src={imageUrl} alt={name} className={styles.portraitImage} />
              ) : (
                <div className={styles.portraitPlaceholder}>
                  <span className={styles.portraitName}>{name}</span>
                </div>
              )}
            </div>
            <div className={styles.badges}>
              <CultivationBadge realm={realm} />
              <span className={styles.status}>{statusLabel[status]}</span>
            </div>
          </div>

          <div className={styles.main}>
            <h1 className={styles.name}>{name}</h1>
            {aliases.length > 0 && (
              <p className={styles.aliases}>亦称：{aliases.join('、')}</p>
            )}
            <p className={styles.affiliation}>
              <span className={styles.label}>所属势力</span>
              {affiliation}
            </p>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>人物介绍</h3>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>性格特点</h3>
              <p className={styles.personality}>{personality}</p>
            </div>

            {techniques.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>功法/秘术</h3>
                <div className={styles.tags}>
                  {techniques.map((tech) => (
                    <span key={tech} className={styles.tagItem}>{tech}</span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>初次登场</span>
                <span className={styles.metaValue}>{firstAppearChapter}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>目前状态</span>
                <span className={styles.metaValue}>{statusLabel[status]}</span>
              </div>
            </div>

            <RelationMap relations={relations} />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
