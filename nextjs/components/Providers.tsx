'use client';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '@/theme/theme';

type ProvidersProps = {
  children: React.ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
