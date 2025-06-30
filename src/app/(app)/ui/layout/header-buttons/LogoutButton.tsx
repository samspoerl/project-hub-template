import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { signOut } from '@/lib/auth'
import { LogOutIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

export function LogoutButton() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          onClick={async () => {
            'use server'
            if (process.env.USE_AUTH === 'false') {
              redirect('/login')
            } else {
              await signOut({ redirectTo: '/login' })
            }
          }}
        >
          <LogOutIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Log out</TooltipContent>
    </Tooltip>
  )
}
