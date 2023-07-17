import React, { ReactNode } from 'react'
import Providers from '@/components/providers/Providers'
import '@/styles/global.css'

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Food Composer',
  description: 'Food Composer App',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
