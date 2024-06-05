import { ProjectCard } from '@/types/types';
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';

export const LANGUAGES = ['en', 'pl'];

export const SOCIAL_MEDIA = [
  {
    name: 'facebook',
    icon: IconBrandFacebook,
    href: 'https://www.facebook.com/profile.php?id=61556457022066',
  },
  {
    name: 'linkedin',
    icon: IconBrandLinkedin,
    href: 'https://www.linkedin.com/company/minfdev',
  },
];

export const PROJECTS: ProjectCard[] = [
  {
    id: 0,
    name: 'PrezentyDlaCiebie',
    description: {
      pl: 'Minfcomerence to innowacyjna platforma e-commerce stworzona z myślą o potrzebach współczesnych sprzedawców. Nasz cel to wsparcie Twojego biznesu i ułatwienie Ci dotarcia do szerokiego grona klientów.',
      en: 'Minfcomerence is an innovative e-commerce platform designed to meet the needs of modern sellers. Our goal is to support your business and make it easier for you to reach a wider audience.',
    },
    images: ['https://picsum.photos/550', '/prezentydlaciebie1.png'],
  },
  {
    id: 0,
    name: 'PrezentyDlaCiebie',
    description: {
      pl: 'Minfcomerence to innowacyjna platforma e-commerce stworzona z myślą o potrzebach współczesnych sprzedawców. Nasz cel to wsparcie Twojego biznesu i ułatwienie Ci dotarcia do szerokiego grona klientów.',
      en: 'Minfcomerence is an innovative e-commerce platform designed to meet the needs of modern sellers. Our goal is to support your business and make it easier for you to reach a wider audience.',
    },
    images: ['https://picsum.photos/550', '/prezentydlaciebie1.png'],
  },
];
