import React from 'react'
import { cn } from "@/lib/utils"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'lead' | 'large' | 'small' | 'muted'
}

const textStyles: Record<NonNullable<TextProps['variant']>, string> = {
  default: "leading-7 not-first:mt-6",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(textStyles[variant], className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = "Text"

