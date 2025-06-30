import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { BiLogoGithub } from 'react-icons/bi'
import { Button } from './ui/button'

interface GitHubButtonProps {
  repoName?: string
}

export function GitHubButton({ repoName }: GitHubButtonProps) {
  if (!repoName) {
    return null
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild variant="ghost">
          <a
            href={`${process.env.GITHUB_ROOT_URL}${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub className="fill-secondary-foreground" />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>GitHub repo</TooltipContent>
    </Tooltip>
  )
}
