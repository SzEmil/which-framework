import { i18n } from '@/i18n/helpers';
import { Box, Flex, Stack, Text } from '@mantine/core';
import css from './FooterNavigation.module.css';
import Link from 'next/link';

type FooterNavigationProps = {
  lang: string;
};

export const FooterNavigation = ({ lang }: FooterNavigationProps) => {
  return (
    <Flex gap={20} align={'flex-start'}>
      <Box>
        <Text fw={500} fz={16} pb={15}>
          {i18n(lang).footer.nav.offer.title}
        </Text>
        <Stack gap={10}>
          <Link href={'/'} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.offer.whatWeCanDo}
            </Text>
          </Link>
          <Link href={'/'} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.offer.ourProcess}
            </Text>
          </Link>
        </Stack>
      </Box>
      <Box>
        <Text fw={500} fz={16} pb={15}>
          {i18n(lang).footer.nav.caseStudies.title}
        </Text>
        <Stack gap={10}>
          <Link href={'/'} className={css.link}>
            <Text fw={400} fz={12}>
              Prezenty dla Ciebie
            </Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
};
