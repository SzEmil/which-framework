import { LangType, OurServiceCard } from "@/types/types";
import { Box, Button, Card, CardSection, Flex, Text } from "@mantine/core";
import { NextLink } from "../NextLink/NextLink";
import { NextImage } from "../NextImage/NextImage";
import { IconArrowRight } from "@tabler/icons-react";
import { i18n } from "@/i18n/helpers";
import Link from "next/link";

type ServiceCardProps = {
  lang: LangType;
  service: OurServiceCard;
};

export const ServiceCard = ({
  lang,
  service: { id, name, description, image },
}: ServiceCardProps) => {
  return (
    <Card
      miw={{ base: 150, sm: 180 }}
      maw={550}
      h={"100%"}
      padding={0}
      radius={16}
      style={{ flexGrow: 1 }}
    >
      <CardSection>
        <NextLink href={`/`}>
          <NextImage
            src={image}
            loading="lazy"
            alt={name[lang]}
            w={200}
            h={200}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: 400,
              aspectRatio: "1/1",
            }}
          />
        </NextLink>
      </CardSection>
      <CardSection
        pb={12}
        pl={12}
        pr={12}
        h={"100%"}
        display={"inline-flex"}
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <NextLink href={`/`}>
            <Text fz={40} fw={700} mb={10}>
              {name[lang]}
            </Text>
          </NextLink>

          <Text fz={16} fw={400} mb={10} display={"flex"} style={{ flexGrow: 1 }}>
            {description[lang]}
          </Text>
        </Box>
        <Button
          display={"inline"}
          bg={"supportColor.2"}
          c={"grayscale1.0"}
          href={"/"}
          component={Link}
          size="lg"
          fw={500}
          fz={16}
          rightSection={<IconArrowRight size={24} stroke={1.1} />}
        >
          {i18n(lang).home.ourServices.btn}
        </Button>
      </CardSection>
    </Card>
  );
};
