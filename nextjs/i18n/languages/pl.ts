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
      btn: 'Zobacz nasz najnowszy projekt',
    },
    aboutUs: {
      slogan1:
        'Jesteśmy dynamicznie rozwijającym się software house, który tworzy strony internetowe szyte na miarę Twoich potrzeb. Stawiamy na szybkość działania i najnowocześniejsze technologie.',
      slogan2:
        'Naszym celem jest dostarczanie wysoce wydajnych rozwiązań webowych, łączących innowacyjność z designem ukierunkowanym na użytkownika.',
    },
    caseStudies: {
      title: 'Portfolio',
      btn: 'Zobacz wszystkie projekty',
    },
    ourServices: {
      title: 'Nasze Usługi',
      btn: 'Dowiedz się więcej',
    },
  },
  offer:{
    slogan:"Dostosowujemy nasz proces i metody do Twojego pomysłu. Chociaż naszą główną domeną jest projektowanie i tworzenie stron e-commerce, nie boimy się podejmować nowych wyzwań.",
    ourProcess: {
      title: "Jak działamy",
      timeline: {
        recogniseProblem: {
          name: "Rozpoznanie problemu",
          description: "Słuchamy Twoich pomysłów i wymagań, a następnie przedstawiamy nasz plan stworzenia produktu cyfrowego. Dzięki badaniom odkrywamy potrzeby potencjalnych użytkowników i firmy.",
          category: "Discovery",
          btn: "Czytaj więcej"
        },
        provideSolution: {
          name: "Opracowanie rozwiązania",
          description: "Po dostarczeniu wniosków i rekomendacji tworzymy projekty ekranów, które łączymy w funkcjonalny prototyp, jednocześnie zapraszając Cię do monitorowania naszych postępów.",
          category: "Design",
          btn: "Czytaj więcej"
        },
        deliverProduct: {
          name: "Dostarczenie produktu",
          description: "W fazie rozwoju przekształcamy zaprojektowane rozwiązania w funkcjonalny kod. Testujemy i wdrażamy go, aby stworzyć wersję produktu, która spełnia wcześniej ustalone wymagania i oczekiwania.",
          category: "Develop",
          btn: "Czytaj więcej"
        },
        maintainSolution: {
          name: "Utrzymanie rozwiązania",
          description: "Po uruchomieniu produktu koncentrujemy się na jego płynnym działaniu poprzez monitorowanie jego wydajności, naprawianie wszelkich problemów i aktualizowanie go w razie potrzeby, aby nadal działał dobrze dla użytkowników.",
          category: "Growth",
          btn: "Czytaj więcej"
        }
      }
    }
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
  projectCard: {
    btn: 'Zobacz więcej',
  },
};
