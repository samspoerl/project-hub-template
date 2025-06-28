import { AppContent } from './ui/layout/AppContent'
import { AppHeader } from './ui/layout/AppHeader'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full">
      <AppHeader />
      <AppContent>{children}</AppContent>
    </div>
  )
}
