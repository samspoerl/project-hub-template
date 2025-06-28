import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { signOut } from '@/lib/auth'
import { LogOutIcon } from 'lucide-react'

export function LogoutButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          onClick={async () => {
            'use server'
            await signOut({ redirectTo: '/login' })
          }}
        >
          <LogOutIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Log out</TooltipContent>
    </Tooltip>
  )
}
