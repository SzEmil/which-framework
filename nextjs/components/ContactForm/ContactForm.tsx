import { Box, Container, Flex, Text } from "@mantine/core";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { NextImage } from "../NextImage/NextImage";
import { ContactUsForm } from "./components/ContactUsForm";
import { LangType } from "@/types/types";
import { i18n } from "@/i18n/helpers";

type ContactFormProps = {
  lang: LangType;
};

export const ContactForm = ({ lang }: ContactFormProps) => {
  return (
    <Box w={"100%"} pt={50} pb={50}>
      <Container>
        <Box maw={750}>
          <SectionTitle>{i18n(lang).contactForm.title}</SectionTitle>
          <Text>{i18n(lang).contactForm.description}</Text>
        </Box>
        <Flex justify={"space-between"} align={"center"} w={"100%"} gap={50} mt={20}>
          <ContactUsForm lang={lang} />
          <NextImage
            src={"/contact-form.png"}
            loading="lazy"
            alt={"people dirinking coffe"}
            w={506}
            h={200}
            style={{
              height: "auto",
              aspectRatio: "1/1",
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
};
