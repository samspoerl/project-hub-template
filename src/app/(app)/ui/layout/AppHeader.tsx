// Sticky header at the top of all app pages.

import { GitHubButton } from '@/components/GitHubButton'
import { VercelButton } from '@/components/VercelButton'
import { LogoutButton } from './header-buttons/LogoutButton'
import { ThemeToggle } from './header-buttons/ThemeToggle'

export function AppHeader() {
  return (
    <header className="bg-background sticky top-0 z-10 flex w-full grow-0 items-center justify-between gap-1 border-b p-2">
      <LogoutButton />
      <div className="flex gap-1">
        <VercelButton projectName={process.env.VERCEL_PROJECT_NAME} />
        <GitHubButton repoName={process.env.GITHUB_REPO_NAME} />
        <ThemeToggle />
      </div>
    </header>
  )
}
