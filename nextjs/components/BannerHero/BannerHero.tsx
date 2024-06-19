import { PROJECTS } from "@/constants";
import { ROUTES } from "@/constants/routes";
import { i18n } from "@/i18n/helpers";
import { LangType } from "@/types/types";
import { Box, Button, Container, Flex, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

type BannerHeroProps = {
  lang: LangType;
};
export const BannerHero = ({ lang }: BannerHeroProps) => {
  const newProjectId = Math.max(...PROJECTS.map((project) => project.id));
  return (
    <Flex h={"100vh"} align={"center"} justify={"center"} w={"100%"}>
      <Container maw={1200} w={"100%"}>
        <Flex align={"center"} justify={"space-between"} w={"100%"} gap={10}>
          <Box pos={"relative"}>
            <Stack gap={30} w={"100%"} maw={550}>
              <Text fz={30} fw={400} style={{ zIndex: 100 }}>
                {i18n(lang).home.bannerHero.slogan1}
              </Text>
              <Title order={1} fz={50} fw={700} style={{ zIndex: 100 }} tt={"uppercase"}>
                {i18n(lang).home.bannerHero.slogan2}
              </Title>
            </Stack>
            <Image
              src={"/baner-circle.svg"}
              alt="devices"
              width={650}
              height={200}
              style={{
                height: "auto",
                display: "block",
                position: "absolute",
                zIndex: 0,
                top: -80,
                left: -150,
              }}
            />
            <Image
              src={"/baner-green-circle.svg"}
              alt="devices"
              width={200}
              height={200}
              style={{
                height: "auto",
                display: "block",
                position: "absolute",
                zIndex: -1,
                bottom: -90,
                right: 50,
              }}
            />
          </Box>

          <Stack gap={40} align="flex-start">
            <Button
              style={{ zIndex: 100 }}
              display={"inline"}
              variant="filled"
              c={"themePrimary.0"}
              autoContrast
              href={`${ROUTES.project}/${newProjectId}`}
              component={Link}
              size="lg"
              fw={700}
              fz={16}
              rightSection={<IconArrowRight size={24} />}
            >
              {i18n(lang).home.bannerHero.btn}
            </Button>
            <Image
              src={"/banner-hero-devices.svg"}
              alt="devices"
              width={650}
              height={200}
              style={{ height: "auto", display: "block" }}
            />
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};
