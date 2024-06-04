import { ContentSchema } from '../schema';

export const polish: ContentSchema = {
  header: {
    nav: {
      whatCanWeOffer: 'Nasz oferta',
      caseStudies: 'Portfolio',
    },
    btn: 'Zrealizuj swój pomysł',
  },
  home: {
    bannerHero: {
      slogan1: 'Jesteśmy MinfDev',
      slogan2:
        'Wspieranie projektowania, rozwoju i wzrostu cyfrowych produktów',
    },
    aboutUs: {
      slogan:
        'Jesteśmy dynamicznie rozwijającym się software house, który tworzy strony internetowe szyte na miarę Twoich potrzeb. Stawiamy na szybkość działania i najnowocześniejsze technologie. Naszym celem jest dostarczanie wysoce wydajnych rozwiązań webowych, łączących innowacyjność z designem ukierunkowanym na użytkownika.',
    },
  },
  footer: {
    nav: {
      offer: {
        title: 'Nasza oferta',
        whatWeCanDo: 'Co możemy dla Ciebie zrobić',
        ourProcess: 'Jak pracujemy',
      },
      caseStudies: {
        title: 'Portfolio',
      },
    },
    contactForm: {
      title: 'Zapisz się do Newslettera',
      form: {
        error: 'Podany email jest nieprawidłowy',
        placeholder: 'Podaj swój adres email',
        btn: 'Zapisz się',
      },
    },
  },
};
