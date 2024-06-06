import { i18n } from '@/i18n/helpers';
import { LangType } from '@/types/types';
import { Box, Button, Container, Flex, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

type BannerHeroProps = {
  lang: LangType;
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
      <Container maw={1200} w={'100%'}>
        <Flex align={'center'} justify={'space-between'} w={'100%'} gap={10}>
          <Box pos={'relative'}>
            <Stack gap={30} w={'100%'} maw={550}>
              <Text fz={30} fw={400} style={{ zIndex: 100 }}>
                {i18n(lang).home.bannerHero.slogan1}
              </Text>
              <Title order={1} fz={50} fw={700} style={{ zIndex: 100 }} tt={'uppercase'}>
                {i18n(lang).home.bannerHero.slogan2}
              </Title>
              <Button
                style={{ zIndex: 100 }}
                display={'inline'}
                variant="filled"
                bg={'grayscaleWhite.0'}
                autoContrast
                c={'grayscale1.0'}
                href={'/'}
                component={Link}
                fw={700}
                fz={16}
    
                rightSection={<IconArrowRight size={24} />}
              >
                {i18n(lang).home.bannerHero.btn}
              </Button>
            </Stack>
            <Image
              src={'/banner-hero-green.svg'}
              alt="devices"
              width={580}
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
