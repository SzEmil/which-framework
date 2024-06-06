import { i18n } from "@/i18n/helpers";
import { LangType } from "@/types/types";
import { Button, Timeline as MantineTimeline, Text, TimelineItem } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import Link from "next/link";
import { ContentSchema } from "@/i18n/schema";
import { nanoid } from "nanoid";

type TimelineKeys = keyof ContentSchema["offer"]["ourProcess"]["timeline"];
type TimelineProps = {
  lang: LangType;
};
export const Timeline = ({ lang }: TimelineProps) => {
  const timeLineData = i18n(lang).offer.ourProcess.timeline;
  //TODO: icon pick depends on timelineData[step] name ex. if .. ===deliverproduct => icon
  return (
    <MantineTimeline active={1} bulletSize={24} lineWidth={2}>
      {Object.keys(timeLineData).map((step) => (
        <TimelineItem
          key={nanoid()}
          bullet={<IconGitBranch size={12} />}
          title={timeLineData[step as TimelineKeys].name}
        >
          <Text c="dimmed" size="sm">
            {timeLineData[step as TimelineKeys].description}
          </Text>
          <Button component={Link} href={"/"} variant="transparent">
            {timeLineData[step as TimelineKeys].btn}
          </Button>
        </TimelineItem>
      ))}
    </MantineTimeline>
  );
};
