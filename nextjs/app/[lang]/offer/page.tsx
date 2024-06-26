import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box, Container, Text } from "@mantine/core";
import React from "react";
import { i18n } from "@/i18n/helpers";
import { OurProcess } from "@/components/OurProcess/OurProcess";

export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type OfferPageProps = {
  params: Params;
};

const OfferPage = ({ params: { lang } }: OfferPageProps) => {
  return (
    <Container pt={70}>
      <Box pt={100} pb={100}>
        <Text fz={32} fw={600}>
          {i18n(lang).offer.slogan}
        </Text>
        <OurProcess lang={lang} />
      </Box>
    </Container>
  );
};

export default OfferPage;
