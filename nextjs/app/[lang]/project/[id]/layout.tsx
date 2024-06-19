import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box, Container } from "@mantine/core";
import React, { ReactNode } from "react";

export const generateStaticParams = getLanguagesStaticParams;

type ProductsLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const ProjectLayout = ({ children, params: { lang } }: ProductsLayoutProps) => {
  return <Box pt={70}>{children} </Box>;
};

export default ProjectLayout;
