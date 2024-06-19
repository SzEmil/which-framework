import { Box, Button, Center, Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { PROJECTS } from "@/constants";
import { LangType } from "@/types/types";
import Link from "next/link";
import { i18n } from "@/i18n/helpers";
import { SectionTitle } from "../SectionTitle/SectionTitle";

type CaseStudiesProps = {
  lang: LangType;
};
export const CaseStudies = ({ lang }: CaseStudiesProps) => {
  return (
    <Box pt={100} pb={100}>
      <Container>
        <SectionTitle>{i18n(lang).home.caseStudies.title}</SectionTitle>
        <Center>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: 10, sm: 10, lg: 12 }}
            verticalSpacing={{ base: "md", sm: "xl", lg: 24 }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard lang={lang} key={project.id} project={project} />
            ))}
          </SimpleGrid>
        </Center>
      </Container>
    </Box>
  );
};
