import * as React from 'react'

import { cn } from '@/lib'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export const PageContainer = ({ className, children }: PageContainerProps) => (
  <section className={cn('p-7.5 md:p-17.5', className)}>{children}</section>
)
