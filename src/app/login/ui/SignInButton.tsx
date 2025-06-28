import { Button } from '@/components/ui/button'
import { signIn } from '@/lib/auth'
import { IconType } from 'react-icons'

export interface SignInButtonProps {
  provider: string
  providerName: string
  icon: IconType
}

export function SignInButton({
  provider,
  providerName,
  icon: Icon,
}: SignInButtonProps) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider, { redirectTo: '/' })
      }}
    >
      <Button type="submit" variant="outline" className="items-center">
        <Icon className="h-5 w-5" />
        Continue with {providerName}
      </Button>
    </form>
  )
}
