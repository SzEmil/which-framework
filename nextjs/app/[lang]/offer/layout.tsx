import { getLanguagesStaticParams } from '@/i18n/helpers';
import { I18nProps } from '@/types/types';
import { Box, Container } from '@mantine/core';
import React, { ReactNode } from 'react';

export const generateStaticParams = getLanguagesStaticParams;

type ProductsLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const OfferLayout = ({ children, params: { lang } }: ProductsLayoutProps) => {
  return <Box>{children}</Box>;
};

export default OfferLayout;
