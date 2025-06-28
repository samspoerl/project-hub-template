// Main content layout for all app pages.

import type React from 'react'

export function AppContent({ children }: { children: React.ReactNode }) {
  return <main className="flex w-full flex-1 p-0 sm:p-2">{children}</main>
}
