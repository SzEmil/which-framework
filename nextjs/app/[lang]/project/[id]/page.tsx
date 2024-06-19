import { NextImage } from "@/components/NextImage/NextImage";
import { PROJECTS } from "@/constants";
import { getLanguagesStaticParams } from "@/i18n/helpers";
import { I18nProps } from "@/types/types";
import { Box } from "@mantine/core";

type Params = { id: string } & I18nProps;
type PageProps = {
  params: Params;
};
export const generateStaticParams = getLanguagesStaticParams;

export default function Home({ params: { lang, id } }: PageProps) {
  console.log(id);
  const project = PROJECTS.find((project) => project.id === +id);
  return (
    <Box>
      <NextImage
        src={project?.baner ?? "https://placehold.co/600x400"}
        alt={project?.name ?? "project"}
        w={600}
        h={400}
        style={{ display: "block", height: "auto", maxHeight: "95vh", width: "100%" }}
      />
    </Box>
  );
}
