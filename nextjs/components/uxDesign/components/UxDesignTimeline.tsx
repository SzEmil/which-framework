"use client";
import { LangType } from "@/types/types";
import { Box, Flex, Timeline as MantineTimeline, Text, TimelineItem } from "@mantine/core";
import { nanoid } from "nanoid";
import { useState } from "react";
import css from "./Timeline.module.css";
import { UxTimelineData } from "@/constants";
import Image from "next/image";

type UxDesignTimelineProps = {
  lang: LangType;
};

export const UxDesignTimeline = ({ lang }: UxDesignTimelineProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <MantineTimeline
      my={100}
      active={activeItem}
      bulletSize={66}
      lineWidth={2}
      classNames={{ itemTitle: css.itemTitle }}
    >
      {UxTimelineData.map((step, index) => (
        <TimelineItem
          onClick={() => setActiveItem(index)}
          key={nanoid()}
          bullet={<Box style={{ backgroundColor: "#63FFBE", borderRadius: "50%" }} />}
          title={step.name[lang]}
          className={`${css.timeline} ${activeItem >= index ? css["timeline-active"] : ""}`}
        >
          <Flex w={"100%"} justify={"space-between"} align={"flex-start"} gap={100}>
            <Text fw={400} fz={16} maw={450}>
              {step.description[lang]}
            </Text>
            <Image
              src={step.image}
              width={400}
              height={200}
              className={activeItem === index ? css.imageColored : css.imageGrayscale}
              alt={step.name[lang]}
              style={{ display: "block", width: "50%", height: "auto" }}
            />
          </Flex>
        </TimelineItem>
      ))}
    </MantineTimeline>
  );
};
