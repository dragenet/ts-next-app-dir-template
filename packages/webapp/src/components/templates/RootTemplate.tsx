'use client'

import Navbar from '@/components/organisms/Navbar'
import React, { JSX } from 'react'

interface RootTemplateProps {
  children: JSX.Element | string
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
