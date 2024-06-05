import { AboutUs } from '@/components/AboutUs/AboutUs';
import { BannerHero } from '@/components/BannerHero/BannerHero';
import { getLanguagesStaticParams } from '@/i18n/helpers';
import { I18nProps } from '@/types/types';
import { Box } from '@mantine/core';
import { CaseStudies } from '@/components/CaseStudies/CaseStudies';
import { OurServices } from '@/components/OurServices/OurServices';

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
      <OurServices lang={lang} />
    </Box>
  );
}
