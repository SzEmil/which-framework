import { LangType } from "@/types/types";
import { BackgroundImage, Box, Container, Stack, Text } from "@mantine/core";

type ProjectBanerProps = {
  lang: LangType;
  baner: string;
  title: string;
  subTitle: {
    pl: string;
    en: string;
  };
  color: string;
};

export const ProjectBaner = ({ lang, baner, title, subTitle, color }: ProjectBanerProps) => {
  return (
    <Box style={{ display: "block", height: "95vh", maxHeight: "95vh", width: "100%" }}>
      <BackgroundImage
        src={baner ?? "https://placehold.co/600x400"}
        style={{
          display: "flex",
          height: "100%",
          maxHeight: "95vh",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Container w={"100%"}>
          <Box style={{ position: "relative" }}>
            <Stack style={{ position: "relative" }}>
              <Text fz={42} fw={700} style={{ zIndex: 100 }}>
                {title}
              </Text>
              <Text fz={24} fw={400} maw={550} style={{ zIndex: 100 }}>
                {subTitle[lang]}
              </Text>
              <Box
                style={{
                  position: "absolute",
                  width: "364px",
                  height: "364px",
                  borderRadius: "50%",
                  left: "-70px",
                  top: "-60%",
                  backgroundColor: color,
                  zIndex: 10,
                }}
              />
            </Stack>
          </Box>
        </Container>
      </BackgroundImage>
    </Box>
  );
};
