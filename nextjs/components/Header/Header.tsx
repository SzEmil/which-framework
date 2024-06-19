import { ROUTES } from "@/constants/routes";
import { i18n } from "@/i18n/helpers";
import { Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import { NextLink } from "../NextLink/NextLink";
import { LangType } from "@/types/types";
import Link from "next/link";

type HeaderProps = {
  lang: LangType;
};

export const Header = ({ lang }: HeaderProps) => {
  return (
    <Flex align={"center"} justify={"space-between"} gap={10} pt={15} pb={15}>
      <NextLink href={ROUTES.home}>
        <Image
          src={"/minfdev-logo-dark.png"}
          alt="logo"
          height={40}
          width={200}
          style={{ height: "auto", display: "block" }}
        />
      </NextLink>
      <Flex align={"center"} gap={50} fz={16} fw={400}>
        <NextLink href={ROUTES.offer}>
          <Text>{i18n(lang).header.nav.whatCanWeOffer}</Text>
        </NextLink>
        <NextLink href={"/"}>
          <Text>{i18n(lang).header.nav.caseStudies}</Text>
        </NextLink>
      </Flex>
      <Button
        component={Link}
        href={ROUTES.contact}
        fw={400}
        c={"themePrimary.0"}
        size="lg"
      >
        {i18n(lang).header.btn}
      </Button>
    </Flex>
  );
};
