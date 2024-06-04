import { i18n } from '@/i18n/helpers';
import { Center, Container, Text } from '@mantine/core';

type AboutUsProps = {
  lang: string;
};

export const AboutUs = ({ lang }: AboutUsProps) => {
  return (
    <Container pt={150} pb={150}>
      <Center>
        <Text fz={40} fw={500} ta={'center'}>
          {i18n(lang).home.aboutUs.slogan}
        </Text>
      </Center>
    </Container>
  );
};
