import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface VercelButtonProps {
  projectName?: string
}

export function VercelButton({ projectName }: VercelButtonProps) {
  if (!projectName) {
    return null
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" asChild className="px-3">
          <a
            href={`${process.env.VERCEL_ROOT_URL}${projectName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>▲</span>
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Vercel project</TooltipContent>
    </Tooltip>
  )
}
