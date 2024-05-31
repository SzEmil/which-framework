'use client';

import { MantineProvider } from '@mantine/core';
import React from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};
export const Providers = ({ children }: ProvidersProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};
