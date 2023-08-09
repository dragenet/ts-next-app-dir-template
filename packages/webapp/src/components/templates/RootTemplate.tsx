'use client'

import React, { ReactNode } from 'react'

import Navbar from '@/components/organisms/Navbar'

interface RootTemplateProps {
  children: ReactNode
}

const RootTemplate = ({ children }: RootTemplateProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default RootTemplate
