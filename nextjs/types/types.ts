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

export type OurServiceCard = {
  id: number;
  name: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  };
  image: string;
};

export type LangType = 'pl' | 'en';
