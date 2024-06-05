export type I18nProps = {
  lang: LangType;
};

export type ProjectCard = {
  id: number;
  name: string;
  description: {
    pl: string;
    en: string;
  };
  images: string[];
};

export type LangType = 'pl' | 'en';
