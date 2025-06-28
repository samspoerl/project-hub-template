import { LoginForm } from './ui/LoginForm'
import PageWrapper from '@/components/PageWrapper'

export default function Page() {
  return (
    <PageWrapper className="items-center justify-center">
      <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
        Project Hub
      </h1>
      <LoginForm />
    </PageWrapper>
  )
}
