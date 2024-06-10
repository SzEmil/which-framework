"use client";
import { i18n } from "@/i18n/helpers";
import { LangType } from "@/types/types";
import { Button, Flex, Timeline as MantineTimeline, Text, TimelineItem } from "@mantine/core";
import { IconGitBranch, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { ContentSchema } from "@/i18n/schema";
import { nanoid } from "nanoid";
import { useState } from "react";
import css from "./Timeline.module.css";

type TimelineKeys = keyof ContentSchema["offer"]["ourProcess"]["timeline"];
type TimelineProps = {
  lang: LangType;
};
export const Timeline = ({ lang }: TimelineProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const timeLineData = i18n(lang).offer.ourProcess.timeline;
  //TODO: icon pick depends on timelineData[step] name ex. if .. ===deliverproduct => icon
  return (
    <MantineTimeline
      active={activeItem}
      bulletSize={66}
      lineWidth={2}
      classNames={{ itemTitle: css.itemTitle }}
    >
      {Object.keys(timeLineData).map((step, index) => (
        <TimelineItem
          onClick={() => setActiveItem(index)}
          key={nanoid()}
          bullet={<IconGitBranch size={42} />}
          title={timeLineData[step as TimelineKeys].name}
          className={`${css.timeline} ${activeItem >= index ? css["timeline-active"] : ""}`}
        >
          <Flex w={"100%"} justify={"space-between"}>
            <Text fw={400} fz={16} maw={840}>
              {timeLineData[step as TimelineKeys].description}
            </Text>
            <Text fw={700} fz={24}>
              {timeLineData[step as TimelineKeys].category}
            </Text>
          </Flex>
          <Button
            fz={16}
            fw={700}
            component={Link}
            href={"/"}
            variant="transparent"
            rightSection={<IconArrowRight size={14} />}
            mt={20}
          >
            {timeLineData[step as TimelineKeys].btn}
          </Button>
        </TimelineItem>
      ))}
    </MantineTimeline>
  );
};
