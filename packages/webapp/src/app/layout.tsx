import React, { ReactNode } from 'react';
import Providers from '@/components/providers/Providers';

export interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Food Composer',
  description: 'Food Composer App',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
