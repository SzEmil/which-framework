import { ROUTES } from '@/constants/routes';
import { i18n } from '@/i18n/helpers';
import { Button, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  lang: string;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <Flex align={'center'} justify={'space-between'} gap={10} pt={15} pb={15}>
      <Link href={ROUTES.home}>
        {' '}
        <Image
          src={'/minfdev-logo-dark.png'}
          alt="logo"
          height={40}
          width={200}
          style={{ height: 'auto', display: 'block' }}
        />
      </Link>
      <Flex align={'center'} gap={50} fz={16} fw={400}>
        <Link href={'/'}>
          <Text>{i18n(lang).header.nav.whatCanWeOffer}</Text>
        </Link>
        <Link href={'/'}>
          <Text>{i18n(lang).header.nav.caseStudies}</Text>
        </Link>
      </Flex>
      <Button variant="outline">{i18n(lang).header.btn}</Button>
    </Flex>
  );
};
