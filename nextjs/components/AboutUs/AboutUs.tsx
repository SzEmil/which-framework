import { i18n } from '@/i18n/helpers';
import { LangType } from '@/types/types';
import { Center, Container, Text } from '@mantine/core';

type AboutUsProps = {
  lang: LangType;
};

export const AboutUs = ({ lang }: AboutUsProps) => {
  return (
    <Container pt={100} pb={100}>
      <Center>
        <Text fz={40} fw={500} ta={'center'}>
          {i18n(lang).home.aboutUs.slogan}
        </Text>
      </Center>
    </Container>
  );
};
