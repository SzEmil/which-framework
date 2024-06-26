import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box, Container } from "@mantine/core";
import React, { ReactNode } from "react";

export const generateStaticParams = getLanguagesStaticParams;

type OfferUxDesignLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const OfferUxDesignLayout = ({ children, params: { lang } }: OfferUxDesignLayoutProps) => {
  return <Box>{children}</Box>;
};

export default OfferUxDesignLayout;
