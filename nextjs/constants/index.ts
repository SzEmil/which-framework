import { ProjectCard, OurServiceCard } from "@/types/types";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

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
    description: {
      pl: "Mobilna aplikacja webowa usprawniająca zarządzanie firmą wynajmującą fachowców do różnych napraw. Aplikacja zapewnia efektywne planowanie i komunikację, oferuje aktualizacje w czasie rzeczywistym dotyczące postępów w pracy oraz integruje systemy fakturowania i płatności, umożliwiając płynne transakcje.",
      en: "Mobile web application for streamlines the management of a company that rents out professionals for various repairs, ensuring efficient scheduling and communication. It provides real-time updates on job progress and integrates invoicing and payment systems for seamless transactions.",
    },
    images: ["/case-studies-spec.png"],
    baner: "/specNaGodziny-baner.png",
  },
  {
    id: 1,
    name: "PrezentyDlaCiebie",
    description: {
      pl: "Minfcomerence to innowacyjna platforma e-commerce stworzona z myślą o potrzebach współczesnych sprzedawców. Nasz cel to wsparcie Twojego biznesu i ułatwienie Ci dotarcia do szerokiego grona klientów.",
      en: "Minfcomerence is an innovative e-commerce platform designed to meet the needs of modern sellers. Our goal is to support your business and make it easier for you to reach a wider audience.",
    },
    images: ["/case-studies-minfdev.png", "/prezentydlaciebie1.png"],
    baner: "/specNaGodziny-baner.png",
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
  },
];
