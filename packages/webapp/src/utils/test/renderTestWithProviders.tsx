'use client'

import { ReactNode } from 'react'
import Providers from '@/components/providers/Providers'
import { render } from '@testing-library/react'

const renderTestWithProviders = (component: ReactNode) =>
  render(<Providers>{component}</Providers>)

export default renderTestWithProviders
