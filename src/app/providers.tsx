'use client'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Theme } from '@/contexts/ThemeContext'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useRef } from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'

function usePrevious<T>(value: T) {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AppContext = createContext<{ previousPathname?: string }>({})

interface AppProvidersProps {
  initialTheme: Theme
  children: React.ReactNode
}

export function AppProviders({ initialTheme, children }: AppProvidersProps) {
  const pathname = usePathname()
  const previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider initialTheme={initialTheme}>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </AppContext.Provider>
  )
}
