import { i18n } from '@/i18n/helpers';
import { Box, Container, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';

type BannerHeroProps = {
  lang: string;
};
export const BannerHero = ({ lang }: BannerHeroProps) => {
  return (
    <Flex
      bg={'supportColor.1'}
      h={'100vh'}
      align={'center'}
      justify={'center'}
      w={'100%'}
    >
      <Container
        maw={1200}
        w={'100%'}
      >
        <Flex align={'center'} justify={'space-between'} w={'100%'}>
          <Box pos={'relative'}>
            <Stack gap={30} w={'100%'} maw={440}>
              <Text fz={30} fw={400} style={{ zIndex: 100 }}>
                {i18n(lang).home.bannerHero.slogan1}
              </Text>
              <Text fz={50} fw={700} style={{ zIndex: 100 }} tt={'uppercase'}>
                {i18n(lang).home.bannerHero.slogan2}
              </Text>
            </Stack>
            <Image
              src={'/banner-hero-green.svg'}
              alt="devices"
              width={480}
              height={200}
              style={{
                height: 'auto',
                display: 'block',
                position: 'absolute',
                zIndex: 0,
                top: -30,
                left: -50,
              }}
            />
          </Box>

          <Image
            src={'/banner-hero-devices.svg'}
            alt="devices"
            width={650}
            height={200}
            style={{ height: 'auto', display: 'block' }}
          />
        </Flex>
      </Container>
    </Flex>
  );
};
