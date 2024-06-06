type inputType = { label: string; placeholder: string; error: string };
type inputErrorPhone = {
  error: {
    numberRequired: string;
    invalidNumber: string;
  };
};
type inputPhoneType = Omit<inputType, "error"> & inputErrorPhone;
type timelineItem = {
  name: string;
  description: string;
  category: string;
  btn: string;
};
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
      btn: string;
    };
    aboutUs: {
      slogan1: string;
      slogan2: string;
    };
    caseStudies: {
      title: string;
      btn: string;
    };
    ourServices: {
      title: string;
      btn: string;
    };
  };
  offer: {
    slogan: string;
    ourProcess: {
      title: string;
      timeline: {
        recogniseProblem: timelineItem;
        provideSolution: timelineItem;
        deliverProduct: timelineItem;
        maintainSolution: timelineItem;
      };
    };
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
  projectCard: {
    btn: string;
  };
};
