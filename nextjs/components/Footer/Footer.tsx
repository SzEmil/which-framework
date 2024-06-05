import { Flex } from '@mantine/core';
import Image from 'next/image';
import { SocialMedia } from './components/SocialMedia/SocialMedia';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { FooterNavigation } from './components/FooterNavigation/FooterNavigation';
import { Newsletter } from './components/Newsletter/Newsletter';
import { LangType } from '@/types/types';

type FooterProps = {
  lang: LangType;
};
export const Footer = ({ lang }: FooterProps) => {
  return (
    <Flex align={'flex-start'} justify={'space-between'} pt={50} pb={50}>
      <Flex direction={'column'} gap={20} justify={'space-between'}>
        <Link href={ROUTES.home}>
          <Image
            src={'/minfdev-logo-dark.png'}
            alt="logo"
            height={40}
            width={150}
            style={{ height: 'auto', display: 'block' }}
          />
        </Link>
        <SocialMedia />
      </Flex>
      <FooterNavigation lang={lang} />
      <Newsletter lang={lang} />
    </Flex>
  );
};
