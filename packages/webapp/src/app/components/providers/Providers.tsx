'use client';

import { ReactNode } from 'react';
import StylesProvider from '@/app/components/providers/StylesProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <StylesProvider>{children}</StylesProvider>;
};

export default Providers;
