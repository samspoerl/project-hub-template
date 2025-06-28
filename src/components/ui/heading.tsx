import { cn } from '@/lib/utils'
import React from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight',
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, className, children, ...props }, ref) => {
    const Component = level
    const headingClass = headingStyles[level]

    return (
      <Component ref={ref} className={cn(headingClass, className)} {...props}>
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'
