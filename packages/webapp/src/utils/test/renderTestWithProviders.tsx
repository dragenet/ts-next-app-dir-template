'use client'

import { ReactNode } from 'react'
import { render } from '@testing-library/react'

import Providers from '@/components/providers/Providers'

const renderTestWithProviders = (component: ReactNode) =>
  render(<Providers>{component}</Providers>)

export default renderTestWithProviders
