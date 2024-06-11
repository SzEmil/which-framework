import { Box, Container, Flex, Text } from "@mantine/core";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { NextImage } from "../NextImage/NextImage";
import { ContactUsForm } from "./ContactUsForm";
import { LangType } from "@/types/types";

type ContactFormProps = {
  lang: LangType;
};

export const ContactForm = ({ lang }: ContactFormProps) => {
  return (
    <Box w={"100%"} pt={50} pb={50}>
      <Container>
        <Box maw={640}>
          <SectionTitle>Tell us how we can help you</SectionTitle>
          <Text>
            Please fill out the form or reach out to us at hello@minfdev.com, and we ll get back to
            you as soon as possible.
          </Text>
        </Box>
        <Flex justify={"space-between"} align={"center"} w={"100%"} gap={50}>
          <ContactUsForm lang={lang}/>
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
