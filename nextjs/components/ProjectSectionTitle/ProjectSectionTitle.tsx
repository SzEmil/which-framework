import { Box, Title } from "@mantine/core";
import React from "react";
import css from "./ProjectSectionTitle.module.css";

type ProjectSectionTitleProps = {
  children: React.ReactNode;
  color: string;
};

export const ProjectSectionTitle = ({ color = "yellow", children }: ProjectSectionTitleProps) => {
  return (
    <Box className={css.box}>
      <Title order={2} fz={24} fw={600} mb={20} style={{ zIndex: 10, position: "relative" }}>
        {children}
      </Title>
      <Box className={css.circle} style={{ zIndex: 5, backgroundColor: color }} />
    </Box>
  );
};
