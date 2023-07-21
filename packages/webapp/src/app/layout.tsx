import Navbar from '@/components/organisms/Navbar'
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
          <div className="flex flex-col">
            <Navbar />
            <div>{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
