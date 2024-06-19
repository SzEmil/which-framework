import { i18n } from "@/i18n/helpers";
import { Box, Flex, Stack, Text } from "@mantine/core";
import css from "./FooterNavigation.module.css";
import { NextLink } from "@/components/NextLink/NextLink";
import { LangType } from "@/types/types";
import { ROUTES } from "@/constants/routes";
import { PROJECTS } from "@/constants";

type FooterNavigationProps = {
  lang: LangType;
};

export const FooterNavigation = ({ lang }: FooterNavigationProps) => {
  return (
    <Flex gap={20} align={"flex-start"}>
      <Box>
        <Text fw={500} fz={16} pb={15}>
          {i18n(lang).footer.nav.termsAndConditions.title}
        </Text>
        <Stack gap={10}>
          <NextLink href={ROUTES.offer} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.termsAndConditions.terms}
            </Text>
          </NextLink>
          <NextLink href={"/"} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.termsAndConditions.nda}
            </Text>
          </NextLink>
        </Stack>
      </Box>
      <Box>
        <Text fw={500} fz={16} pb={15}>
          {i18n(lang).footer.nav.offer.title}
        </Text>
        <Stack gap={10}>
          <NextLink href={ROUTES.offer} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.offer.whatWeCanDo}
            </Text>
          </NextLink>
          <NextLink href={"/"} className={css.link}>
            <Text fw={400} fz={12}>
              {i18n(lang).footer.nav.offer.ourProcess}
            </Text>
          </NextLink>
        </Stack>
      </Box>
      <Box>
        <Text fw={500} fz={16} pb={15}>
          {i18n(lang).footer.nav.caseStudies.title}
        </Text>
        <Stack gap={10}>
          {PROJECTS.map((project) => (
            <NextLink
              key={project.id}
              href={`${ROUTES.project}/${project.id}`}
              className={css.link}
            >
              <Text fw={400} fz={12}>
                {project.name}
              </Text>
            </NextLink>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};
