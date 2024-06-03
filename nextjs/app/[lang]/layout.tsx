import '@mantine/core/styles.css';
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  Text,
} from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { ReactNode } from 'react';
import { I18nProps } from '@/types/types';
import { getLanguagesStaticParams, i18n } from '@/i18n/helpers';


export const generateStaticParams = getLanguagesStaticParams;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minfdev',
  description: 'Buisness and ecomerence solutions',
};

type RootLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

export default async function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {

  return (
    <html lang={lang}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <Providers>
          <AppShell>
            <AppShellHeader
              pos={{ base: 'static', md: 'fixed' }}
              withBorder={false}
              style={{ boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)' }}
              zIndex={250}
            >
              <Container maw={'100%'} pl={24} pr={24}>
                HEADER
              </Container>
            </AppShellHeader>
            <AppShellMain pos={'relative'} mt={{ base: 0, md: 77 }}>
              {children}
            </AppShellMain>
            <AppShellFooter withBorder={false} pos={'static'}>
              FOOTER
            </AppShellFooter>
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
