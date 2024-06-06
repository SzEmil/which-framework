import { LangType } from "@/types/types";
import { Box, Title } from "@mantine/core";
import React from "react";
import { Timeline } from "./components/Timeline/Timeline";

type OurProcessProps = {
  lang: LangType;
};
export const OurProcess = ({ lang }: OurProcessProps) => {
  return (
    <Box mt={100}>
      <Title order={2} fz={32} fw={700} mb={50}>
        Our Process
      </Title>
      <Timeline lang={lang} />
    </Box>
  );
};
