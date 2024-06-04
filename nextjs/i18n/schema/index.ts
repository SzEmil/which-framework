type inputType = { label: string; placeholder: string; error: string };
type inputErrorPhone = {
  error: {
    numberRequired: string;
    invalidNumber: string;
  };
};
type inputPhoneType = Omit<inputType, 'error'> & inputErrorPhone;

export type ContentSchema = {
  header: {
    nav: {
      whatCanWeOffer: string;
      caseStudies: string;
    };
    btn: string;
  };
  home: {
    bannerHero: {
      slogan1: string;
      slogan2: string;
    };
    aboutUs: {
      slogan: string
    }
  };
  footer: {
    nav: {
      offer: {
        title: string;
        whatWeCanDo: string;
        ourProcess: string;
      };
      caseStudies: {
        title: string;
      };
    };
    contactForm: {
      title: string;
      form: {
        error: string;
        placeholder: string;
        btn: string;
      };
    };
  };
};
