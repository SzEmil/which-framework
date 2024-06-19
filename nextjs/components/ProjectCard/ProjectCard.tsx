import { Button, Card, CardSection, Text } from "@mantine/core";
import { NextLink } from "../NextLink/NextLink";
import { NextImage } from "../NextImage/NextImage";
import { LangType, ProjectCard as ProjectCardType } from "@/types/types";
import { IconArrowRight } from "@tabler/icons-react";
import css from "./ProjectCard.module.css";
import { i18n } from "@/i18n/helpers";

type ProjectCardProps = {
  lang: LangType;
  project: ProjectCardType;
};

export const ProjectCard = ({
  lang,
  project: { id, images, name, description },
}: ProjectCardProps) => {
  //TODO: Redirect link to route about project description
  return (
    <Card
      miw={{ base: 150, sm: 180 }}
      maw={550}
      w={550}
      h={550}
      padding={0}
      radius={8}
      className={css.card}
    >
      <CardSection>
        <NextLink href={`/`}>
          <NextImage
            src={images[0]}
            loading="lazy"
            alt={name}
            w={200}
            h={200}
            style={{
              width: "100%",
              height: "100%",
              aspectRatio: "1/1",
            }}
          />
        </NextLink>
      </CardSection>

      <CardSection p={12} pt={20} className={css.hoverCard}>
        <NextLink href={`/`}>
          <Text fz={18} fw={700} mb={10}>
            {name}
          </Text>
        </NextLink>
        <Text fz={16} fw={400} mb={10}>
          {description[lang]}
        </Text>
        <Button
          variant="transparent"
          bg="transparent"
          autoContrast
          type="submit"
          fw={700}
          fz={16}
          rightSection={<IconArrowRight size={24} />}
        >
          {i18n(lang).projectCard.btn}
        </Button>
      </CardSection>
    </Card>
  );
};
