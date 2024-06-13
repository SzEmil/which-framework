import { getLanguagesStaticParams } from '@/i18n/helpers';
import { I18nProps } from '@/types/types';
import { Container } from '@mantine/core';
import React, { ReactNode } from 'react';

export const generateStaticParams = getLanguagesStaticParams;

type ContactLayoutProps = {
  children: ReactNode;
  params: I18nProps;
};

const ContactLayout = ({ children, params: { lang } }: ContactLayoutProps) => {
  return <Container pt={70}>{children}</Container>;
};

export default ContactLayout;
