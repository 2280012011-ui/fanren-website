export type ArtifactType = string;

export type ArtifactGrade = string;

export interface Artifact {
  id: string;
  name: string;
  imageUrl?: string;
  type: ArtifactType;
  grade: ArtifactGrade;
  ownerId: string;
  ownerName: string;
  description: string;
  abilities: string[];
  acquisition: string;
  firstAppearChapter: string;
  notableUsage: string;
}
