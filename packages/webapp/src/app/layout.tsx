import Providers from '@/components/providers/Providers'
import '@/styles/global.css'
import React, { ReactNode } from 'react'

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Food Composer',
  description: 'Food Composer App',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="brand">
      <body suppressHydrationWarning={true}>
        <Providers>
          <RootLayout>{children}</RootLayout>
        </Providers>
      </body>
    </html>
  )
}
