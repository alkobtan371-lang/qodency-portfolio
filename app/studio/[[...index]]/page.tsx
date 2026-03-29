'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return (
    <div 
      dir="ltr" 
      className="fixed inset-0 z-[9999] bg-white w-screen h-screen overflow-hidden"
    >
      <NextStudio config={config} />
    </div>
  )
}
