export type I18nProps = {
  lang: LangType;
};

export type ProjectCard = {
  id: number;
  name: string;
  title: string;
  subTitle: {
    pl: string;
    en: string;
  };
  services: {
    pl: string[];
    en: string[];
  };
  timeline: {
    pl: string[];
    en: string[];
  };
  aboutProject: {
    description: {
      pl: string;
      en: string;
    };
    image: string;
  };
  challenges: {
    pl: string[];
    en: string[];
  };
  description: {
    pl: string;
    en: string;
  };
  images: string[];
  baner: string;
  color: string;
  formImage: string;
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
  href: string;
};

export type LangType = "pl" | "en";
