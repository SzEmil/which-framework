import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box, Button, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { i18n } from "@/i18n/helpers";
import { UxDesign } from "@/components/uxDesign/UxDesign";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export const generateStaticParams = getLanguagesStaticParams;

type Params = I18nProps;
type UxDesignPageProps = {
  params: Params;
};

const UxDesignPage = ({ params: { lang } }: UxDesignPageProps) => {
  return (
    <Box pb={100}>
      <Box
        bg={"#F3EFF5"}
        h={"100vh"}
        pt={0}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container w={"100%"}>
          <Flex justify={"space-between"} align={"center"}>
            <Flex direction={"column"} w={"100%"} maw={350}>
              <Text fz={50} fw={600}>
                UX Design
              </Text>
              <Text fz={24} fw={400} mt={10}>
                Focus on creating products that provide meaningful and relevant experiences to users{" "}
              </Text>
              <Button
                mt={40}
                w={"100%"}
                type="submit"
                variant="filled"
                c={"themePrimary.0"}
                fw={500}
                size="md"
                rightSection={<IconArrowRight size={18} stroke={2} />}
                component={Link}
                href={ROUTES.contact}
              >
                Grow your ideas with us
              </Button>
            </Flex>
            <Box
              bg={"#46B587"}
              style={{
                borderRadius: "50%",
                width: "420px",
                height: "420px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/offer-ux-baner.svg"}
                width={400}
                height={200}
                style={{ display: "block", width: "420px", height: "auto" }}
                alt={"baner ux"}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Container mt={100}>
        <Text fz={40} fw={600}>
          UX Design step by step
        </Text>
        <Text fz={30} fw={400} mt={20}>
          Achieve increased user satisfaction and engagement by creating intuitive and enjoyable
          experiences. Lead to higher conversion rates and customer loyalty by addressing and
          meeting user needs effectively.
        </Text>
        <UxDesign lang={lang} />
      </Container>
    </Box>
  );
};

export default UxDesignPage;
