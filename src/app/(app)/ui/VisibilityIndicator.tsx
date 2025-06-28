import { Text } from '@/components/ui/text'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

interface VisibilityIndicatorProps {
  visibility: string
}

export function VisibilityIndicator({ visibility }: VisibilityIndicatorProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      {visibility === 'Public' ? (
        <EyeIcon className="text-muted-foreground size-4" />
      ) : (
        <EyeOffIcon className="text-muted-foreground size-4" />
      )}
      <Text variant="muted">{visibility}</Text>
    </div>
  )
}
