import { i18n } from '@/i18n/helpers';
import { LangType } from '@/types/types';
import { Box, Center, Container, Flex, Text } from '@mantine/core';

type AboutUsProps = {
  lang: LangType;
};

export const AboutUs = ({ lang }: AboutUsProps) => {
  return (
    <Box bg={"supportColor.2"}>
    <Container pt={100} pb={100}>
      <Flex direction={"column"} gap={50}>
        <Text fz={40} fw={500} ta={'center'} c={"grayscale1.0"}>
          {i18n(lang).home.aboutUs.slogan1}
        </Text>
        <Text fz={40} fw={500} ta={'center'} c={"grayscale1.0"}>
          {i18n(lang).home.aboutUs.slogan2}
        </Text>
      </Flex>
    </Container>
    </Box>
  );
};
