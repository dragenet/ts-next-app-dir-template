import React, { ReactNode } from 'react';
import StylesProvider from '@/app/components/providers/StylesProvider';

export interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
