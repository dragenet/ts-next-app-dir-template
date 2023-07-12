'use client'

import { store } from '@/store'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import StylesProvider from './StylesProvider'

interface ProvidersProps {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StylesProvider>
      <Provider store={store}>{children}</Provider>
    </StylesProvider>
  )
}

export default Providers
