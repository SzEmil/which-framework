import { Box, Title } from "@mantine/core";
import React from "react";
import css from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <Box className={css.box}>
      <Title order={2} fz={40} fw={700} mb={40} style={{ zIndex: 10, position: "relative" }}>
        {children}
      </Title>
      <Box className={css.circle} style={{ zIndex: 5 }} />
    </Box>
  );
};
