import { GitHubButton } from '@/components/GitHubButton'
import { Card, CardContent } from '@/components/ui/card'
import { VercelButton } from '@/components/VercelButton'
import { Project } from '@/lib/types'
import { ExternalLinkIcon } from 'lucide-react'
import { StatusTracker } from './StatusTracker'
import { VisibilityIndicator } from './VisibilityIndicator'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h3>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold"
          >
            <div className="flex flex-row items-center gap-2">
              <span>{project.url.replace('https://', '')}</span>
              <ExternalLinkIcon size={16} />
            </div>
          </a>
        )}
        <VisibilityIndicator visibility={project.visibility} />
        <StatusTracker currentStatus={project.status} />
        <div className="mt-2 flex items-center gap-2">
          {project.gitHubRepoName && (
            <GitHubButton repoName={project.gitHubRepoName} />
          )}
          {project.vercelProjectName && (
            <VercelButton projectName={project.vercelProjectName} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
