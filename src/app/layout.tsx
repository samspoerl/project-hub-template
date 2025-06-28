import { Theme } from '@/contexts/ThemeContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import type React from 'react'
import './globals.css'
import { AppProviders } from './providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Project Hub',
}

async function getInitialTheme(): Promise<Theme> {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')?.value
  return theme === 'dark' ? 'dark' : 'light'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await getInitialTheme()

  return (
    <html
      lang="en"
      className={theme === 'dark' ? 'dark' : ''}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        <AppProviders initialTheme={theme}>
          <div id="root-layout" className="flex min-h-screen">
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  )
}
