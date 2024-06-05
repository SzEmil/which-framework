import { AboutUs } from '@/components/AboutUs/AboutUs';
import { BannerHero } from '@/components/BannerHero/BannerHero';
import { getLanguagesStaticParams } from '@/i18n/helpers';
import { I18nProps } from '@/types/types';
import { Box } from '@mantine/core';
import { CaseStudies } from '@/components/CaseStudies/CaseStudies';

type Params = I18nProps;
type PageProps = {
  params: Params;
};
export const generateStaticParams = getLanguagesStaticParams;

export default function Home({ params: { lang } }: PageProps) {
  return (
    <Box>
      <BannerHero lang={lang} />
      <AboutUs lang={lang} />
      <CaseStudies lang={lang} />
    </Box>
  );
}
