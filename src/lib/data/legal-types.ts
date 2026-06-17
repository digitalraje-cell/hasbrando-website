export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};
