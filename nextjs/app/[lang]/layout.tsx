import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  Container,
  Text,
} from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import { ReactNode } from "react";
import { I18nProps } from "@/types/types";
import { getLanguagesStaticParams, i18n } from "@/i18n/helpers";
import { Header } from "@/components/Header/Header";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";

export const generateStaticParams = getLanguagesStaticParams;

const roboto = Roboto({
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Minfdev",
  description: "Buisness and ecomerence solutions",
};

type RootLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

export default async function RootLayout({ children, params: { lang } }: RootLayoutProps) {
  return (
    <html lang={lang}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={roboto.className}>
        <Providers>
          <AppShell>
            <AppShellHeader
              pos={{ base: "static", md: "fixed" }}
              withBorder={false}
              style={{ boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.10)" }}
              bg={"sgrayscaleWhite.0"}
              zIndex={250}
            >
              <Container>
                <Header lang={lang} />
              </Container>
            </AppShellHeader>
            <AppShellMain pos={"relative"}>{children}</AppShellMain>
            <AppShellFooter withBorder={false} pos={"static"}>
              <Container>
                <Footer lang={lang} />
              </Container>
            </AppShellFooter>
          </AppShell>
        </Providers>
      </body>
    </html>
  );
}
