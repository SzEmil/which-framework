import { LangType } from "@/types/types";
import { Box } from "@mantine/core";
import React from "react";
import { UxDesignTimeline } from "./components/UxDesignTimeline";

type UxDesignProps = {
  lang: LangType;
};

export const UxDesign = ({ lang }: UxDesignProps) => {
  return (
    <Box>
      <UxDesignTimeline lang={lang} />
    </Box>
  );
};
