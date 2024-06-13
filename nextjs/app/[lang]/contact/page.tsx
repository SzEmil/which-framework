import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box } from "@mantine/core";
import React from "react";
import { i18n } from "@/i18n/helpers";
import { ContactForm } from "@/components/ContactForm/ContactForm";

export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type ContactPageProps = {
  params: Params;
};

const ContactPage = ({ params: { lang } }: ContactPageProps) => {
  return (
    <Box pt={50} pb={100}>
      <ContactForm lang={lang} />
    </Box>
  );
};

export default ContactPage;
