import { ProjectCard, OurServiceCard } from "@/types/types";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { ROUTES } from "./routes";

export const LANGUAGES = ["en", "pl"];

export const SOCIAL_MEDIA = [
  {
    name: "facebook",
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/profile.php?id=61556457022066",
  },
  {
    name: "linkedin",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/minfdev",
  },
];

export const PROJECTS: ProjectCard[] = [
  {
    id: 0,
    name: "Spec na godziny",
    title: "Specnagodziny.pl",
    subTitle: {
      pl: "Aplikacja internetowa służąca do zarządzania serwisantami",
      en: "A web application for managing repair technicians",
    },
    services: {
      pl: ["Projektowanie UX", "Badania UX", "Tworzenie aplikacji internetowych"],
      en: ["UX Design", "UX Research", "Web Application Development"],
    },
    timeline: {
      pl: ["Kwiecień 2024"],
      en: ["April 2024"],
    },
    aboutProject: {
      description: {
        pl: "Projekt aplikacji internetowej ma na celu usprawnienie zarządzania firmą poprzez ułatwienie wynajmu wykwalifikowanych specjalistów do różnych zadań. Użytkownicy mogą łatwo przeglądać różnorodne grono ekspertów, wybierać tych, którzy odpowiadają ich potrzebom, i efektywnie zarządzać swoimi rezerwacjami. Dzięki intuicyjnym funkcjom i bezproblemowej obsłudze, nasza aplikacja umożliwia firmom optymalizację zarządzania zasobami ludzkimi bez wysiłku.",
        en: "Web application project aims to streamline company management by facilitating the rental of skilled professionals for various tasks. Users can easily browse through a diverse pool of experts, select the ones that match their needs, and efficiently manage their bookings. With intuitive features and seamless functionality, our app empowers businesses to optimize their workforce management effortlessly.",
      },
      image: "/specnagodziny-about.png",
    },
    challenges: {
      pl: [
        "Algorytm dopasowywania: Opracowanie solidnego algorytmu, który efektywnie dopasowuje wykwalifikowanych specjalistów do konkretnych wymagań pracy, uwzględniając takie czynniki jak lokalizacja, dostępność i umiejętności.",
        "Zaufanie i bezpieczeństwo użytkowników: Wprowadzenie środków zapewniających bezpieczeństwo i niezawodność zarówno usługodawców, jak i klientów, w tym weryfikacje przeszłości, oceny i recenzje.",
        "Skalowalność: Projektowanie platformy tak, aby mogła pomieścić potencjalny wzrost liczby użytkowników i ofert usług bez utraty wydajności ani doświadczenia użytkownika.",
        "Optymalizacja mobilna: Zapewnienie płynnej funkcjonalności i doświadczenia użytkownika na różnych urządzeniach mobilnych i systemach operacyjnych, z uwzględnieniem unikalnych wyzwań związanych z rozwojem aplikacji mobilnych i użytecznością.",
      ],
      en: [
        "Matching Algorithm: Developing a robust algorithm to match skilled professionals with specific job requirements efficiently while considering factors like location, availability, and skillset.",
        "User Trust and Safety: Implementing measures to ensure the safety and reliability of both service providers and clients, including background checks, ratings, and reviews.",
        "Scalability: Designing the platform to accommodate potential growth in both user base and service offerings without sacrificing performance or user experience.",
        "Mobile Optimization: Ensuring seamless functionality and user experience across various mobile devices and operating systems, considering the unique challenges of mobile app development and usability.",
      ],
    },
    description: {
      pl: "Mobilna aplikacja webowa usprawniająca zarządzanie firmą wynajmującą fachowców do różnych napraw. Aplikacja zapewnia efektywne planowanie i komunikację, oferuje aktualizacje w czasie rzeczywistym dotyczące postępów w pracy oraz integruje systemy fakturowania i płatności, umożliwiając płynne transakcje.",
      en: "Mobile web application for streamlines the management of a company that rents out professionals for various repairs, ensuring efficient scheduling and communication. It provides real-time updates on job progress and integrates invoicing and payment systems for seamless transactions.",
    },
    images: ["/case-studies-spec.png"],
    baner: "/specNaGodziny-baner.png",
    color: "#FFD707",
    formImage: "/specnagodziny-mobile-device.png",
  },
  {
    id: 1,
    name: "PrezentyDlaCiebie",
    title: "PrezentyDlaCiebie",
    subTitle: {
      pl: "Innowacyjna platforma e-commerce",
      en: "Innovative e-commerce platform",
    },
    services: {
      pl: ["Projektowanie UX", "Badania UX", "Tworzenie aplikacji internetowych"],
      en: ["UX Design", "UX Research", "Web Application Development"],
    },
    timeline: {
      pl: [
        "Wrzesień 2023 - Listopad 2023",
        "Wrzesień 2024 - Listopad 2024",
        "Październik 2023 - Maj 2024",
      ],
      en: [
        "September 2023-November 2023",
        "September 2024-November 2024",
        "October 2023- May 2024",
      ],
    },
    aboutProject: {
      description: {
        pl: "Minfcomerence to innowacyjna platforma e-commerce stworzona z myślą o potrzebach współczesnych sprzedawców. Nasz cel to wsparcie Twojego biznesu i ułatwienie Ci dotarcia do szerokiego grona klientów.",
        en: "Minfcomerence is an innovative e-commerce platform designed to meet the needs of modern sellers. Our goal is to support your business and make it easier for you to reach a wider audience.",
      },
      image: "/prezentydlaciebie1.png",
    },
    challenges: {
      pl: [
        "Optymalizacja SEO: Upewnienie się, że platforma jest zoptymalizowana pod kątem wyszukiwarek, aby przyciągać organiczny ruch.",
        "Wydajność: Zapewnienie, że platforma działa płynnie i szybko, nawet przy dużej liczbie użytkowników i transakcji.",
        "Integracja z systemami płatności: Ułatwienie płynnych i bezpiecznych transakcji poprzez integrację z popularnymi systemami płatności.",
      ],
      en: [
        "SEO Optimization: Ensuring the platform is search engine optimized to attract organic traffic.",
        "Performance: Ensuring the platform operates smoothly and quickly, even with a high number of users and transactions.",
        "Payment Gateway Integration: Facilitating seamless and secure transactions by integrating with popular payment systems.",
      ],
    },
    description: {
      pl: "Minfcomerence to innowacyjna platforma e-commerce stworzona z myślą o potrzebach współczesnych sprzedawców. Nasz cel to wsparcie Twojego biznesu i ułatwienie Ci dotarcia do szerokiego grona klientów.",
      en: "Minfcomerence is an innovative e-commerce platform designed to meet the needs of modern sellers. Our goal is to support your business and make it easier for you to reach a wider audience.",
    },
    images: ["/case-studies-minfdev.png", "/prezentydlaciebie1.png"],
    baner: "/prezentydlaciebie1.png",
    color: "#5A4098",
    formImage: "/specnagodziny-mobile-device.png",
  },
];

export const OUR_SERVICES: OurServiceCard[] = [
  {
    id: 0,
    name: {
      pl: "Sklep internetowy",
      en: "E-commerce",
    },
    description: {
      pl: "Sprawiamy, że Twoja firma e-commerce jest bardziej wydajna i dochodowa dzięki naszym kompleksowym rozwiązaniom, obejmującym projektowanie sklepów internetowych, integrację płatności i marketing cyfrowy.",
      en: "We empower your e-commerce business to be more efficient and profitable with our comprehensive solutions, including e-commerce store design, payment gateway integration, and digital marketing.",
    },
    image: "/services-ecomerce.svg",
    href: "/",
  },
  {
    id: 1,
    name: {
      pl: "UI/UX Design",
      en: "UI/UX Design",
    },
    description: {
      pl: "Tworzymy intuicyjne i angażujące interfejsy użytkownika (UI) i doświadczenia użytkownika (UX), które zwiększają satysfakcję klientów i napędzają wzrost firmy.",
      en: "We craft intuitive and engaging user interfaces (UI) and user experiences (UX) that enhance customer satisfaction and drive business growth.",
    },
    image: "/services-usxdesign.svg",
    href: ROUTES.uxDesign,
  },
  {
    id: 2,
    name: {
      pl: "Strony",
      en: "Websites",
    },
    description: {
      pl: "Tworzymy strony internetowe, które są nie tylko piękne, ale również funkcjonalne i zoptymalizowane pod kątem wyszukiwarek, aby pomóc Ci w osiągnięciu Twoich celów biznesowych.",
      en: "We build websites that are not only beautiful but also functional and search engine optimized to help you achieve your business goals.",
    },
    image: "/services-website.svg",
    href: "/",
  },
  {
    id: 3,
    name: {
      pl: "Aplikacje mobilne",
      en: "Mobile applications",
    },
    description: {
      pl: "Tworzymy natywne i hybrydowe aplikacje mobilne, które zapewniają użytkownikom wyjątkowe i wciągające doświadczenia.",
      en: "We develop native and hybrid mobile apps that deliver exceptional and engaging user experiences.",
    },
    image: "/services-mobileapp.svg",
    href: "/",
  },
  {
    id: 4,
    name: {
      pl: "Aplikacje internetowe",
      en: "Web applications",
    },
    description: {
      pl: "Tworzymy spersonalizowane aplikacje webowe szyte na miarę Twoich potrzeb biznesowych, zapewniające płynne i bezpieczne działanie na wszystkich urządzeniach.",
      en: "We develop custom web applications tailored to your specific business needs, ensuring seamless and secure operation across all devices.",
    },
    image: "/services-webapp.svg",
    href: "/",
  },
  {
    id: 4,
    name: {
      pl: "Usługi analityczne",
      en: "Analytics solutions",
    },
    description: {
      pl: "Zapewniamy kompleksowe rozwiązania analityczne, które pomagają Ci zrozumieć zachowanie użytkowników, zoptymalizować kampanie marketingowe i zwiększyć zwrot z inwestycji (ROI).",
      en: "We provide comprehensive analytics solutions that help you understand user behavior, optimize marketing campaigns, and boost your ROI.",
    },
    image: "/services-analytics.svg",
    href: "/",
  },
];

export const UxTimelineData = [
  {
    name: {
      pl: "BADANIA",
      en: "RESEARCH",
    },
    description: {
      pl: "Badania UX polegają na zbieraniu informacji o zachowaniach użytkowników, ich potrzebach i motywacjach za pomocą takich technik jak wywiady, ankiety i testy użyteczności. Pomaga to zidentyfikować problemy i obszary do poprawy. Dzięki zastosowaniu tych informacji projektanci mogą tworzyć bardziej efektywne i satysfakcjonujące doświadczenia użytkowników.",
      en: "UX research involves gathering insights about users' behaviors, needs, and motivations through techniques like interviews, surveys, and usability testing. Helps identify pain points and areas for improvement. By applying insights, designers can create more effective and satisfying user experiences.",
    },
    image: "/offer-ux-research.svg",
  },
  {
    name: {
      pl: "PROJEKTOWANIE UX",
      en: "UX DESIGN",
    },
    description: {
      pl: "Projektowanie UX, oparte na badaniach, koncentruje się na tworzeniu przyjaznych i przyjemnych doświadczeń dla użytkowników. Analizując dane z badań użytkowników, projektanci uzyskują wgląd w potrzeby i zachowania użytkowników. Te informacje kierują procesem projektowania, co skutkuje intuicyjnymi interfejsami, które zwiększają satysfakcję i zaangażowanie użytkowników.",
      en: "UX design, informed by research, focuses on creating user-friendly and enjoyable experiences. By analyzing data from user research, designers gain insights into user needs and behaviors. These insights guide the design process, resulting in intuitive interfaces that enhance user satisfaction and engagement.",
    },
    image: "/offer-ux-uxdesign.svg",
  },
  {
    name: {
      pl: "UTRZYMANIE",
      en: "MAINTENANCE",
    },
    description: {
      pl: "Utrzymanie w projektowaniu UX polega na ciągłym monitorowaniu i optymalizowaniu doświadczeń użytkowników produktu lub usługi po ich początkowym wprowadzeniu. Obejmuje zbieranie opinii od użytkowników, analizowanie metryk i rozwiązywanie wszelkich problemów lub aktualizacji, które się pojawiają. Dzięki utrzymaniu projektanci zapewniają, że produkt pozostaje efektywny i przyjemny dla użytkowników, co sprzyja długoterminowej satysfakcji i lojalności.",
      en: "Maintenance in UX design involves continuously monitoring and optimizing the user experience of a product or service after its initial launch. It includes gathering feedback from users, analyzing metrics, and addressing any issues or updates that arise. By maintaining, designers ensure that the product remains effective and enjoyable for users, thereby fostering long-term satisfaction and loyalty.",
    },
    image: "/offer-ux-maintenance.svg",
  },
];
