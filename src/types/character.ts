export type CultivationRealm =
  | '练气期'
  | '筑基期'
  | '结丹期'
  | '元婴期'
  | '化神期'
  | '炼虚期'
  | '合体期'
  | '大乘期';

export interface CharacterRelation {
  targetId: string;
  targetName: string;
  relation: string;
}

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  imageUrl: string;
  realm: CultivationRealm;
  affiliation: string;
  description: string;
  personality: string;
  techniques: string[];
  relations: CharacterRelation[];
  firstAppearChapter: string;
  status: 'alive' | 'departed' | 'deceased';
  tags: string[];
}
