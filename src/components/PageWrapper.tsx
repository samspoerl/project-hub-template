import { cn } from '@/lib/utils'
import * as React from 'react'

export default function PageWrapper({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      id="page-wrapper"
      className={cn(
        'mx-auto flex max-w-6xl flex-1 flex-col gap-6 px-6 py-4 overflow-auto mb-8',
        className
      )}
      {...props}
    />
  )
}
