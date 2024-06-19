import { i18n } from "@/i18n/helpers";
import { LangType } from "@/types/types";
import { Box, Center, Container, SimpleGrid, Text, Title } from "@mantine/core";
import { OUR_SERVICES } from "@/constants";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type OurServicesProps = {
  lang: LangType;
};
export const OurServices = ({ lang }: OurServicesProps) => {
  return (
    <Box bg={"supportColor.1"} pb={100} pt={100}>
      <Container>
        <SectionTitle>{i18n(lang).home.ourServices.title}</SectionTitle>
        <Center>
          <SimpleGrid
            cols={{ base: 2, sm: 3 }}
            spacing={{ base: 10, sm: 10, lg: 12 }}
            verticalSpacing={{ base: "md", sm: "xl", lg: 24 }}
          >
            {OUR_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} />
            ))}
          </SimpleGrid>
        </Center>
      </Container>
    </Box>
  );
};
