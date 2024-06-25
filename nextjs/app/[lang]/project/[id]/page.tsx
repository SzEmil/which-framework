import { ContactUsForm } from "@/components/ContactForm/components/ContactUsForm";
import { NextImage } from "@/components/NextImage/NextImage";
import { ProjectBaner } from "@/components/ProjectBaner/ProjectBaner";
import { ProjectSectionTitle } from "@/components/ProjectSectionTitle/ProjectSectionTitle";
import { PROJECTS } from "@/constants";
import { getLanguagesStaticParams, i18n } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import {
  BackgroundImage,
  Box,
  Container,
  Divider,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";

type Params = { id: string } & I18nProps;
type PageProps = {
  params: Params;
};
export const generateStaticParams = getLanguagesStaticParams;

export default function Home({ params: { lang, id } }: PageProps) {
  const project = PROJECTS.find((project) => project.id === +id);
  return (
    <Box>
      <ProjectBaner
        color={project?.color ?? "yellow"}
        title={project?.title ?? ""}
        subTitle={project?.subTitle ?? { pl: "", en: "" }}
        lang={lang}
        baner={project?.baner ?? "https://placehold.co/600x400"}
      />
      <Container w={"100%"}>
        <Flex gap={20} mt={50} mb={50}>
          <Flex direction={"column"}>
            <ProjectSectionTitle color={project?.color ?? "yellow"}>Services</ProjectSectionTitle>
            <List>
              {project?.services[lang].map((service) => (
                <Text fz={16} fw={400} key={nanoid()}>
                  {service}
                </Text>
              ))}
            </List>
          </Flex>
          <Flex direction={"column"}>
            <ProjectSectionTitle color={project?.color ?? "yellow"}>Timeline</ProjectSectionTitle>
            <List>
              {project?.timeline[lang].map((timeline) => (
                <Text fz={16} fw={400} key={nanoid()}>
                  {timeline}
                </Text>
              ))}
            </List>
          </Flex>
        </Flex>
        <Box mb={50}>
          <ProjectSectionTitle color={project?.color ?? "yellow"}>
            About the project
          </ProjectSectionTitle>
          <Text fw={400} fz={16} mb={50}>
            {project?.aboutProject.description[lang]}
          </Text>
          <Image
            alt={project?.name ?? "project"}
            src={project?.aboutProject.image ?? ""}
            height={542}
            width={1120}
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </Box>
        <Box mb={50}>
          <ProjectSectionTitle color={project?.color ?? "yellow"}>Timeline</ProjectSectionTitle>
          <List spacing={20}>
            {project?.challenges[lang].map((timeline) => (
              <ListItem key={nanoid()}>
                <Text fz={24} fw={400}>
                  {timeline}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider
          size={"md"}
          variant="dotted"
          mb={50}
          style={{ borderColor: project?.color ?? "yellow" }}
        />
        <Box mb={50}>
          <Box maw={750}>
            <ProjectSectionTitle color={project?.color ?? "yellow"}>
              Do you like this project?
            </ProjectSectionTitle>
            <Text>{i18n(lang).contactForm.description}</Text>
          </Box>
          <Flex justify={"space-between"} align={"center"} w={"100%"} gap={50} mt={20}>
            <ContactUsForm lang={lang} />
            <Box
              w={522}
              h={522}
              bg={"#F3EFF5"}
              style={{
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NextImage
                loading="lazy"
                src={project?.formImage ?? ""}
                w={200}
                h={400}
                alt={project?.formImage ?? ""}
                style={{
                  height: "auto",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
