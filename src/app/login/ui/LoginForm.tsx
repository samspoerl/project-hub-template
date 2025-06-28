import { BiLogoGithub } from 'react-icons/bi'
import { SignInButton, SignInButtonProps } from './SignInButton'

const loginProviders: SignInButtonProps[] = [
  { provider: 'github', providerName: 'GitHub', icon: BiLogoGithub },
]

export function LoginForm() {
  return (
    <div className="flex flex-col gap-4">
      {loginProviders.map((p) => (
        <SignInButton
          key={p.provider}
          provider={p.provider}
          providerName={p.providerName}
          icon={p.icon}
        />
      ))}
    </div>
  )
}
