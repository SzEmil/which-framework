import { getLanguagesStaticParams } from '@/i18n/helpers';
import { I18nProps } from '@/types/types';
import { Container } from '@mantine/core';
import React, { ReactNode } from 'react';

export const generateStaticParams = getLanguagesStaticParams;

type ProductsLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const OfferLayout = ({ children, params: { lang } }: ProductsLayoutProps) => {
  return <Container pt={70}>{children}</Container>;
};

export default OfferLayout;
